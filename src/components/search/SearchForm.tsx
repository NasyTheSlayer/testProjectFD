"use client";

import { Box, Button, Input } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Select } from "@chakra-ui/select";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface SearchFormData {
  departureCity: string;
  destinationCity: string;
  date: string;
  passengers: number;
}

const SearchForm = () => {
  const { register, handleSubmit } = useForm<SearchFormData>();
  const router = useRouter();

  const onSubmit = (data: SearchFormData) => {
    router.push(
      `/search?departure=${data.departureCity}&destination=${data.destinationCity}&date=${data.date}&passengers=${data.passengers}`,
    );
  };

  return (
    <MotionBox
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      p={6}
      bg="rgba(255, 255, 255, 0.2)"
      style={{ backdropFilter: "blur(10px)" }}
      borderRadius="lg"
      boxShadow="md"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      maxW="600px"
      mx="auto"
    >
      <FormControl>
        <FormLabel color="white">Місто відправлення</FormLabel>
        <Input
          {...register("departureCity")}
          placeholder="Київ"
          size="md"
          bg="whiteAlpha.200"
          color="white"
          _placeholder={{ color: "whiteAlpha.700" }}
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel color="white">Місто призначення</FormLabel>
        <Input
          {...register("destinationCity")}
          placeholder="Львів"
          size="md"
          bg="whiteAlpha.200"
          color="white"
          _placeholder={{ color: "whiteAlpha.700" }}
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel color="white">Дата</FormLabel>
        <Input
          type="date"
          {...register("date")}
          size="md"
          bg="whiteAlpha.200"
          color="white"
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel color="white">Кількість пасажирів</FormLabel>
        <Select
          {...register("passengers")}
          size="md"
          bg="whiteAlpha.200"
          color="white"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </Select>
      </FormControl>
      <Button
        mt={6}
        type="submit"
        variant="solid"
        colorScheme="orange"
        width="full"
        size="lg"
        _hover={{ transform: "scale(1.05)" }}
        transition="transform 0.2s"
      >
        Пошук
      </Button>
    </MotionBox>
  );
};

export default SearchForm;
