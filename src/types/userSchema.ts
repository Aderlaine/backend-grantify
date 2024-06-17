import { z } from "zod";

const UserSchema = z
	.object({
		id: z.string().optional(), // Optional because it's auto-generated
		username: z.string().max(16),
		email: z.string().email().max(100), // Email must be a valid email format
		password: z.string().min(8).max(100), // Enforce minimum password length for security
		company: z.string().max(100).optional().nullable(),
		experience: z.string().max(100).optional().nullable(),
		image: z.string().url().optional().nullable(), // Validate image as a URL if provided
	})
	.omit({ id: true }); // Omit id from the final type

const EditUserSchema = z.object({
	username: z.string().max(16),
	company: z.string().max(100).nullable(),
	experience: z.string().max(100).nullable(),
});

type EditUser = z.infer<typeof EditUserSchema>;
type User = z.infer<typeof UserSchema>;

export { UserSchema, User, EditUserSchema, EditUser };
