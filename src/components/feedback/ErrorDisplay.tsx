"use client";

import { Box, Icon, Text, Center } from "@chakra-ui/react";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorDisplay = () => (
  <Center minH="50vh" flexDirection="column">
    <Box
      bg="red.50"
      p={6}
      borderRadius="lg"
      boxShadow="md"
      textAlign="center"
      maxW="500px"
      border="1px solid"
      borderColor="red.200"
    >
      <Icon as={FaExclamationTriangle} w={14} h={14} color="red.500" mb={4} />
      <Text fontSize="xl" fontWeight="bold" color="red.500" mb={2}>
        Error Loading Train Information
      </Text>
      <Text color="gray.600" mb={4}>
        We couldn&apos;t retrieve the train schedules. There might be a
        connection issue or our services are temporarily unavailable.
      </Text>
      <Text fontSize="sm" color="gray.500">
        Please try again later or contact support if the problem persists.
      </Text>
    </Box>
  </Center>
);

export default ErrorDisplay;
