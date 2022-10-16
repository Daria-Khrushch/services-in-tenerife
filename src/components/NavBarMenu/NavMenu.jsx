import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import beauty from "images/beauty.png";
import health from "images/health.png";
import life from "images/life.png";
import car from "images/car.png";
import { Wrapper } from "./NavMenu.styled";

import "./NavMenu.css";

const NavTest = (props) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [opentwo, setOpentwo] = useState(false);
  const [openthree, setOpenthree] = useState(false);
  const [openfour, setOpenfour] = useState(false);
  return (
    <Wrapper>
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title" onClick={() => setOpen(!open)}>
          <div className="title-wripper">
            <img className="navIcon" src={beauty} alt="beauty icon" />
            <span>{t("beauty")}</span>
          </div>

          <i className="bi bi-chevron-down toggle-btn"></i>
        </div>

        <div className="sidebar-content">
          <NavLink
            onClick={props.showNavbar}
            className={({ isActive }) =>
              isActive ? "navLink active" : "navLink"
            }
            to="/eyebrows"
          >
            {t("eyebrows")}
          </NavLink>

          <NavLink
            onClick={props.showNavbar}
            className={({ isActive }) =>
              isActive ? "navLink active" : "navLink"
            }
            to="/manicurist"
          >
            {t("manicurist")}
          </NavLink>

          <NavLink
            onClick={props.showNavbar}
            className={({ isActive }) =>
              isActive ? "navLink active" : "navLink"
            }
            to="/hairdresser"
          >
            {t("hairdresser")}
          </NavLink>
        </div>
      </div>
      <div className={opentwo ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title" onClick={() => setOpentwo(!opentwo)}>
          <div className="title-wripper">
            <img className="navIcon" src={health} alt="beauty icon" />
            <span>{t("health")}</span>
          </div>

          <i className="bi bi-chevron-down toggle-btn"></i>
        </div>

        <div className="sidebar-content">
          <NavLink
            onClick={props.showNavbar}
            className={({ isActive }) =>
              isActive ? "navLink active" : "navLink"
            }
            to="/masseur"
          >
            {t("masseur")}
          </NavLink>

          <NavLink
            onClick={props.showNavbar}
            className={({ isActive }) =>
              isActive ? "navLink active" : "navLink"
            }
            to="/sport"
          >
            {t("sport")}
          </NavLink>

          <NavLink
            onClick={props.showNavbar}
            className={({ isActive }) =>
              isActive ? "navLink active" : "navLink"
            }
            to="/psychology"
          >
            {t("psychology")}
          </NavLink>
        </div>
      </div>
      <div className={openthree ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title" onClick={() => setOpenthree(!openthree)}>
          <div className="title-wripper">
            <img className="navIcon" src={life} alt="beauty icon" />
            <span>{t("life")}</span>
          </div>

          <i className="bi bi-chevron-down toggle-btn"></i>
        </div>

        <div className="sidebar-content">
          <NavLink
            onClick={props.showNavbar}
            className={({ isActive }) =>
              isActive ? "navLink active" : "navLink"
            }
            to="/nanny"
          >
            {t("nanny")}
          </NavLink>

          <NavLink
            onClick={props.showNavbar}
            className={({ isActive }) =>
              isActive ? "navLink active" : "navLink"
            }
            to="/cleaning"
          >
            {t("cleaning")}
          </NavLink>

          <NavLink
            onClick={props.showNavbar}
            className={({ isActive }) =>
              isActive ? "navLink active" : "navLink"
            }
            to="/cook"
          >
            {t("cooker")}
          </NavLink>
        </div>
      </div>
      <div className={openfour ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title" onClick={() => setOpenfour(!openfour)}>
          <div className="title-wripper">
            <img className="navIcon" src={car} alt="beauty icon" />
            <span>{t("vehicle")}</span>
          </div>

          <i className="bi bi-chevron-down toggle-btn"></i>
        </div>

        <div className="sidebar-content">
          <NavLink
            onClick={props.showNavbar}
            className={({ isActive }) =>
              isActive ? "navLink active" : "navLink"
            }
            to="/delivery"
          >
            {t("delivery")}
          </NavLink>

          <NavLink
            onClick={props.showNavbar}
            className={({ isActive }) =>
              isActive ? "navLink active" : "navLink"
            }
            to="/driver"
          >
            {t("driver")}
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavTest;
