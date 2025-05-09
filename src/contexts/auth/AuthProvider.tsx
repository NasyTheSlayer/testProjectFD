"use client";

import { useState, useEffect, ReactNode } from "react";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";
import api from "../../libs/axios";
import { useToast } from "@chakra-ui/toast";
import { AxiosError } from "axios";
import { ApiResponse } from "@/types/api";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const pathname = usePathname();
  const toast = useToast();

  const refreshAuthState = () => {
    const token = Cookies.get("accessToken");
    setIsAuthenticated(!!token);
  };

  useEffect(() => {
    refreshAuthState();
  }, [pathname]);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await api.post("auth/login", { email, password });
      const accessToken = response.data.data.tokens.accessToken;
      const refreshToken = response.data.data.tokens.refreshToken;

      Cookies.set("accessToken", accessToken, { expires: 1 });
      Cookies.set("refreshToken", refreshToken, { expires: 7 });

      refreshAuthState();

      toast({
        title: "Success",
        description: "Successfully logged in",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      return true;
    } catch (error: unknown) {
      const axiosError = error as AxiosError<ApiResponse>;
      toast({
        title: "Error",
        description: axiosError.response?.data?.message || "Login failed",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return false;
    }
  };

  const register = async (
    email: string,
    password: string,
  ): Promise<boolean> => {
    try {
      const response = await api.post("auth/register", { email, password });
      const accessToken = response.data.data.tokens.accessToken;
      const refreshToken = response.data.data.tokens.refreshToken;

      Cookies.set("accessToken", accessToken, { expires: 1 });
      Cookies.set("refreshToken", refreshToken, { expires: 7 });

      refreshAuthState();

      toast({
        title: "Success",
        description: "Successfully registered",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      return true;
    } catch (error: unknown) {
      const axiosError = error as AxiosError<ApiResponse>;
      toast({
        title: "Error",
        description:
          axiosError.response?.data?.message || "Registration failed",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return false;
    }
  };

  const logout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, register, logout, refreshAuthState }}
    >
      {children}
    </AuthContext.Provider>
  );
};
