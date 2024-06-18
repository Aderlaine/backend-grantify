import { z } from "zod";

const ProgramSchema = z
	.object({
		id: z.string().optional(),
		title: z.string(),
		openDate: z.date(),
		closeDate: z.date(),
		category: z.string(),
		criteria: z.string(),
		image: z.string(),
		link: z.string(),
		profil: z.string().optional(),
		about: z.string().optional(),
		uploader: z.string(),
		benefits: z.string().optional(),
		eligibility: z.string().optional(),
	})
	.omit({ id: true });

type Program = z.infer<typeof ProgramSchema>;

export { ProgramSchema, Program };
