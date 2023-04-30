import { FC } from "react";
import sidebarNavStyle from "./sidebarnav.module.scss";
import { SideBarNavProps } from "../sidebar";

const SidebarNav: FC<SideBarNavProps> = ({
  active,
  header,
  title,
  icon,
  dropdown,
  setActive,
}) => {
  return (
    <>
      <p className={sidebarNavStyle.header}>{header}</p>
      <div
        className={`${
          active
            ? sidebarNavStyle.sidebarNav_active +
              " " +
              sidebarNavStyle.sidebarNav
            : sidebarNavStyle.sidebarNav
        }`}
        onClick={() => setActive && setActive(title)}
      >
        <img
          className={sidebarNavStyle.sidebarNav_startIcon}
          src={icon}
          alt="icon"
        />
        <p>{title}</p>
        <img className={sidebarNavStyle.sidebarNav_endIcon} src={dropdown} />
      </div>
    </>
  );
};

export default SidebarNav;
