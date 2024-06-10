import { z } from "zod";

const UserSchema = z
	.object({
		id: z.string().optional(), // Optional because it's auto-generated
		username: z.string(),
		email: z.string().email(), // Email must be a valid email format
		password: z.string().min(8), // Enforce minimum password length for security
		company: z.string().optional().nullable(),
		experience: z.string().optional().nullable(),
		image: z.string().url().optional().nullable(), // Validate image as a URL if provided
	})
	.omit({ id: true }); // Omit id from the final type

type User = z.infer<typeof UserSchema>;

export { UserSchema, User };
