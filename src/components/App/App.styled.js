import styled from "@emotion/styled";
import image from './../../images/bk-image.jpg'

export const Wrapper = styled.div`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Footer = styled.footer`
 display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  text-align: center;
  color: white;
  border-top: 2px solid white;
  background-color: #1976d2;
  height: 50px;
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 1;
`
