import React from "react";
import canary from "images/icon.jpg";
import LanguageBtn from "components/LanguageBtn/LanguageBtn.jsx";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Wrapper, Logo, Links } from "./Header.styled";
import s from "./Header.module.css";

const Header = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Wrapper>
        <Logo src={canary} alt="logo" />
        <Links>
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
          {/* <NavLink
            className={({ isActive }) =>
              isActive
                ? `${s.navLinkActive} ${s.active}`
                : `${s.navLink} ${s.notActive}`
            }
            to="/feeds"
          >
            {t("feeds")}
          </NavLink> */}
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
        </Links>
        <LanguageBtn />
      </Wrapper>
    </Container>
  );
};

export default Header;
