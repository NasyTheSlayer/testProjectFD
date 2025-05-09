"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Input, Heading, Flex, Stack } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth/useAuth";
import {
  gradientButtonStyle,
  ghostButtonStyle,
} from "@/styles/tables/buttonStyles";
import { authSchema, type AuthFormData } from "@/libs/validation";
import { inputStyles } from "@/styles/auth/inputStyles";

const MotionBox = motion(Box);
const MotionForm = motion.form;

const AuthPage = () => {
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { login, register: registerUser } = useAuth();
  const isLogin = authMode === "login";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: AuthFormData) => {
    setIsLoading(true);
    try {
      const authFn = isLogin ? login : registerUser;
      const success = await authFn(data.email, data.password);
      if (success) router.push("/");
    } catch (error) {
      console.error("Authentication error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      minH="100vh"
      style={{ background: "linear-gradient(to right, #3182ce, #805ad5)" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <MotionBox
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        bg="rgba(255, 255, 255, 0.2)"
        style={{ backdropFilter: "blur(10px)" }}
        p={8}
        borderRadius="md"
        boxShadow="lg"
        width={{ base: "90%", md: "400px" }}
        mt={{ base: 0, md: -40 }}
      >
        <Heading as="h2" size="lg" color="white" textAlign="center" mb={4}>
          {isLogin ? "Login" : "Registration"}
        </Heading>
        <Flex justify="center" mb={4}>
          {["login", "register"].map((mode) => (
            <Button
              key={mode}
              onClick={() => {
                setAuthMode(mode as "login" | "register");
                reset();
              }}
              mr={mode === "login" ? 2 : 0}
              {...(mode === authMode ? gradientButtonStyle : ghostButtonStyle)}
            >
              {mode === "login" ? "Login" : "Register"}
            </Button>
          ))}
        </Flex>
        <AnimatePresence mode="wait">
          <MotionForm
            key={authMode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Stack gap={4}>
              <FormControl isInvalid={!!errors.email}>
                <FormLabel color="white">Email</FormLabel>
                <Input
                  {...register("email")}
                  placeholder="Enter your email"
                  {...inputStyles}
                />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.password}>
                <FormLabel color="white">Password</FormLabel>
                <Input
                  type="password"
                  {...register("password")}
                  placeholder="Enter your password"
                  {...inputStyles}
                />
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              </FormControl>
              {!isLogin && (
                <FormControl isInvalid={!!errors.confirmPassword}>
                  <FormLabel color="white">Confirm Password</FormLabel>
                  <Input
                    type="password"
                    {...register("confirmPassword")}
                    placeholder="Confirm your password"
                    {...inputStyles}
                  />
                  <FormErrorMessage>
                    {errors.confirmPassword?.message}
                  </FormErrorMessage>
                </FormControl>
              )}
              <Button
                type="submit"
                loading={isLoading}
                size="lg"
                width="full"
                {...gradientButtonStyle}
                _disabled={{
                  opacity: 0.6,
                  cursor: "not-allowed",
                  _hover: { transform: "none" },
                }}
              >
                {isLogin ? "Login" : "Register"}
              </Button>
            </Stack>
          </MotionForm>
        </AnimatePresence>
      </MotionBox>
    </Box>
  );
};

export default AuthPage;
