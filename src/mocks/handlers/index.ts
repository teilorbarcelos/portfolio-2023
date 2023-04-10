import { helloHandler } from "@/mocks/handlers/hello.handler";
import { loginHandler } from "@/mocks/handlers/login.handler";
import { useRequestHandler } from "@/mocks/handlers/useRequest.handler";

export const mswHandlers = [
  ...helloHandler,
  ...useRequestHandler,
  ...loginHandler,
];
