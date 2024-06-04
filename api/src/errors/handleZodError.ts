import { ZodError } from 'zod';

export const handleZodError = (error: ZodError) => {
  return error.errors.map((err) => {
    return {
      message: `Error in path '${err.path.join('.')}' - ${err.message}`,
    };
  });
  // .join('\n');
};
