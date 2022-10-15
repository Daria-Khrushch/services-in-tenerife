import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 30px;
  margin-bottom: 30px;
`;

export const Wrapper = styled.div`
  height: 100%;
`;

export const List = styled.ul`
  background-color: ${(props) => props.theme.colors.bkTransparent};
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (min-width: 900px) {
    display: grid;
    grid-template-areas:
      "swiper price"
      "swiper text"
      "swiper contacts";
    justify-content: start;
    font-size: 18px;
  }
`;

export const SwiperBox = styled.li`
  max-width: 200px;
  max-height: 200px;
  grid-area: swiper;
  margin-bottom: 15px;

  @media (min-width: 900px) {
    max-width: 350px;
    max-height: 350px;
    margin-bottom: 0px;
  }
`;

export const Text = styled.li`
  grid-area: text;
  @media (min-width: 900px) {
    margin-left: 30px;
  }
`;

export const Price = styled.li`
  margin-top: 7px;
  grid-area: price;

  @media (min-width: 900px) {
    margin-left: 30px;
  }
`;

export const Contacts = styled.li`
  grid-area: contacts;
  @media (min-width: 900px) {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
`;

export const Icon = styled.img`
 width: 40px;
    height: 40px;
    margin-right: 7px;
    margin-top: 7px;
    
    @media (min-width: 900px) {
    width: 50px;
    height: 50px;}`;
    
