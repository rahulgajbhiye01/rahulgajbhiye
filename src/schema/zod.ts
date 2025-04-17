import { z } from "zod";

export const SkillValidation = z.object({
  name: z.string().min(1),
  icon: z.string().min(1),
});

export const ProjectValidation = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  link: z.string().min(1),
  github: z.string().min(1),
  techStack: z.string().min(1),
});

export const LoginValidation = z.object({
  email: z.string().min(1),
  password: z.string().min(1),
});
