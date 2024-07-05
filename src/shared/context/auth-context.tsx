import { createContext } from "react";

interface InterfaceAuthContext {
  isLoggedIn: boolean;
  userId: string | null;
  login: (uid: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<InterfaceAuthContext>({
  isLoggedIn: false,
  userId: null,
  login: (uid: string) => {},
  logout: () => {},
});
