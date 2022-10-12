import React from "react";
import icon from "./../../images/telegram.png";
import wpIcon from "./../../images/icons8-whatsapp-48.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import s from "./Buy.module.css";
import "./swiper.css";

const Buy = (props) => {
  return (
    <div className={s.buy}>
      <div className={s.wrapper}>
        {props.state.map((c) => (
          <ul className={s.list} key={c.id}>
            <li className={s.swiperBox}>
              <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation, Thumbs]}
                grabCursor={true}
                className={s.productGallery}
              >
                <SwiperSlide>
                  <img
                    className={s.productImg}
                    src={c.pictures.one}
                    alt="product"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className={s.productImg}
                    src={c.pictures.two}
                    alt="product"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className={s.productImg}
                    src={c.pictures.three}
                    alt="product"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className={s.productImg}
                    src={c.pictures.four}
                    alt="product"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className={s.productImg}
                    src={c.pictures.five}
                    alt="product"
                  />
                </SwiperSlide>
              </Swiper>
            </li>
            <li className={s.text}>{c.text}</li>
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
      </div>
    </div>
  );
};

export default Buy;
