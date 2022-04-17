import { APIUserResponse, GoogleUserResponse } from "@/utils/types";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type $TSFIXME = any;
type User = APIUserResponse;

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
  const [user, setUser] = useState<APIUserResponse | null>(null);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleSuccessfulLogin: ResponseHandler = async (res) => {
    const userData: GoogleUserResponse = res.profileObj;
    const apiData: APIUserResponse = {
      email: userData.email,
      last_name: userData.familyName,
      first_name: userData.givenName,
      googleId: userData.googleId,
      img_url: userData.imageUrl,
      name: userData.name,
      drinks: [],
      location: "",
      matches: [],
      discord: "",
      messenger: "",
      instagram: "",
    };
    setUser(apiData);

    const formData = {
      id: userData.googleId,
      email: userData.email,
      first_name: userData.givenName,
      last_name: userData.familyName,
      img_url: userData.imageUrl,
    };

    //POST

    const response = await fetch("http://localhost:8080/user/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).catch((err) => {
      console.error(err);
    });
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
