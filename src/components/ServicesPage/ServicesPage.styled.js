import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 30% 70%;
  border-top: 2px solid white;
  position: relative;

  @media (min-width: 900px) {
    grid-template-columns: 20% 80%;
  }
`;

export const OpenButton = styled.button`
  width: 30px;
  height: 30px;
  position: fixed;
  top: 90px;
  left: 20px;
`;
