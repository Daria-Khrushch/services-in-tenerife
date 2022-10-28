import { Wrapper } from "./WelcomePage.styled";
import png from "images/welcome-two.png";

const WelcomePage = () => {
  return (
    <Wrapper>
      <img width="400" src={png} alt="welcome" />
    </Wrapper>
  );
};

export default WelcomePage;
