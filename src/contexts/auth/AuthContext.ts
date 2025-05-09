import { createContext } from "react";

export interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  refreshAuthState: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
