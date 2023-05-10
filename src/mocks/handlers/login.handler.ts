import { baseURL } from "@/lib/api";
import { rest } from "msw";

export const loginHandler = [
  rest.post(`${baseURL}/login-route`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ id: "123456", name: "John Doe", email: "john@email.com" })
    );
  }),
];
