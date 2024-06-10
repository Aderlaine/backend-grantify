import CustomError from "./CustomError";

class AuthenticationError extends CustomError {
	constructor(message: string) {
		super(message, 401);
		this.name = "AuthenticationError";
	}
}

export default AuthenticationError;
