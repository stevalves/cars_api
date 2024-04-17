import { z } from "zod";

const carSchema = z.object({
  id: z.number(),
  brand: z.string(),
  model: z.string(),
  spec: z.string(),
  year: z.number(),
  fuel: z.string(),
  km: z.number(),
  color: z.string(),
  fipe: z.number(),
  description: z.string(),
  created_at: z.date(),
});

const carSchemaRequest = carSchema.omit({ id: true, created_at: true });
const carSchemaUpdate = carSchema.partial();
const carsSchemaResponse = carSchema.array();

export { carSchema, carSchemaRequest, carSchemaUpdate, carsSchemaResponse };
