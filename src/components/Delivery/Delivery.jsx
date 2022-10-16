import React from "react";
import {
  Wrapper,
  List,
  Name,
  Avatar,
  About,
  Location,
  Price,
  Contacts,
  Icon,
  DeliveryContainer,
} from "commonStyles/services.styled";
import icon from "images/telegram.png";
import wpIcon from "images/icons8-whatsapp-48.png";

const Delivery = (props) => {
  return (
    <DeliveryContainer>
      <Wrapper>
        {props.state.map((c) => (
          <List key={c.id}>
            <Name>
              <Avatar src={c.avatar} alt="" />
              <div>{c.name}</div>
            </Name>
            <About>{c.about}</About>
            <Location>{c.location}</Location>
            <Price>{c.price}</Price>
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
    </DeliveryContainer>
  );
};

export default Delivery;
