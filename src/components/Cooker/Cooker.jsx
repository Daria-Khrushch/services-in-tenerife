import React, { useState } from "react";
import {
  Wrapper,
  CookerContainer,
  List,
  Gallery,
  GalleryImg,
  About,
  Location,
  Contacts,
  Icon,
  ContinueLink,
} from "commonStyles/servicesTwo.styled";
import icon from "images/telegram.png";
import wpIcon from "images/icons8-whatsapp-48.png";
import cookerOlga from "images/cooker/cookerOlga.jpg";

const Cooker = (props) => {
  const [showMore, setShowMore] = useState(false);
  const text =
    "ПЕЛЬМЕНІ -12€ та ВАРЕНИКИ-10€; БОРЩ з ребрами-17€ -2Л; Пампушки з часником - 6€; ІКРА ЗАМОРСЬКА БАКЛАЖАНА -14€; КАРТОПЕЛЬНІ ЗРАЗИ з м'ясом-12€; ГОЛУБЦІ- 12€ -напівфабрикат, 15€- готові; ПЕРЕЦЬ ФАРШОВАНИЙ - 14€ напівфабрикат, 17€- готові; ПЕРЕЦЬ ФАРШОВАНИЙ - 14€ напівфабрикат, 17€- готові; КАРТОПЕЛЬНІ ДРАНИКИ - 12€; МІТБОЛИ У ТОМАТІ- 15€; БРИЗОЛЬ - 15€; КУРИНИЙ БИТОК - 15€; БЛІНЧИКИ З РІЗНИМ НАЧИНКОМ НА ВАШ СМАК- 13€; СМАЖЕНІ ПИРІЖКИ - 1шт -1.5€; БЕЛЯШІ - 1шт.- 1,5 €; САЛАТИ(оселедець під шубою, олів'є, мімоза з тунцем, вінегрет, крабовий); Для ласунів смачний торт НАПОЛЕОН -20€ і A-ЛЯ КИЇВСЬКИЙ-25€! ";
  return (
    <CookerContainer>
      <Wrapper>
        {props.state.map((c) => (
          <List key={c.id}>
            <Gallery>
              <GalleryImg src={c.gallery} alt="gallery" />
            </Gallery>
            <About>{c.about}</About>
            <Location>{c.location}</Location>
            <Contacts>
              {c.contacts.telega && (
                <a href={c.contacts.telega} target="_blank" rel="noreferrer">
                  <Icon src={icon} alt="icon" />
                </a>
              )}

              <a href={c.contacts.whatsapp} target="_blank" rel="noreferrer">
                <Icon src={wpIcon} alt="icon" />
              </a>
            </Contacts>
          </List>
        ))}

        <List>
          <Gallery>
            <GalleryImg src={cookerOlga} alt="gallery" />
          </Gallery>
          <About>
            Доброго дня всім. Мене звати Оля і ми переїхали в Playa San Juan.
            Дуже раді Вас смачно нагодувати домашньою їжею. Готую з любов'ю та
            душею. САМОВИВІЗ або ДОСТАВКА -5€.{" "}
            {showMore ? text : `${text.substring(0, 0)}`}
            <ContinueLink onClick={() => setShowMore(!showMore)}>
              {showMore ? " Приховати." : " Меню та ціни."}
            </ContinueLink>{" "}
          </About>
          <Location>Tenerife South</Location>
          <Contacts>
            <a
              href="https://wa.me/+380935565692 "
              target="_blank"
              rel="noreferrer"
            >
              <Icon src={wpIcon} alt="icon" />
            </a>
          </Contacts>
        </List>
      </Wrapper>
    </CookerContainer>
  );
};

export default Cooker;
