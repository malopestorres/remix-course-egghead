import { z } from "zod";

export const CreatePost = z.object({
  title: z.string().min(5),
  body: z.string().min(1),
});
