'use client';

import {Box, Button, Heading, Text} from '@chakra-ui/react';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {BackgroundTrains} from '@/components/trains/BackgroundTrains/BackgroundTrains';
import {gradientButtonStyle} from '@/styles/tables/buttonStyles';

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionBox = motion(Box);

export default function Home() {
  return (
    <Box
      position="relative"
      minH="100vh"
      overflow="hidden"
      style={{
        background: 'linear-gradient(to right, #3182ce, #805ad5)',
      }}
    >
      <BackgroundTrains/>
      <Box
        textAlign="center"
        py={12}
        px={4}
        position="relative"
        zIndex={1}
        bg="rgba(255, 255, 255, 0.2)"
        style={{backdropFilter: 'blur(10px)'}}
        borderRadius="md"
        boxShadow="lg"
        maxW="500px"
        mx="auto"
        mt={16}
      >
        <Box maxW="480px" mx="auto" mb={3}>
          <MotionHeading
            initial={{opacity: 0, y: -50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.2}}
            size="xl"
            fontWeight="bold"
            lineHeight="1.1"
            color="white"
            textAlign="center"
          >
            Welcome to Train Schedule App
          </MotionHeading>
        </Box>
        <MotionText
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.4}}
          fontSize="lg"
          mb={6}
          color="white"
          textAlign="center"
        >
          Find train schedules and book tickets easily and quickly.
        </MotionText>
        <MotionBox
          initial={{opacity: 0, scale: 0.8}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5, delay: 0.6}}
        >
          <Link href="/search">
            <Button
              size="lg"
              {...gradientButtonStyle}
              transition="all 0.2s"
            >
              Start searching
            </Button>
          </Link>
        </MotionBox>
      </Box>
    </Box>
  );
}
