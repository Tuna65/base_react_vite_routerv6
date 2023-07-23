import { TRouterList } from "../models/utils";
import Home from "../page/Home";
import { PATHNAME } from "./pathName";

export const routerList: TRouterList[] = [
  {
    path: PATHNAME.HOME,
    component: <Home />,
  },
];

export const flexStyle = {
  between: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  between_start: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  column: { display: "flex", flexDirection: "column" },
  flex: { display: "flex" },
};
