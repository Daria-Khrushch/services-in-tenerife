import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.header`
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.white};
  padding: 5px;
`;

export const Wrapper = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  @media (min-width: 900px) {
    justify-content: center;
  }
`;

export const Logo = styled.img`
  height: 50px;
  width: auto;
  position: absolute;
  bottom: 5px;
  left: 10px;
  @media (min-width: 900px) {
    height: 60px;
  }
`;

export const Links = styled.div`
padding-right: 5px;

 @media (min-width: 900px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const StyledLink = styled(NavLink)`
font-size: 15px;

 &:not(:last-child){
    margin-right: 10px
  }
:hover {
  text-decoration: underline;
}
&.active {
  text-decoration: underline;
}

@media (min-width: 900px) {
  &:not(:last-child){
    margin-right: 15px;
  }
    
    font-size: 18px;
  }
`
