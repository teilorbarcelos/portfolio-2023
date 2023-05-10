import { baseURL } from '@/lib/api';
import { rest } from 'msw';

export const useRequestHandler = [
  rest.get(`${baseURL}/use-request`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ name: "John Doe" }),
    );
  }),

  rest.get(`${baseURL}/wrong-route`, (req, res, ctx) => {
    return res(
      ctx.status(404),
    );
  }),
];
