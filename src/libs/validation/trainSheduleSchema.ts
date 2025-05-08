import { z } from "zod";

export const trainScheduleSchema = z.object({
    number: z.string().min(1, { message: "Train number is required" }),
    carrier: z.string().min(1, { message: "Carrier is required" }),
    departure: z.string().min(1, { message: "Departure city is required" }),
    destination: z.string().min(1, { message: "Destination city is required" }),
    departureTime: z.string().min(1, { message: "Departure time is required" }),
    arrivalTime: z.string().min(1, { message: "Arrival time is required" })
  }).refine(
    (data) => data.departure !== data.destination, {
      message: "Destination must be different from departure",
      path: ["destination"]
    }
  ).refine(
    (data) => {
      if (!data.departureTime || !data.arrivalTime) return true;
      return new Date(data.arrivalTime) > new Date(data.departureTime);
    }, {
      message: "Arrival time must be after departure time",
      path: ["arrivalTime"]
    }
  );
  
  export type TrainScheduleFormData = z.infer<typeof trainScheduleSchema>;