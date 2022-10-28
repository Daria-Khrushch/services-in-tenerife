import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import openIcon from "images/openIcon2.png";
import styled from "styled-components";
import NavMenu from "components/NavBarMenu/NavMenu";
import { Container, OpenButton } from "./ServicesPage.styled";

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: ${({ navbar }) => (navbar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
  @media (min-width: 900px) {
    left: 0;
    height: 100%;
    position: relative;
    z-index: 0;
  }
`;

const ServicesPage = (props) => {
  const [navbar, setNavbar] = useState(false);
  const showNavbar = () => setNavbar(!navbar);

  return (
    <Container>
      <OpenButton onClick={showNavbar}>
        <img src={openIcon} alt="open" />
      </OpenButton>
      <NavBar navbar={navbar}>
        <NavMenu showNavbar={showNavbar} />
      </NavBar>
      <Outlet />
    </Container>
  );
};

export default ServicesPage;
