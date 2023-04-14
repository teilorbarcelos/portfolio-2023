import { rest } from "msw";
import { headerMock } from "@/../__tests__/src/components/PageHeader/pageHeader.mock";

export const homeHandler = [
  rest.get("https://backend.example.com/api/home", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ header: headerMock }));
  }),
];
