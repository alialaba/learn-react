import { object, string  } from 'yup';

export const createBlogSchema = object({
    title: string().required(),
    content: string().required()
})