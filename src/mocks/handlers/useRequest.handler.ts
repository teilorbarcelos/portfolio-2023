import { rest } from 'msw';

export const useRequestHandler = [
  rest.get('http://localhost:3001/use-request', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ name: "John Doe" }),
    );
  }),

  rest.get('http://localhost:3001/wrong-route', (req, res, ctx) => {
    return res(
      ctx.status(404),
    );
  }),
];
