import { z } from 'zod';

const PublicationSchema = z.object({
  title: z.string(),
  description: z.string(),
  author: z.string(),
});

type Publication = z.infer<typeof PublicationSchema>;

export { PublicationSchema, Publication };
