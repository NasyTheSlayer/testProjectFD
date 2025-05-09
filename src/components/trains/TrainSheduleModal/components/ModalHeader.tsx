import { Box, Text, Button } from "@chakra-ui/react";

interface ModalHeaderProps {
  title: string;
  onClose: () => void;
}

const ModalHeader = ({ title, onClose }: ModalHeaderProps) => {
  return (
    <Box
      fontSize="2xl"
      fontWeight="bold"
      color="gray.700"
      borderBottom="1px"
      borderColor="gray.200"
      pb={4}
      pt={6}
      px={6}
      position="relative"
      bg="gray.50"
    >
      <Text color="blue.500" textAlign="center">
        {title}
      </Text>
      <Button
        position="absolute"
        top="16px"
        right="16px"
        size="lg"
        variant="ghost"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="gray.500"
        _hover={{ color: "gray.700" }}
        onClick={onClose}
        w="40px"
        h="40px"
        minW="40px"
        p="0"
      >
        ✕
      </Button>
    </Box>
  );
};

export default ModalHeader;
