import { FC, useState } from "react";
import sidebarStyle from "./sidebar.module.scss";
import portfolioIcon from "../../assets/icons/portfolio.svg";
import dropdownIcon from "../../assets/icons/dropdown.svg";
import SidebarNav from "./navigation/sidebarNav";

export interface SideBarNavProps {
  header?: string;
  title: string;
  icon: string;
  dropdown?: string;
  active?: boolean;
  setActive?: (title: string) => void;
}

const Sidebar: FC = (): JSX.Element => {
  const [sideBarNavItems, setSideBarNavItems] = useState<
    Array<SideBarNavProps>
  >([
    {
      title: "Switch Organization",
      icon: portfolioIcon,
      dropdown: dropdownIcon,
    },
    { title: "Dashboard", icon: portfolioIcon },
    { header: "CUSTOMERS", title: "Users", icon: portfolioIcon, active: true },
    { title: "Guarantors", icon: portfolioIcon },
    { title: "Loans", icon: portfolioIcon },
    { title: "Decision Models", icon: portfolioIcon },
    { title: "Savings", icon: portfolioIcon },
    { title: "Loan Requests", icon: portfolioIcon },
    { title: "Whitelist", icon: portfolioIcon },
    { title: "Karma", icon: portfolioIcon },
    { header: "BUSINESSES", title: "Organization", icon: portfolioIcon },
  ]);
  const setActive = (title: string) => {
    console.log(title);
    const newItems = sideBarNavItems.map((item) => {
      if (item.title === title) {
        item.active = true;
      } else item.active = false;
      return item;
    });
    setSideBarNavItems([...newItems]);
  };
  return (
    <div className={sidebarStyle.sidebar}>
      {sideBarNavItems.map((item) => (
        <SidebarNav
          key={item.title}
          header={item.header}
          title={item.title}
          icon={item.icon}
          dropdown={item.dropdown}
          active={item.active}
          setActive={() => setActive(item.title)}
        />
      ))}
    </div>
  );
};

export default Sidebar;
