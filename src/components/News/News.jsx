import React from "react";
import news1 from "./../../images/news1.webp";
import news2 from "./../../images/news2.jpg";
import news3 from "./../../images/news3.jpg";
import { useTranslation } from "react-i18next";
import { Container, Wrapper } from "components/Buy/Buy.styled";
import { Box, Title, Picture, Content } from "./News.styled";

const News = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Wrapper>
        <Box>
          <Title>{t("title1")}</Title>
          <Picture src={news1} alt="news" />
          <Content>{t("content1")}</Content>
        </Box>

        <Box>
          <Title>{t("title2")}</Title>
          <Picture src={news2} alt="news" />
          <Content>{t("content2")}</Content>
        </Box>

        <Box>
          <Title>{t("title3")}</Title>
          <Picture src={news3} alt="news" />
          <Content>{t("content3")}</Content>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default News;
