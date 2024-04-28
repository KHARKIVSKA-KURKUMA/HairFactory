import {
  Type,
  Price,
  PriceBlock,
  PriceTypeService,
  TypePriceWrap,
} from "./Prices.styled";

const PriceComponent = ({ serviceType, items }) => {
  return (
    <PriceBlock>
      <PriceTypeService>{serviceType}</PriceTypeService>
      {items.map((item, index) => (
        <TypePriceWrap key={index}>
          <Type>{item.type}</Type>
          <Price>{item.price}</Price>
        </TypePriceWrap>
      ))}
    </PriceBlock>
  );
};

export default PriceComponent;
