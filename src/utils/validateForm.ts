import { z } from "zod";

const validateForm = <T extends z.ZodObject<any>>(
	formData: unknown,
	schema: T
): z.infer<T> => {
	const parsedData = schema.safeParse(formData);

	if (!parsedData.success) {
		const fieldErrors = parsedData.error.errors.map((err) => ({
			path: err.path.join("."),
			message: err.message,
		}));

		const errorMessage = fieldErrors
			.map((err) => `${err.path}: ${err.message}`)
			.join(", ");

		// Memperbaiki pesan error untuk pengguna
		const userFriendlyErrors = fieldErrors
			.map((err) => `${err.path} ${err.message}`)
			.join(", ");

		throw new Error(`${userFriendlyErrors}`);
	}

	return parsedData.data;
};

export { validateForm };
