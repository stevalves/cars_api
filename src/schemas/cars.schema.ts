import { z } from "zod";

const carSchema = z.object({
  id: z.number(),
  brand: z.string(),
  model: z.string(),
  year: z.string(),
  fuel: z.string(),
  km: z.number(),
  color: z.string(),
  price: z.number(),
  description: z.string(),
  created_at: z.date(),
});

const carSchemaRequest = carSchema.omit({ id: true, created_at: true });
const carSchemaUpdate = carSchema.partial();
const carsSchemaResponse = carSchema.array();

export { carSchema, carSchemaRequest, carSchemaUpdate, carsSchemaResponse };
