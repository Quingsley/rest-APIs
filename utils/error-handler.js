exports.errorHandler = (errors, next) => {
  if (!errors.statusCode) {
    errors.statusCode = 500;
  }
  next(errors);
};

exports.throwError = (message, statusCode, errors = null) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  error.data = errors;
  throw error;
};
