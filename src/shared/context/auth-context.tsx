import { createContext } from "react";

interface InterfaceAuthContext {
  isLoggedIn: boolean;
  userId: string | null;
  token: string | null;
  login: (uid: string, token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<InterfaceAuthContext>({
  isLoggedIn: false,
  userId: null,
  token: null,
  login: (uid: string, token: string) => {},
  logout: () => {},
});
