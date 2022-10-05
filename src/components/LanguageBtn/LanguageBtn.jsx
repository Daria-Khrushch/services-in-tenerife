import React from "react";
import { useTranslation } from "react-i18next";
import useLocalStorage from "../../hooks/use-localstorage";
import i18n from "../../i18n";

import s from "./LanguageBtn.module.css";

function LanguageBtn() {
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "ua");

  const handleLenguageChange = () => {
    if (language === "ua") {
      i18n.changeLanguage("ru");
      setLanguage("ru");
    } else if (language === "ru") {
      i18n.changeLanguage("ua");
      setLanguage("ua");
    }
  };
  return (
    <div className={s.navBtn}>
      <button className={s.btn} onClick={handleLenguageChange}>
        {t("ukrainian")}
      </button>
      <button className={s.btn} onClick={handleLenguageChange}>
        {t("russian")}
      </button>
    </div>
  );
}

export default LanguageBtn;
