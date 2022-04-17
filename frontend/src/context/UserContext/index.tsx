import { GoogleUserResponse } from "@/utils/types";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useNavigate,
  type ReactNode,
} from "react";

type $TSFIXME = any;
type User = GoogleUserResponse;

type ResponseHandler = (res: $TSFIXME) => void;

interface UserContextData {
  user: User | null;
  handleSuccessfulLogin: ResponseHandler;
  handleFailedLogin: ResponseHandler;
  handleLogout: () => void;
}

const UserContext = createContext<UserContextData | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used in a UserProvider");
  }
  return context;
};

interface UserProviderProps {
  children?: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleSuccessfulLogin: ResponseHandler = async (res) => {

    const userData: GoogleUserResponse = res.profileObj

    setUser(userData);

    const formData = {
      id: userData.googleId,
      email: userData.email,
      first_name: userData.givenName,
      last_name: userData.familyName,
      img_url: userData.imageUrl,
    }

    //POST

console.log(1);

    const response = await fetch("http://localhost:5000/user/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    console.log(2);

    console.log(response);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleFailedLogin: ResponseHandler = (res) => {
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        handleSuccessfulLogin,
        handleLogout,
        handleFailedLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
