import React from "react";
import icon from "./../../images/telegram.png";
import wpIcon from "./../../images/icons8-whatsapp-48.png";
import insta from "./../../images/instagram.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./swiper.css";
import {
  Container,
  Wrapper,
  List,
  SwiperBox,
  Text,
  Price,
  Contacts,
  Icon,
} from "./Buy.styled";

const Buy = (props) => {
  return (
    <Container>
      <Wrapper>
        {props.state.map((c) => (
          <List key={c.id}>
            <SwiperBox>
              <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation, Thumbs]}
                grabCursor={true}
              >
                <SwiperSlide>
                  <img src={c.pictures.one} alt="product" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={c.pictures.two} alt="product" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={c.pictures.three} alt="product" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={c.pictures.four} alt="product" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={c.pictures.five} alt="product" />
                </SwiperSlide>
              </Swiper>
            </SwiperBox>
            <Text>{c.text}</Text>
            <Price>{c.price}</Price>
            <Contacts>
              <a href={c.contacts.telega} target="_blank" rel="noreferrer">
                <Icon src={icon} alt="icon" />
              </a>

              {c.contacts.whatsapp && (
                <a href={c.contacts.whatsapp} target="_blank" rel="noreferrer">
                  <Icon src={wpIcon} alt="icon" />
                </a>
              )}
              {c.contacts.insta && (
                <a href={c.contacts.insta} target="_blank" rel="noreferrer">
                  <Icon src={insta} alt="icon" />
                </a>
              )}
            </Contacts>
          </List>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Buy;
