import React, { useState } from "react";
import {
  Wrapper,
  List,
  Gallery,
  About,
  Location,
  Contacts,
  Icon,
  PhsychContainer,
  ContinueLink,
} from "commonStyles/servicesTwo.styled";
import icon from "images/telegram.png";
import wpIcon from "images/icons8-whatsapp-48.png";
import Irena from "images/phsych/Irena.jpg";

const Psych = (props) => {
  const [showMore, setShowMore] = useState(false);
  const text =
    "Найчастіші запити, з якими працюю: складності у відносинах з партнером та/або рідними, близькими, колегами, складності увідносинах з дітьми та підлітками, питання вікових особливостей розвитку дитини та базових потреб дитини, дитячо-батьківські відносини, втрата сенсів, тривожні чи депресивні стани, самотність, проблема пошуку партнера, особистісні та сімейні кризи, співзалежність у стосунках, питання самооцінки та самореалізації, сенсопокладання, екзитенційні кризи, психосоматика. З чим не працюю: залежності (наркоманія, алкоголізм, ігроманія), душевні захворювання із необхідною медикаментозною підтримкою, суїцидальні наміри та дії. Ціна: 35€ за годину. ";
  return (
    <PhsychContainer>
      <Wrapper>
        {props.state.map((c) => (
          <List key={c.id}>
            <Gallery src={c.avatar} alt="avatar" />
            <div>{c.name}</div>
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

        <List>
          <Gallery>
            <img src={Irena} alt="avatar" />
          </Gallery>
          <About>
            Я - Ірена Шатінська, клінічний психолог, практичний консультуючий
            спеціаліст, сертифікована в модальностях позитивна психотерапія та
            емоційно-фокусованиа терапія пар. Використовую інтеграційний
            мультимодальний підхід з елементами гештальт-терапії, символ-драми,
            арт-терапії, екзистенційної психотерапії, сімейної системної
            терапії. До кожного клієнта - індивідуальний підхід, працюю собою:
            серцем і душею, бережно та підтримуюче. Постійно розвиваюся в
            професії , маю особисту психотерапію, супервізію, розширюю арсенал
            методик. {showMore ? text : `${text.substring(0, 0)}`}
            <ContinueLink onClick={() => setShowMore(!showMore)}>
              {showMore ? " Приховати." : " Читати далі..."}
            </ContinueLink>{" "}
            <br /> Почитати мої статті можна у
            <ContinueLink
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/irene.shatinska"
            >
              {" "}
              Facebook{" "}
            </ContinueLink>{" "}
            та в{" "}
            <ContinueLink
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/creatorofownreality/"
            >
              {" "}
              Instagram.
            </ContinueLink>
            <br />
            Звертайтесь! Буду рада допомогти.
          </About>
          <Location>
            Alcalá, Puerto de Santiago, Los Gigantes або Online
          </Location>
          <Contacts>
            <a
              href="https://t.me/+380503716050"
              target="_blank"
              rel="noreferrer"
            >
              <Icon src={icon} alt="icon" />
            </a>

            <a
              href="https://wa.me/+380503716050"
              target="_blank"
              rel="noreferrer"
            >
              <Icon src={wpIcon} alt="icon" />
            </a>
          </Contacts>
        </List>
      </Wrapper>
    </PhsychContainer>
  );
};

export default Psych;
