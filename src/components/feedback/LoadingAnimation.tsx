'use client';

import {Box, Text, Center} from '@chakra-ui/react';
import {motion} from 'framer-motion';

const LoadingAnimation = () => (
  <Center minH="50vh" flexDirection="column">
    <Box
      position="relative"
      width="200px"
      height="80px"
      mb={8}
    >
      <motion.div
        initial={{x: -100}}
        animate={{x: 250}}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut"
        }}
        style={{
          position: "absolute",
          top: 10,
          left: -50,
          width: 60,
          height: 30,
          background: "linear-gradient(90deg, #3182ce 0%, #4557b8 100%)",
          borderRadius: 8,
          zIndex: 2
        }}
      />
      <Box
        position="absolute"
        bottom="0"
        width="100%"
        height="5px"
        bg="gray.300"
        borderRadius="full"
      />
      <Box
        position="absolute"
        top="40px"
        left="5px"
        width="10px"
        height="10px"
        bg="gray.400"
        borderRadius="full"
      />
      <Box
        position="absolute"
        top="40px"
        left="185px"
        width="10px"
        height="10px"
        bg="gray.400"
        borderRadius="full"
      />
    </Box>
    <Text fontSize="xl" fontWeight="medium" color="blue.600">Loading train schedules...</Text>
    <Text mt={2} color="gray.500">Please wait while we gather the latest information</Text>
  </Center>
);

export default LoadingAnimation;
