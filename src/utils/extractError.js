export default function extractError(error) {
  if (error.source) {
    const errors = error.source.errors;
    if (errors.length > 0) {
      return errors[0].message;
    }
  }

  return error.message || error.toString();
}
