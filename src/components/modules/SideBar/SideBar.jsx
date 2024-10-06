/* eslint-disable react/prop-types */
import { FcBullish } from "react-icons/fc";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../../../constant/navigation";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { useState } from "react";
import { HiChevronRight } from "react-icons/hi";

const linkCase =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

const SideBar = () => {
  const [toggle, setToggle] = useState(true);

  const visibleSidebar = {};
  const HiddenSidebar = {
    position: "absolute",
    left: "-15rem",
  };

  return (
    <div
      className={`bg-neutral-900 w-60 p-3 flex flex-col text-white transition-all delay-1000 ease-in-out fixed h-full z-20 lg:relative lg:h-auto lg:z-auto`}
      style={toggle ? visibleSidebar : HiddenSidebar}
    >
      <div
        onClick={() => setToggle(!toggle)}
        className="absolute w-6 h-6 bg-neutral-900 flex items-center justify-center left-60 top-20 rounded-r-xl cursor-pointer"
      >
        <HiChevronRight />
      </div>
      <div className="flex items-center justify-center gap-2 px-1 py-3">
        <FcBullish size={24} />
        <span className="text-neutral-100 text-lg">Dashboard</span>
      </div>
      <div className="flex-1">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SideBarLink key={item.key} data={item} />
        ))}
      </div>
      <div className="border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SideBarLink key={item.key} data={item} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;

const SideBarLink = ({ data }) => {
  const { pathname } = useLocation();

  return (
    <Link
      to={data.path}
      className={classNames(
        pathname === data.path ? "text-white" : "text-neutral-400",
        linkCase
      )}
    >
      <span className="text-lg">{data.icon}</span>
      <span className={`${data.key === "logout" ? "text-red-500" : null}`}>
        {data.label}
      </span>
    </Link>
  );
};
