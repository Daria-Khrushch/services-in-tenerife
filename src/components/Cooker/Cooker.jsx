import React, { useState } from "react";
import icon from "./../../images/telegram.png";
import wpIcon from "./../../images/icons8-whatsapp-48.png";
import cookerOlga from "./../../images/cooker/cookerOlga.jpg";
import s from "./Cooker.module.css";

const Cooker = (props) => {
  const [showMore, setShowMore] = useState(false);
  const text =
    "ПЕЛЬМЕНІ -12€ та ВАРЕНИКИ-10€; БОРЩ з ребрами-17€ -2Л; Пампушки з часником - 6€; ІКРА ЗАМОРСЬКА БАКЛАЖАНА -14€; КАРТОПЕЛЬНІ ЗРАЗИ з м'ясом-12€; ГОЛУБЦІ- 12€ -напівфабрикат, 15€- готові; ПЕРЕЦЬ ФАРШОВАНИЙ - 14€ напівфабрикат, 17€- готові; ПЕРЕЦЬ ФАРШОВАНИЙ - 14€ напівфабрикат, 17€- готові; КАРТОПЕЛЬНІ ДРАНИКИ - 12€; МІТБОЛИ У ТОМАТІ- 15€; БРИЗОЛЬ - 15€; КУРИНИЙ БИТОК - 15€; БЛІНЧИКИ З РІЗНИМ НАЧИНКОМ НА ВАШ СМАК- 13€; СМАЖЕНІ ПИРІЖКИ - 1шт -1.5€; БЕЛЯШІ - 1шт.- 1,5 €; САЛАТИ(оселедець під шубою, олів'є, мімоза з тунцем, вінегрет, крабовий); Для ласунів смачний торт НАПОЛЕОН -20€ і A-ЛЯ КИЇВСЬКИЙ-25€! ";
  return (
    <div className={s.cooker}>
      <div className={s.wrapper}>
        {props.state.map((c) => (
          <ul key={c.id} className={s.list}>
            <li className={s.gallery}>
              <img className={s.galleryItem} src={c.gallery} alt="gallery" />
            </li>
            <li className={s.about}>{c.about}</li>
            <li className={s.location}>{c.location}</li>
            <li className={s.contacts}>
              {c.contacts.telega && (
                <a
                  className={s.link}
                  href={c.contacts.telega}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className={s.telega} src={icon} alt="icon" />
                </a>
              )}

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

        <ul className={s.list}>
          <li className={s.gallery}>
            <img className={s.galleryItem} src={cookerOlga} alt="gallery" />
          </li>
          <li className={s.about}>
            Доброго дня всім. Мене звати Оля і ми переїхали в Playa San Juan.
            Дуже раді Вас смачно нагодувати домашньою їжею. Готую з любов'ю та
            душею. САМОВИВІЗ або ДОСТАВКА -5€.{" "}
            {showMore ? text : `${text.substring(0, 0)}`}
            <button className="btn" onClick={() => setShowMore(!showMore)}>
              {showMore ? " Приховати." : " Меню та ціни."}
            </button>{" "}
          </li>
          <li className={s.location}>Tenerife South</li>
          <li className={s.contacts}>
            <a
              className={s.link}
              href="https://wa.me/+380935565692 "
              target="_blank"
              rel="noreferrer"
            >
              <img className={s.telega} src={wpIcon} alt="icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cooker;
