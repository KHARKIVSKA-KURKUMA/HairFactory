import PriceComponent from "./PriceComponent";
import { Container, Title } from "./Prices.styled";

const Prices = () => {
  return (
    <Container>
      <Title>Price</Title>
      <PriceComponent
        serviceType="Haircut"
        items={[
          {
            type: "Female model",
            price: "700-1000 UAH",
          },
          {
            type: "Hot scissors",
            price: "450-700 UAH",
          },
          {
            type: "Olaplex hair restoration",
            price: "from 1900 UAH",
          },
        ]}
      />
      <PriceComponent
        serviceType="Modeling"
        items={[
          { type: "Evening / Wedding hairstyle", price: "1000-1500 UAH" },
          { type: "Hollywood curls", price: "450-700 UAH" },
          { type: "The trick is classic", price: "700-1000 UAH" },
        ]}
      />
      <PriceComponent
        serviceType="Hair dyeing"
        items={[
          { type: 'Bio-perm "Mossa"', price: "2000-2500 UAH" },
          { type: "Highlighting (balayage, ombre)", price: "1500-1700 UAH" },
          { type: "Creative coloring", price: "1700-2000 UAH" },
        ]}
      />
    </Container>
  );
};

export default Prices;
