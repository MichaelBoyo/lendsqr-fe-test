import { FC } from "react";
import navbarStyle from "./navbar.module.scss";
import lendsqrLogo from "../../assets/lendsqr-logo.svg";

import searchIcon from "../../assets/icons/search.svg";
import bellIcon from "../../assets/icons/bell.svg";
import avatar from "../../assets/avatar.svg";
import arrowDownIcon from "../../assets/icons/arrowdown.svg";
const Navbar: FC = (): JSX.Element => {
  return (
    <div className={navbarStyle.navbar}>
      <img
        className={navbarStyle.navbar_logo_img}
        src={lendsqrLogo}
        alt="lendsqr logo"
      />
      <div className={navbarStyle.navbar_search}>
        <input
          className={navbarStyle.navbar_search_Input}
          placeholder="Search For Anything"
        />
        <img
          className={navbarStyle.navbar_search_Icon}
          src={searchIcon}
          alt="Search Icon"
        />
      </div>

      <p className={navbarStyle.navbar_docs}>Docs</p>
      <img className={navbarStyle.navbar_bell} src={bellIcon} alt="bell icon" />
      <div className={navbarStyle.navbar_user}>
        <img
          className={navbarStyle.navbar_user_avatar}
          src={avatar}
          alt="avatar"
        />
        <p className={navbarStyle.navbar_user_name}>Adedeji</p>
        <img
          className={navbarStyle.navbar_arrow}
          src={arrowDownIcon}
          alt="arrow down"
        />
      </div>
    </div>
  );
};

export default Navbar;
