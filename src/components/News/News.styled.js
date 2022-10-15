import styled from "@emotion/styled";

export const Box = styled.div`
  background-color: ${(props) => props.theme.colors.bkTransparent};
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 15px;

  @media (min-width: 900px) {
    display: grid;
    grid-template-areas:
      "i t"
      "i c";
    gap: 20px;
  }
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 10px;

  @media (min-width: 900px) {
    grid-area: t;
    margin-bottom: 0px;
  }
`;

export const Picture = styled.img`
grid-area: i;
  @media (min-width: 900px) {
    grid-area: i;
    max-width: 350px;
  }
`;

export const Content = styled.div`
@media (min-width: 900px) {
    grid-area: c;
  }
`
