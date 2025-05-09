"use client";

import { ReactNode } from "react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createStandaloneToast } from "@chakra-ui/toast";
import { AuthProvider } from "@/contexts/auth/AuthProvider";

const { ToastContainer } = createStandaloneToast();
const queryClient = new QueryClient();

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          {children}
          <ToastContainer />
        </AuthProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
};
