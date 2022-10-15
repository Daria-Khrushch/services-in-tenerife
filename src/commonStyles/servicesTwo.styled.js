import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-bottom: 50px;
`;

export const CookerContainer = styled.div`
  width: 100vw;
  background: ${(props) => props.theme.colors.bkCooker};

  @media (min-width: 900px) {
    width: 100%;
  }
`;

export const EyebrowsContainer = styled.div`
  width: 100vw;
  background: ${props => props.theme.colors.bkEyebrows};
  @media (min-width: 900px) {
    width: 100%;
  }
`;

export const HairContainer = styled.div`
 width: 100vw;
background: ${props => props.theme.colors.bkHair};

@media (min-width: 900px) {
    width: 100%;
  }
`

export const ManicurContainer = styled.div`
 width: 100vw;
background: ${props => props.theme.colors.bkManicur};

@media (min-width: 900px) {
    width: 100%;
  }
`

export const PhsychContainer = styled.div`
    width: 100vw;
    background: ${props => props.theme.colors.bkPhsych};

@media (min-width: 900px) {
        width: 100%;
}
`

export const List = styled.ul`
  display: grid;
  font-size: 16px;
  padding: 10px;
  border-bottom: 1px solid white;
  align-items: center;
  color: ${(props) => props.theme.colors.textColor};
  width: 100%;
  gap: 10px;
  grid-template-areas:
    "gallery gallery gallery"
    "about about about"
    "location contacts contacts";
  background-color: ${(props) => props.theme.colors.bkTransparent};

  @media (min-width: 900px) {
    grid-template-columns: 25% 45% 20%;
    grid-template-rows: 20% 80%;
    grid-template-areas:
      "gallery location contacts"
      "gallery about about";
  }
`;

export const Gallery = styled.li`
  grid-area: gallery;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 10px;

  @media (min-width: 900px) {
    max-width: 200px;
    max-height: 200px;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const GalleryImg = styled.img`
  @media (min-width: 900px) {
    max-width: 200px;
    max-height: 200px;
    padding-right: 20px;
  }
`;
export const About = styled.li`
  grid-area: about;
  margin-left: 50px;
  margin-right: 50px;

  @media (min-width: 900px) {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;
export const Location = styled.li`
  grid-area: location;
  margin-left: 50px;

  @media (min-width: 900px) {
    margin-left: 0;
    margin-right: 0;
  }
`;
export const Contacts = styled.li`
  grid-area: contacts;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 10px;
  margin-right: 10px;
`;

export const ContinueLink = styled.a`
color: ${props => props.theme.colors.main};
    text-decoration: underline;
    cursor: pointer;`
