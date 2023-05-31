export enum ErrorMessages {
  USER_DOES_NOT_EXIST = "User doesn't exist",
  EMAIL_EXISTS = 'User with that email already exists',
  INTERNAL_SERVER_ERROR = 'Ups! Something went wrong!',
  UNAUTHORIZED_SESSION = 'Unauthorized session',
  WRONG_PASSWORD_OR_EMAIL = 'Sign-in error. Please check your password or email',
  NAME_VALIDATION = 'Name can consist letters a-Z, numbers and should have a 1 to 40 characters',
  PASSWORD_VALIDATION = 'Password should include at least one uppercase letter, one lowercase letter and one symbol and should have a 8 to 16 characters',
  EMAIL_VALIDATION = 'Check your email please. Example: my-email@example.com',
}
