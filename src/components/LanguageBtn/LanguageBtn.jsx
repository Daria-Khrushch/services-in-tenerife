import React from "react";
import { useTranslation } from "react-i18next";
import { BtnContainer, Btn } from "./LanguageBtn.styled";
import useLocalStorage from "hooks/use-localstorage";
import i18n from "../../i18n";

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
    <BtnContainer>
      <Btn onClick={handleLenguageChange}>{t("ukrainian")}</Btn>
      <Btn onClick={handleLenguageChange}>{t("russian")}</Btn>
    </BtnContainer>
  );
}

export default LanguageBtn;
