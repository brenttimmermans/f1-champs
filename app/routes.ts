import type { RouteConfig } from "@react-router/dev/routes";

export default [
  {
    path: "/",
    file: "routes/index.tsx",
  },
  {
    path: "/game",
    file: "routes/game.tsx",
  },
] satisfies RouteConfig;
