import { Request, Response } from 'express';
import { Publication, PublicationSchema } from './createPublicationValidation';
import { z } from 'zod';
import { handleZodError } from '../../../errors/handleZodError';

export function createPublication(req: Request, res: Response) {
  try {
    const parsedData: Publication = PublicationSchema.parse(req.body);

    res.status(200).json(parsedData);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = handleZodError(error);
      res.status(400).json({ errors });
    } else {
      res.status(500).json({ message: 'Erro inesperado: ', error });
    }
  }
}
