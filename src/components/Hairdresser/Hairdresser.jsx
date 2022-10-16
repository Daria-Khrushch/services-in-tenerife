import React from "react";
import {
  Wrapper,
  HairContainer,
  List,
  Gallery,
  GalleryImg,
  About,
  Location,
  Contacts,
  Icon,
} from "commonStyles/servicesTwo.styled";
import icon from "images/telegram.png";
import wpIcon from "images/icons8-whatsapp-48.png";

const Hairdresser = (props) => {
  return (
    <HairContainer>
      <Wrapper>
        {props.state.map((c) => (
          <List key={c.id}>
            <Gallery>
              <GalleryImg src={c.gallery} alt="gallery" />
            </Gallery>
            <About>{c.about}</About>
            <Location>{c.location}</Location>
            <Contacts>
              <a href={c.contacts.telega} target="_blank" rel="noreferrer">
                <Icon src={icon} alt="icon" />
              </a>

              <a href={c.contacts.whatsapp} target="_blank" rel="noreferrer">
                <Icon src={wpIcon} alt="icon" />
              </a>
            </Contacts>
          </List>
        ))}
      </Wrapper>
    </HairContainer>
  );
};

export default Hairdresser;
