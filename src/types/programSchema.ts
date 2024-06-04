import { z } from 'zod';

const ProgramSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  openDate: z.date(), 
  closeDate: z.date(), 
  category: z.string(),
  criteria: z.string(),
  description: z.string(),
  image: z.string(),
  link: z.string(),
  uploader: z.string(),
}).omit({ id: true });

type Program = z.infer<typeof ProgramSchema>;

export { ProgramSchema, Program };
