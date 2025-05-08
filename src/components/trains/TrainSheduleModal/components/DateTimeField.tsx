import { 
  Box, 
  Input 
} from '@chakra-ui/react';
import {
  FormControl, 
  FormLabel, 
  FormErrorMessage
} from '@chakra-ui/form-control';
import { FaCalendarAlt } from 'react-icons/fa';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { TrainScheduleFormData } from '@/libs/validation/trainSheduleSchema';

interface DateTimeFieldProps {
  name: 'departureTime' | 'arrivalTime';
  label: string;
  register: UseFormRegister<TrainScheduleFormData>;
  errors: FieldErrors<TrainScheduleFormData>;
}

export default function DateTimeField({
  name,
  label,
  register,
  errors
}: DateTimeFieldProps) {
  return (
    <FormControl isInvalid={!!errors[name]} flex="1">
      <FormLabel fontWeight="medium" textAlign="center">{label}</FormLabel>
      <Box
        borderRadius="md"
        overflow="hidden"
        boxShadow="sm"
        border="1px solid"
        borderColor="gray.300"
        height="56px"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        position="relative"
      >
        <Box position="absolute" left="10px" top="50%" transform="translateY(-50%)" zIndex={2} color="gray.500">
          <FaCalendarAlt/>
        </Box>
        <Input
          type="datetime-local"
          {...register(name, {required: `${label} is required`})}
          pl="35px"
          textAlign="center"
          size="lg"
          bg="white"
          _hover={{bg: "gray.50"}}
          _focus={{bg: "white", borderColor: 'blue.400'}}
          borderRadius="none"
          border="none"
          height="100%"
          width="100%"
        />
      </Box>
      {errors[name] && <FormErrorMessage>{errors[name]?.message?.toString()}</FormErrorMessage>}
    </FormControl>
  );
} 