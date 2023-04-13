import { rest } from 'msw';

export const helloHandler = [
  rest.get('http://localhost:3001/hello', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ name: "John Doe" }),
    );
  }),
];
