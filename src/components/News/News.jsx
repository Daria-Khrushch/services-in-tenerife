import React from "react";
import news1 from "./../../images/news1.webp";
import news2 from "./../../images/news2.jpg";
import news3 from "./../../images/news3.jpg";
import { useTranslation } from "react-i18next";
import s from "./News.module.css";

const News = () => {
  const { t } = useTranslation();
  return (
    <div className={s.wrapper}>
      <div className={s.newsContainer}>
        <div className={s.newsContent}>
          <div className={s.title}>{t("title1")}</div>
          <img className={s.img} src={news1} alt="news" />
          <div className={s.content}>{t("content1")}</div>
        </div>

        <div className={s.newsContent}>
          <div className={s.title}>{t("title2")}</div>
          <img className={s.img} src={news2} alt="news" />
          <div className={s.content}>{t("content2")}</div>
        </div>

        <div className={s.newsContent}>
          <div className={s.title}>{t("title3")}</div>
          <img className={s.img} src={news3} alt="news" />
          <div className={s.content}>{t("content3")}</div>
        </div>
      </div>
    </div>
  );
};

export default News;
