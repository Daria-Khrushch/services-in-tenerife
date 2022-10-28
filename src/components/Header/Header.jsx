import React from "react";
import canary from "images/icon.jpg";
import LanguageBtn from "components/LanguageBtn/LanguageBtn.jsx";

import { useTranslation } from "react-i18next";
import { Container, Wrapper, Logo, Links, StyledLink } from "./Header.styled";
import { Link } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <Logo src={canary} alt="logo" />
        </Link>
        <Links>
          <StyledLink to="/services">{t("services")}</StyledLink>
          {/* <StyledLink to="/feeds"
          >
            {t("feeds")}
          </StyledLink> */}
          <StyledLink to="/buy">{t("products")}</StyledLink>
        </Links>
        <LanguageBtn />
      </Wrapper>
    </Container>
  );
};

export default Header;
