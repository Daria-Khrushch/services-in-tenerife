import React from "react";
import { useTranslation } from "react-i18next";
import { Link, Wrapper } from "./AddAdvertBtn.styled";

const AddAdvertBtn = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Link
        target="_blank"
        rel="noreferrer"
        href="https://form.jotform.com/222892637147060"
      >
        {t("add an advert")}
      </Link>
    </Wrapper>
  );
};

export default AddAdvertBtn;
