import React from "react";
import icon from "./../../images/telegram.png";
import wpIcon from "./../../images/icons8-whatsapp-48.png";
import s from "./Cooker.module.css";

const Cooker = (props) => {
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
      </div>
    </div>
  );
};

export default Cooker;
