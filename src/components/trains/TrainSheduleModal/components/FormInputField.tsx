import { 
  Input,
  Box,
} from '@chakra-ui/react';
import {
  FormControl, 
  FormLabel, 
  FormErrorMessage
} from '@chakra-ui/form-control';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { TrainScheduleFormData } from '@/libs/validation/trainSheduleSchema';

interface FormInputFieldProps {
  name: keyof TrainScheduleFormData;
  label: string;
  register: UseFormRegister<TrainScheduleFormData>;
  errors: FieldErrors<TrainScheduleFormData>;
  placeholder?: string;
  required?: boolean;
}

export default function FormInputField({
  name,
  label,
  register,
  errors,
  placeholder,
  required
}: FormInputFieldProps) {
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
        <Input
          {...register(name, {required: required && `${label} is required`})}
          placeholder={placeholder}
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