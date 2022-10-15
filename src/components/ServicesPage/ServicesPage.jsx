import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cleaning from "../Cleaning/Cleaning";
import Hairdresser from "../Hairdresser/Hairdresser";
import Driver from "../Driver/Driver";
import Manicurist from "../Manicurist/Manicurist";
import Nanny from "../Nanny/Nanny";
import Sport from "../Sport/Sport";
import Masseur from "../Masseur/Masseur";
import openIcon from "./../../images/openIcon2.png";
import styled from "styled-components";
import Eyebrows from "../Eyebrows/Eyebrows";
import Delivery from "../Delivery/Delivery";
import Cooker from "../Cooker/Cooker";
import Psych from "../Psych/Psych";
import NavTest from "../NavBarMenu/NavTest";
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
        <NavTest showNavbar={showNavbar} />
      </NavBar>

      <Routes>
        <Route
          path="/cleaning"
          element={<Cleaning state={props.state.cleaningData} />}
        />
        <Route
          path="/hairdresser"
          element={<Hairdresser state={props.state.hairdresserData} />}
        />
        <Route
          path="/driver"
          element={<Driver state={props.state.driverData} />}
        />
        <Route
          path="/manicurist"
          element={<Manicurist state={props.state.manicuristData} />}
        />
        <Route
          path="/nanny"
          element={<Nanny state={props.state.nannyData} />}
        />
        <Route
          path="/sport"
          element={<Sport state={props.state.sportData} />}
        />
        <Route
          path="/masseur"
          element={<Masseur state={props.state.masseurData} />}
        />
        <Route
          path="/eyebrows"
          element={<Eyebrows state={props.state.eyebrowsData} />}
        />
        <Route
          path="/delivery"
          element={<Delivery state={props.state.deliveryData} />}
        />
        <Route path="/cook" element={<Cooker state={props.state.cookData} />} />
        <Route
          path="/psychology"
          element={<Psych state={props.state.psychData} />}
        />
      </Routes>
    </Container>
  );
};

export default ServicesPage;
