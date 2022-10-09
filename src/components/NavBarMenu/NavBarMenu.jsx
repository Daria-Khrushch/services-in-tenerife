import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NavBarMenu.module.css";
import { useTranslation } from "react-i18next";

const NavBarMenu = (props) => {
  const { t } = useTranslation();
  return (
    <div className={s.navBar}>
      <NavLink
        onClick={props.showNavbar}
        className={({ isActive }) =>
          isActive
            ? `${s.navLinkActive} ${s.active}`
            : `${s.navLink} ${s.notActive}`
        }
        to="/delivery"
      >
        {t("delivery")}
      </NavLink>
      <NavLink
        onClick={props.showNavbar}
        className={({ isActive }) =>
          isActive
            ? `${s.navLinkActive} ${s.active}`
            : `${s.navLink} ${s.notActive}`
        }
        to="/masseur"
      >
        {t("masseur")}
      </NavLink>
      <NavLink
        onClick={props.showNavbar}
        className={({ isActive }) =>
          isActive
            ? `${s.navLinkActive} ${s.active}`
            : `${s.navLink} ${s.notActive}`
        }
        to="/eyebrows"
      >
        {t("eyebrows")}
      </NavLink>
      <NavLink
        onClick={props.showNavbar}
        className={({ isActive }) =>
          isActive
            ? `${s.navLinkActive} ${s.active}`
            : `${s.navLink} ${s.notActive}`
        }
        to="/manicurist"
      >
        {t("manicurist")}
      </NavLink>

      <NavLink
        onClick={props.showNavbar}
        className={({ isActive }) =>
          isActive
            ? `${s.navLinkActive} ${s.active}`
            : `${s.navLink} ${s.notActive}`
        }
        to="/nanny"
      >
        {t("nanny")}
      </NavLink>
      <NavLink
        onClick={props.showNavbar}
        className={({ isActive }) =>
          isActive
            ? `${s.navLinkActive} ${s.active}`
            : `${s.navLink} ${s.notActive}`
        }
        to="/driver"
      >
        {t("driver")}
      </NavLink>
      <NavLink
        onClick={props.showNavbar}
        className={({ isActive }) =>
          isActive
            ? `${s.navLinkActive} ${s.active}`
            : `${s.navLink} ${s.notActive}`
        }
        to="/sport"
      >
        {t("sport")}
      </NavLink>
      <NavLink
        onClick={props.showNavbar}
        className={({ isActive }) =>
          isActive
            ? `${s.navLinkActive} ${s.active}`
            : `${s.navLink} ${s.notActive}`
        }
        to="/hairdresser"
      >
        {t("hairdresser")}
      </NavLink>
      <NavLink
        onClick={props.showNavbar}
        className={({ isActive }) =>
          isActive
            ? `${s.navLinkActive} ${s.active}`
            : `${s.navLink} ${s.notActive}`
        }
        to="/cleaning"
      >
        {t("cleaning")}
      </NavLink>
    </div>
  );
};

export default NavBarMenu;
