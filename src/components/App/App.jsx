import { Route, Routes } from "react-router-dom";
import Header from "components/Header/Header";
import ServicesPage from "components/ServicesPage/ServicesPage";
import News from "components/News/News";
import Buy from "components/Buy/Buy";
import { Wrapper, Footer } from "./App.styled";

import Cleaning from "components/Cleaning/Cleaning";
import Hairdresser from "components/Hairdresser/Hairdresser";
import Driver from "components/Driver/Driver";
import Manicurist from "components/Manicurist/Manicurist";
import Nanny from "components/Nanny/Nanny";
import Sport from "components/Sport/Sport";
import Masseur from "components/Masseur/Masseur";
import Eyebrows from "components/Eyebrows/Eyebrows";
import Delivery from "components/Delivery/Delivery";
import Cooker from "components/Cooker/Cooker";
import Psych from "components/Psych/Psych";
import Interesting from "components/Interesting/Interesting";
import WelcomePage from "components/WelcomePage/WelcomePage";

const App = (props) => {
  return (
    <Wrapper>
      <Header />

      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route
          path="services"
          element={<ServicesPage state={props.state.ServicesPage} />}
        >
          <Route
            path="cleaning"
            element={<Cleaning state={props.state.ServicesPage.cleaningData} />}
          />
          <Route
            path="hairdresser"
            element={
              <Hairdresser state={props.state.ServicesPage.hairdresserData} />
            }
          />
          <Route
            path="driver"
            element={<Driver state={props.state.ServicesPage.driverData} />}
          />
          <Route
            path="manicurist"
            element={
              <Manicurist state={props.state.ServicesPage.manicuristData} />
            }
          />
          <Route
            path="nanny"
            element={<Nanny state={props.state.ServicesPage.nannyData} />}
          />
          <Route
            path="sport"
            element={<Sport state={props.state.ServicesPage.sportData} />}
          />
          <Route
            path="masseur"
            element={<Masseur state={props.state.ServicesPage.masseurData} />}
          />
          <Route
            path="eyebrows"
            element={<Eyebrows state={props.state.ServicesPage.eyebrowsData} />}
          />
          <Route
            path="delivery"
            element={<Delivery state={props.state.ServicesPage.deliveryData} />}
          />
          <Route
            path="cook"
            element={<Cooker state={props.state.ServicesPage.cookData} />}
          />
          <Route
            path="psychology"
            element={<Psych state={props.state.ServicesPage.psychData} />}
          />

          <Route
            path="search"
            element={
              <Interesting state={props.state.ServicesPage.interestingData} />
            }
          />
        </Route>
        <Route path="feeds" element={<News />} />
        <Route path="buy" element={<Buy state={props.state.BuyPage} />} />
      </Routes>

      <Footer>Created by Daria Khrushch ©2022</Footer>
    </Wrapper>
  );
};

export default App;
