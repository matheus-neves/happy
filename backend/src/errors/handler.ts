import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

interface IValidationErrors {
  [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, response, _) => {
  if (error instanceof ValidationError) {
    // eslint-disable-next-line prefer-const
    let errors: IValidationErrors = {};

    error.inner.forEach(err => {
      errors[err.path] = err.errors;
    });

    return response.status(400).json({ message: 'Validation fails', errors });
  }

  console.error(error);

  return response.status(500).json({ message: 'Intenral server error' });
};

export default errorHandler;
