import { Route, Routes } from "react-router-dom";
import Header from "./../Header/Header";
import ServicesPage from "./../ServicesPage/ServicesPage";
import News from "./../News/News";
import Buy from "./../Buy/Buy";
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
