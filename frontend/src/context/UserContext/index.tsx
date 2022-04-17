import { GoogleUserResponse } from "@/utils/types";
import {
  createContext,
  useContext,
  useEffect,
  useState,
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

  const handleSuccessfulLogin: ResponseHandler = (res) => {
    setUser(res.profileObj);
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
