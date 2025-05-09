import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface TrainTrackProps {
  yPosition: number;
  duration: number;
}

export const TrainTrack = ({ yPosition, duration }: TrainTrackProps) => {
  return (
    <Box position="absolute" top={`${yPosition}%`} left={0} width="100%">
      <Box height="2px" bg="whiteAlpha.300" />
      <motion.div
        initial={{ x: "-5%" }}
        animate={{ x: "105%" }}
        transition={{
          repeat: Infinity,
          duration: duration,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: "-5px",
          width: "10px",
          height: "10px",
          backgroundColor: "white",
          borderRadius: "50%",
        }}
      />
    </Box>
  );
};
