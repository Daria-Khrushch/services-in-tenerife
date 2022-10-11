import React from "react";
import canary from "./../../images/canary.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import s from "./Header.module.css";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className={s.header}>
      <div className={s.wrapper}>
        <div>
          <img className={s.logo} src={canary} alt="logo" />
        </div>
        <div className={s.linksContainer}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${s.navLinkActive} ${s.active}`
                : `${s.navLink} ${s.notActive}`
            }
            to="/services"
          >
            {t("services")}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${s.navLinkActive} ${s.active}`
                : `${s.navLink} ${s.notActive}`
            }
            to="/feeds"
          >
            {t("feeds")}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${s.navLinkActive} ${s.active}`
                : `${s.navLink} ${s.notActive}`
            }
            to="/buy"
          >
            {t("products")}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
