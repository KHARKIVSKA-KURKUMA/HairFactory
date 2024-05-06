import { useTranslation } from "react-i18next";
import PriceComponent from "./PriceComponent";
import { Container, Title } from "./Prices.styled";

const Prices = () => {
  const { t } = useTranslation();
  return (
    <Container id="stock">
      <Title>{t("home.price.title")}</Title>
      <PriceComponent
        serviceType={t("home.price.servicesType.haircut")}
        items={[
          {
            type: t("home.price.procedure.femaleModel"),
            price: "700-1000 UAH",
          },
          {
            type: t("home.price.procedure.hotScissors"),
            price: "450-700 UAH",
          },
          {
            type: t("home.price.procedure.restoration"),
            price: "from 1900 UAH",
          },
        ]}
      />
      <PriceComponent
        serviceType={t("home.price.servicesType.modeling")}
        items={[
          {
            type: t("home.price.procedure.hairstyle"),
            price: "1000-1500 UAH",
          },
          { type: t("home.price.procedure.curls"), price: "450-700 UAH" },
          {
            type: t("home.price.procedure.trick"),
            price: "700-1000 UAH",
          },
        ]}
      />
      <PriceComponent
        serviceType={t("home.price.servicesType.dyeing")}
        items={[
          { type: t("home.price.procedure.perm"), price: "2000-2500 UAH" },
          {
            type: t("home.price.procedure.highlighting"),
            price: "1500-1700 UAH",
          },
          { type: t("home.price.procedure.coloring"), price: "1700-2000 UAH" },
        ]}
      />
    </Container>
  );
};

export default Prices;
