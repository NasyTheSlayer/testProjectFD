import {Box} from "@chakra-ui/react";
import {TrainTrack} from "../TrainTrack/TrainTrack";

export const BackgroundTrains = () => {
  const tracks = [
    {y: 10, duration: 15},
    {y: 30, duration: 20},
    {y: 50, duration: 10},
    {y: 70, duration: 25},
    {y: 90, duration: 18},
  ];

  return (
    <Box position="absolute" top={0} left={0} width="100%" height="100%" zIndex={-1}>
      {tracks.map((track, index) => (
        <TrainTrack key={index} yPosition={track.y} duration={track.duration}/>
      ))}
    </Box>
  );
};
