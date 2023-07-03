import { useEffect } from "react";
import { IconDashboard, IconGroup, IconMenu, IconPerson } from "../assets/Icon";

export type Option = {
  label: string;
  value: string | number;
};

export const navbarLists = [
  {
    name: "Dashboard",
    icon: <IconDashboard />,
    subMenu: [],
    pathName: "/dashboard",
  },
  {
    name: "Sinh viên",
    icon: <IconPerson />,
    subMenu: [],
    pathName: "/student",
  },
  // {
  //   name: "Giảng viên",
  //   icon: <IconGroup />,
  //   subMenu: [],
  //   pathName: "2",
  // },
];

export const useClickOutSide = (
  ref: React.MutableRefObject<any>,
  handler: () => void
) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
