import { Link } from "react-router-dom";

import styled from "@emotion/styled";
import { Product } from "types/product";

type ProductProps = {
  key: string | number;
  product: Product;
};

const Card = ({ product }: ProductProps) => {
  return (
    <Wrapper>
      <ContainerLink to={`/products/${product.id}/${product.name}`}>
        <PictureRelative>
          <PictureResponsive>
            <PictureResponsiveSizer />
            <Picture image={product.images[0]?.url} />
            <VResponsiveContent />
          </PictureResponsive>

          <LabelWrapper>
            <ProductTopLabels />
            <div>
              <LayoutProductLabel>
                <Badge>Ada Stock</Badge>
              </LayoutProductLabel>
            </div>
          </LabelWrapper>
        </PictureRelative>

        <LayoutPart2>
          <ColorsGroupWrapper></ColorsGroupWrapper>
          <ProductNameTag>{product.name}</ProductNameTag>
          <PriceTag>
            Rp {product.productVariations[0].price.toLocaleString()}
          </PriceTag>
        </LayoutPart2>
      </ContainerLink>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  padding: 12px;
  flex: 1 1 auto;

  @media (min-width: 0) {
    flex-basis: 49%;
    flex-grow: 0;
    max-width: 49%;
  }

  @media (min-width: 600px) {
    flex-basis: 31.3333333333%;
    flex-grow: 0;
    max-width: 31.3333333333%;
  }

  @media (min-width: 960px) {
    flex-basis: 31.3333333333%;
    flex-grow: 0;
    max-width: 31.3333333333%;
  }
  @media (min-width: 1264px) {
    flex-basis: 23%;
    flex-grow: 0;
    max-width: 23%;
  }
  @media (min-width: 1904px) {
    flex-basis: 15%;
    flex-grow: 0;
    max-width: 15%;
  }
`;

const ContainerLink = styled(Link)`
  background-color: transparent;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(0, 0, 0, 0.14),
    0 0 0 0 rgba(0, 0, 0, 0.12) !important;
  cursor: pointer;
  overflow: hidden;
  word-wrap: break-word;
  border-width: thin;
  display: block;
  max-width: 100%;
  outline: none;
  position: relative;
  text-decoration: none;
  transition-property: box-shadow, opacity;
  white-space: normal;

  ::before {
    background: currentColor;
    bottom: 0;
    content: "";
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity 0.2s;
  }
`;

const PictureRelative = styled.div`
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  position: relative;
`;

const PictureResponsive = styled.div`
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex: 1 0 auto;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  z-index: 0;
`;

const PictureResponsiveSizer = styled.div`
  padding-bottom: 100%;
  flex: 1 0 0px;
  transition: padding-bottom 0.2s cubic-bezier(0.25, 0.8, 0.5, 1);
`;

const Picture = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-color: rgba(0, 0, 0, 0.1);
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
`;

const VResponsiveContent = styled.div`
  margin-left: -100%;
  flex: 1 0 0px;
  max-width: 100%;
`;

const LabelWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-wrap: nowrap;
  min-width: 0;
  height: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  flex-direction: column;
  justify-content: space-between !important;
  padding: 4px !important;
  z-index: 1;
`;

const ProductTopLabels = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-wrap: nowrap;
  min-width: 0;
  flex-grow: 0 !important;
  flex-shrink: 1 !important;
  flex-wrap: wrap;
  justify-content: flex-end !important;
`;

const LayoutProductLabel = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-wrap: nowrap;
  min-width: 0;
  flex-grow: 0 !important;
  flex-shrink: 1 !important;
  flex-wrap: wrap;
`;

const Badge = styled.div`
  align-items: center;
  display: inline-flex;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  padding: 0 4px;
  vertical-align: baseline;
  background-color: rgb(49, 46, 46) !important;
  border-color: rgb(49, 46, 46) !important;
  margin: 4px 4px 0 0;
  font-size: 12px;
  line-height: 16px;
`;

const LayoutPart2 = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-wrap: nowrap;
  min-width: 0;
  flex-direction: column;
  padding: 8px !important;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  height: 148px;
`;

const ColorsGroupWrapper = styled.div`
  margin-bottom: 2px;
`;

const ProductNameTag = styled.div`
  max-width: 100%;
  font-size: 16px !important;
  font-weight: 500;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  color: rgba(49, 46, 46, 0.8);
  white-space: nowrap;
  word-break: break-word;
  letter-spacing: 0 !important;
  flex: 0 0 auto;
`;

const PriceTag = styled.div`
  max-width: 100%;
  color: rgba(49, 46, 46, 0.62) !important;
  caret-color: #9f9f9f !important;
  flex: 0 0 auto;
`;
