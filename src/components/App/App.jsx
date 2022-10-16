import { Route, Routes } from "react-router-dom";
import Header from "components/Header/Header";
import ServicesPage from "components/ServicesPage/ServicesPage";
import News from "components/News/News";
import Buy from "components/Buy/Buy";
import { Wrapper, Footer } from "./App.styled";

const App = (props) => {
  return (
    <Wrapper>
      <Header />

      <Routes>
        <Route
          path="/*"
          element={<ServicesPage state={props.state.ServicesPage} />}
        />
        <Route
          path="services/*"
          element={<ServicesPage state={props.state.ServicesPage} />}
        />
        <Route path="feeds/*" element={<News />} />
        <Route path="buy/*" element={<Buy state={props.state.BuyPage} />} />
      </Routes>

      <Footer>Created by Daria Khrushch ©2022</Footer>
    </Wrapper>
  );
};

export default App;
