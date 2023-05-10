import { rest } from "msw";
import { headerMock } from "@/../__tests__/src/components/PageHeader/pageHeader.mock";
import { baseURL } from "@/lib/api";

export const homeHandler = [
  rest.get(`${baseURL}/home`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ header: headerMock }));
  }),
];
