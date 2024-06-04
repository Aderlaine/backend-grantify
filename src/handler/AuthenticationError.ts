import ClientError from './CustomError';

class AuthenticationError extends ClientError {
  constructor(message: string) {
    super(message, 401);
    this.name = 'AuthenticationError';
  }
}

export default AuthenticationError;
