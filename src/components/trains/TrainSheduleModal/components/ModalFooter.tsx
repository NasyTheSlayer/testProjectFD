import { Box, Button } from "@chakra-ui/react";

interface ModalFooterProps {
  onClose: () => void;
  mode: "add" | "edit";
}

const ModalFooter = ({ onClose, mode }: ModalFooterProps) => {
  return (
    <Box
      borderTop="1px"
      borderColor="gray.200"
      pt={4}
      pb={4}
      px={6}
      display="flex"
      justifyContent="flex-end"
      bg="gray.50"
    >
      <Button
        variant="ghost"
        mr={3}
        onClick={onClose}
        size="lg"
        _hover={{ bg: "gray.100" }}
      >
        Cancel
      </Button>
      <Button
        type="submit"
        form="train-schedule-form"
        colorScheme="blue"
        size="lg"
        border="none"
        outline="none"
        backgroundImage="linear-gradient(90deg, #3182ce 0%, #4557b8 33%, #634db1 66%, #805ad5 100%)"
        backgroundSize="200% 100%"
        _hover={{
          backgroundImage:
            "linear-gradient(90deg, #2c5282 0%, #3b4c8b 33%, #543fa3 66%, #6b46c1 100%)",
          transform: "translateY(-1px)",
          border: "none",
          outline: "none",
        }}
        _active={{
          transform: "translateY(0)",
          border: "none",
          outline: "none",
        }}
        _focus={{
          boxShadow: "none",
          outline: "none",
          border: "none",
        }}
        transition="all 0.2s"
        borderRadius="md"
        boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
      >
        {mode === "add" ? "Add Schedule" : "Save Changes"}
      </Button>
    </Box>
  );
};

export default ModalFooter;
