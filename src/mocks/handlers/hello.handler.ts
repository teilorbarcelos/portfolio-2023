import { baseURL } from '@/lib/api';
import { rest } from 'msw';

export const helloHandler = [
  rest.get(`${baseURL}/hello`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ name: "John Doe" }),
    );
  }),
];
