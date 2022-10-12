import React from "react";
import icon from "./../../images/telegram.png";
import wpIcon from "./../../images/icons8-whatsapp-48.png";
import Irena from "./../../images/phsych/Irena.jpg";
import "./Psych.css";
import s from "./../../css/service.module.css";
import style from "./../Eyebrows/Eyebrows.module.css";

const Psych = (props) => {
  return (
    <div className="psych">
      <div className={s.wrapper}>
        {props.state.map((c) => (
          <ul key={c.id} className={s.list}>
            <li className={s.name}>
              <img className={s.avatar} src={c.avatar} alt="" />
              <div>{c.name}</div>
            </li>
            <li className={s.about}>{c.about}</li>
            <li className={s.location}>{c.location}</li>
            <li className={s.price}>{c.price}</li>
            <li className={s.contacts}>
              <a
                className={s.link}
                href={c.contacts.telega}
                target="_blank"
                rel="noreferrer"
              >
                <img className={s.telega} src={icon} alt="icon" />
              </a>

              <a
                className={s.link}
                href={c.contacts.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                <img className={s.telega} src={wpIcon} alt="icon" />
              </a>
            </li>
          </ul>
        ))}

        <ul className={style.list}>
          <li className={style.gallery}>
            <img src={Irena} alt="" />
          </li>
          <li className={style.about}>
            Я - Ірена Шатінська, клінічний психолог, практичний консультуючий
            спеціаліст, сертифікована в модальностях позитивна психотерапія та
            емоційно-фокусованиа терапія пар. Використовую інтеграційний
            мультимодальний підхід з елементами гештальт-терапії, символ-драми,
            арт-терапії, екзистенційної психотерапії, сімейної системної
            терапії. До кожного клієнта - індивідуальний підхід, працюю собою:
            серцем і душею, бережно та підтримуюче. Постійно розвиваюся в
            професії , маю особисту психотерапію, супервізію, розширюю арсенал
            методик. Найчастіші запити, з якими працюю: складності у відносинах
            з партнером та/або рідними, близькими, колегами, складності у
            відносинах з дітьми та підлітками, питання вікових особливостей
            розвитку дитини та базових потреб дитини, дитячо-батьківські
            відносини, втрата сенсів, тривожні чи депресивні стани, самотність,
            проблема пошуку партнера, особистісні та сімейні кризи,
            співзалежність у стосунках, питання самооцінки та самореалізації,
            сенсопокладання, екзитенційні кризи, психосоматика. З чим не працюю:
            залежності (наркоманія, алкоголізм, ігроманія), душевні захворювання
            із необхідною медикаментозною підтримкою, суїцидальні наміри та дії.
            Ціна: 35€ за годину. Почитати мої статті можна у
            <a
              className="personalLink"
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/irene.shatinska"
            >
              {" "}
              Facebook{" "}
            </a>{" "}
            та в{" "}
            <a
              className="personalLink"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/creatorofownreality/"
            >
              {" "}
              Instagram.
            </a>
            <br />
            Звертайтесь! Буду рада допомогти.
          </li>
          <li className={style.location}>
            Alcalá, Puerto de Santiago, Los Gigantes або Online
          </li>
          <li className={style.contacts}>
            <a
              className={style.link}
              href="https://t.me/+380503716050"
              target="_blank"
              rel="noreferrer"
            >
              <img className={style.telega} src={icon} alt="icon" />
            </a>

            <a
              className={style.link}
              href="https://wa.me/+380503716050"
              target="_blank"
              rel="noreferrer"
            >
              <img className={style.telega} src={wpIcon} alt="icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Psych;
