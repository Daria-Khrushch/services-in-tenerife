import styled from "@emotion/styled";

export const CleaningContainer = styled.div`
background: ${props => props.theme.colors.bkCleaning};
width: 100vw;

@media (min-width: 900px) {
        width: 100%;
}`

export const DeliveryContainer = styled.div`
    width: 100vw;
    background: ${props => props.theme.colors.bkDelivery};

@media (min-width: 900px) {
        width: 100%;
    
}`

export const DriverContainer = styled.div`
    width: 100vw;
background: ${props => props.theme.colors.bkDriver};


@media (min-width: 900px) {
        width: 100%;
    
}`

export const MasseurContainer = styled.div`
    width: 100vw;
background: ${props => props.theme.colors.bkMasseur};


@media (min-width: 900px) {
        width: 100%;
    
}
`
export const NannyContainer = styled.div`
    width: 100vw;
background: ${props => props.theme.colors.bkNanny};


@media (min-width: 900px) {
        width: 100%;
}`

export const SportContainer = styled.div`
    width: 100vw;
    background: ${props => props.theme.colors.bkSport};

@media (min-width: 900px) {
        width: 100%;
}`;



export const Wrapper = styled.div`
  margin-bottom: 50px;
`;


export const List = styled.ul`
  display: grid;
  font-size: 8px;
  padding-right: 10px;
  padding-left: 50px;
  border-bottom: 1px solid white;
  align-items: center;
  color: ${(props) => props.theme.colors.textColor};
  width: 100%;
  grid-template-areas:
    "name  location price"
    "name about contacts"
    "name about contacts";
  background-color: ${(props) => props.theme.colors.bkTransparent};

  @media (min-width: 900px) {
    padding-left: 10px;
    font-size: 18px;
    grid-template-columns: 30% 40% 20%;
    grid-template-areas:
      "name  location price contacts"
      "name about about contacts";
  }
`;

export const Name = styled.li`
  grid-area: name;
   display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    margin-bottom: 5px;
`;

export const About = styled.li`
  grid-area: about;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  @media (min-width: 900px) {
    padding-left: 20px;
  }
`;

export const Location = styled.li`
  grid-area: location;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;

  @media (min-width: 900px) {
    padding-left: 20px;
  }
`;

export const Contacts = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
   grid-area: contacts;

  @media (min-width: 900px) {
    justify-content: center;
  }
`;

export const Icon = styled.img`
  width: 35px;
  height: 35px;

  @media (min-width: 900px) {
    width: 50px;
    height: 50px;
  }
`;

export const Price = styled.li`
  grid-area: price;
  margin-left: 5px;
`;

export const Avatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 15px;
  margin-top: 5px;

  @media (min-width: 900px) {
    width: 150px;
    height: 150px;
  }
`;
