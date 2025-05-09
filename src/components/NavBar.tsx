"use client";

import { Box, Flex, Spacer, Button } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaTrain } from "react-icons/fa";
import { ReactNode, useEffect } from "react";
import { ghostButtonStyle } from "../styles/tables/buttonStyles";
import { useAuth } from "../contexts/auth/useAuth";

const MotionBox = motion(Box);

const AnimatedLink = ({
  href,
  children,
  index,
}: {
  href: string;
  children: ReactNode;
  index: number;
}) => {
  return (
    <MotionBox
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      ml={4}
    >
      <Link
        href={href}
        style={{
          color: "white",
          fontSize: "18px",
          fontWeight: 400,
          textDecoration: "none",
          padding: "8px 16px",
          display: "inline-block",
        }}
      >
        {children}
      </Link>
    </MotionBox>
  );
};

const NavBar = () => {
  const { isAuthenticated, logout, refreshAuthState } = useAuth();

  useEffect(() => {
    refreshAuthState();
  }, [refreshAuthState]);

  return (
    <Flex
      align="center"
      p={4}
      bg="rgba(255, 255, 255, 0.1)"
      style={{
        backdropFilter: "blur(10px)",
        background: "linear-gradient(to right, #3182ce, #805ad5)",
      }}
      position="sticky"
      top={0}
      zIndex={10}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <FaTrain size={32} color="white" />
      </motion.div>
      <Spacer />
      <AnimatedLink href="/" index={0}>
        Home
      </AnimatedLink>
      <AnimatedLink href="/search" index={1}>
        Search
      </AnimatedLink>
      {isAuthenticated ? (
        <MotionBox
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          ml={4}
        >
          <Button
            onClick={logout}
            {...ghostButtonStyle}
            fontSize="16px"
            fontWeight="medium"
            py={1}
            px={3}
            size="sm"
          >
            Sign Out
          </Button>
        </MotionBox>
      ) : (
        <AnimatedLink href="/auth" index={2}>
          Login
        </AnimatedLink>
      )}
    </Flex>
  );
};

export default NavBar;
