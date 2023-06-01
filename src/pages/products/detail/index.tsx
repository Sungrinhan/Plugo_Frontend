import styled from "@emotion/styled";
import useGetProductDetailInfo from "hooks/useGetProductDetailInfo";

const ProductDetailPage = () => {
  const { detailInfo } = useGetProductDetailInfo();

  return (
    <VMain>
      <VMainWrap>
        <Container>
          <LayoutWrap>
            <VApplication>
              <Faded>
                <SwiperContainer>
                  <Image
                    src={detailInfo ? detailInfo.images[0].url : ""}
                    alt="product"
                  />
                </SwiperContainer>
              </Faded>
            </VApplication>

            <DetailInfo>
              <Pl6>
                <Mt2>
                  <ProductLabesWrap>
                    <Badge>Ada Stock</Badge>
                  </ProductLabesWrap>
                  <ProductName>{detailInfo ? detailInfo.name : ""}</ProductName>
                  <ProductPrice>
                    Rp {detailInfo ? detailInfo.productVariations[0].price : ""}
                  </ProductPrice>
                  <CartButton>
                    <BtnContent>
                      <BtnIcon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="inherit">
                          <path d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z"></path>
                        </svg>
                      </BtnIcon>
                      Tambah Ke Keranjang
                    </BtnContent>
                  </CartButton>

                  {/* productVariations 에 detail 이 있는경우만 컴포넌트 표시 */}
                  {!detailInfo ? (
                    ""
                  ) : detailInfo?.productVariations[0].details ? (
                    <Mb5>
                      <DisplayMb2>color:</DisplayMb2>
                      <div>
                        <ProductKind>
                          <Mr2>
                            <SmallImgContainer>
                              <ResponsiveSizer />
                              <SmallImage
                                image={
                                  detailInfo
                                    ? detailInfo.productVariations[0].details[0]
                                        .imageURL
                                    : ""
                                }
                              />
                              <ResponsiveContent />
                            </SmallImgContainer>
                          </Mr2>
                          <ColorPriceWrap>
                            {detailInfo
                              ? detailInfo.productVariations[0].details[0].value
                              : ""}
                            <LayoutCaptionWrap>
                              <Mr1>
                                Rp{" "}
                                {detailInfo
                                  ? detailInfo.productVariations[0].price
                                  : ""}
                              </Mr1>
                            </LayoutCaptionWrap>
                          </ColorPriceWrap>
                          <DefaultButton>
                            <ButtonContent>Beli</ButtonContent>
                          </DefaultButton>
                        </ProductKind>
                      </div>
                    </Mb5>
                  ) : (
                    <></>
                  )}

                  <Seperator />

                  <Mt6TextPreline>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: detailInfo ? detailInfo.description : "",
                      }}></div>
                  </Mt6TextPreline>

                  <Berat>Berat: {detailInfo ? detailInfo.weight : ""}g</Berat>

                  <ProductShipping>
                    <Mb1>Pengiriman</Mb1>
                    <Mb1>Krim ke:</Mb1>
                    <Mt4>
                      Dikirim dalam 24 jam, (
                      {detailInfo
                        ? detailInfo.estimatedDeliveryTimeInstock
                        : ""}
                      )
                      <br />
                      (Setelah pembayaran dikonfirmasi)
                    </Mt4>
                  </ProductShipping>

                  <MessageButtonWrap>
                    <ButtonContent>
                      <BtnIcon2>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="inherit">
                          <path d="M8,11a1,1,0,1,0,1,1A1,1,0,0,0,8,11Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,12,11Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,16,11ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,.3-.71,1,1,0,0,0-.3-.7A8,8,0,1,1,12,20Z"></path>
                        </svg>
                      </BtnIcon2>
                      Kirim Pesan ke Gonegani?
                    </ButtonContent>
                  </MessageButtonWrap>
                </Mt2>
              </Pl6>
            </DetailInfo>
          </LayoutWrap>
        </Container>
      </VMainWrap>
    </VMain>
  );
};

export default ProductDetailPage;

const VMain = styled.div`
  padding: 112px 0px 198px;
  display: flex;
  flex: 1 0 auto;
  max-width: 100%;
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
`;

const VMainWrap = styled.div`
  flex: 1 1 auto;
  max-width: 100%;
  position: relative;
`;

const Container = styled.div`
  padding-bottom: 24px !important;

  margin-left: auto;
  margin-right: auto;
  padding: 12px;
  width: 100%;

  @media (min-width: 1904px) {
    max-width: 768px;
  }

  @media (min-width: 1264px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }
`;

const LayoutWrap = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  min-width: 0;
`;

const VApplication = styled.div`
  margin-bottom: 24px !important;

  @media (min-width: 0) {
    flex-basis: 100%;
    flex-grow: 0;
    max-width: 100%;
  }

  @media (min-width: 960px) {
    flex-basis: 50%;
    flex-grow: 0;
    max-width: 50%;
  }

  flex: 1 1 auto;
  max-width: 100%;
`;

const Faded = styled.div`
  background-color: rgba(0, 0, 0, 0.08);
`;

const SwiperContainer = styled.div`
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  padding: 0;
  position: relative;
  z-index: 1;
  transition: height 0.35s ease;
`;

const Image = styled.img`
  width: 512px;
  height: auto;
`;

const DetailInfo = styled.div`
  flex: 1 1 auto;

  @media (min-width: 0) {
    flex-basis: 100%;
    flex-grow: 0;
    max-width: 100%;
  }

  @media (min-width: 960px) {
    flex-basis: 50%;
    flex-grow: 0;
    max-width: 50%;
  }
`;

const Pl6 = styled.div`
  padding-left: 24px !important;
`;

const Mt2 = styled.div`
  margin-top: 8px !important;
`;

const ProductLabesWrap = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  min-width: 0;
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
`;

const ProductName = styled.div`
  margin-bottom: 8px !important;
  margin-top: 8px !important;
  letter-spacing: 0 !important;
  font-size: 20px !important;
  font-weight: 500;
  line-height: 24px;
  word-break: break-word;
`;

const ProductPrice = styled.div`
  color: rgba(49, 46, 46, 0.62) !important;
  letter-spacing: 0 !important;
  font-size: 16px !important;
  font-weight: 400;
  line-height: 24px;
  caret-color: #9f9f9f !important;
`;

const CartButton = styled.div`
  background-color: #4d4021 !important;
  border-color: #4d4021 !important;
  overflow: hidden;
  height: 40px;
  min-width: 71px;
  padding: 0 17.7777777778px;
  color: #fff;
  text-transform: none;
  margin-top: 40px !important;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  display: flex;
  flex: 1 0 auto;
  max-width: none;
  min-width: 100% !important;
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  flex: 0 0 auto;
  font-weight: 500;
  justify-content: center;
  letter-spacing: 0;
  outline: 0;
  position: relative;

  text-decoration: none;
  text-indent: 0;
  text-transform: uppercase;
  transition-duration: 0.28s;
  transition-property: box-shadow, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  border-style: none;
`;

const BtnContent = styled.span`
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1 0 auto;
  justify-content: inherit;
  line-height: normal;
  position: relative;
  transition: inherit;
  transition-property: opacity;
  max-width: 100%;
  padding-left: 22px;
`;

const BtnIcon = styled.div`
  height: 24px;
  user-select: none;
  vertical-align: middle;
  text-indent: 0;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
  font-feature-settings: "liga";
  align-items: center;
  display: inline-flex;
  font-size: 24px;
  justify-content: center;
  letter-spacing: normal;
  line-height: 1;
  width: 22px;
  color: inherit;
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  fill: white;
`;

const Mb5 = styled.div`
  margin-bottom: 20px !important;
  margin-top: 24px !important;
  margin-right: -50px;
`;

const DisplayMb2 = styled.div`
  word-break: break-word;
  letter-spacing: 0 !important;
  font-size: 16px !important;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px !important;
`;

const ProductKind = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-wrap: nowrap;
  min-width: 0;
  padding-bottom: 16px !important;
  padding-right: 20px !important;
  padding-top: 8px !important;
  align-items: center !important;
`;

const Mr2 = styled.div`
  margin-right: 8px !important;
`;

const SmallImgContainer = styled.div`
  z-index: 0;
  display: flex;
  flex: 1 0 auto;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  color: rgba(0, 0, 0, 0.8);
  height: 48px;
  width: 48px;
`;

const ResponsiveSizer = styled.div`
  flex: 1 0 0px;
  transition: padding-bottom 0.2s cubic-bezier(0.25, 0.8, 0.5, 1);
  padding-bottom: 132.812%;
`;

const SmallImage = styled.div<{ image: string }>`
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

const ResponsiveContent = styled.div`
  width: 128px;
  margin-left: -100%;
  flex: 1 0 0px;
  max-width: 100%;
`;

const ColorPriceWrap = styled.div`
  flex: 1 1 auto;
  max-width: 100%;
  flex: 1 1 auto;
  max-width: 100%;
`;

const LayoutCaptionWrap = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  min-width: 0;
  letter-spacing: 0 !important;
  font-weight: 400;
  line-height: 16px;
  font-size: 12px !important;
  @media (min-width: 1024px) {
    font-size: 14px !important;
  }
`;

const Mr1 = styled.div`
  margin-right: 4px !important;
`;

const DefaultButton = styled.button`
  color: #4d4021 !important;
  overflow: hidden;
  height: 32px;
  min-width: 57px;
  padding: 0 14.2222222222px;
  text-transform: none;
  font-size: 14px;
  cursor: pointer;
  border: thin solid;
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  flex: 0 0 auto;
  font-weight: 500;
  justify-content: center;
  letter-spacing: 0;
  outline: 0;
  position: relative;
  text-decoration: none;
  text-indent: 0;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  transition-duration: 0.28s;
  transition-property: box-shadow, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  background-color: transparent;
`;

const ButtonContent = styled.span`
  max-width: 100%;
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1 0 auto;
  justify-content: inherit;
  line-height: normal;
  position: relative;
  transition: inherit;
  transition-property: opacity;
`;

const Seperator = styled.div`
  color: rgba(0, 0, 0, 0.12);
  border-color: rgba(193, 187, 187, 0.967);
  border: solid;
  border-width: thin 0 0;
  display: block;
  flex: 1 1 0px;
  height: 0;
  max-height: 0;
  max-width: 100%;
  transition: inherit;
`;

const Mt6TextPreline = styled.div`
  white-space: pre-line;
  word-break: break-word;
  margin-top: 24px !important;
`;

const Berat = styled.div`
  margin-top: 24px !important;
  color: rgba(49, 46, 46, 0.8);
  line-height: 20px;
`;

const ProductShipping = styled.div`
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.24);
  border-radius: 4px;
  padding: 8px 16px;
  margin-top: 16px !important;
  color: rgba(49, 46, 46, 0.8);
  line-height: 20px;
`;

const Mb1 = styled.div`
  font-size: 16px !important;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px !important;
  letter-spacing: 0 !important;
  word-break: break-word;
`;

const Mt4 = styled.div`
  margin-top: 16px !important;
  color: rgba(49, 46, 46, 0.8);
  line-height: 20px;
`;

const MessageButtonWrap = styled.div`
  margin-right: -24px;
  white-space: normal;
  height: min-content;
  border: 1px solid #4d4021;
  color: #4d4021 !important;
  overflow: hidden;
  padding: 0 17.7777777778px;
  text-transform: none;
  padding-bottom: 12px !important;
  padding-top: 12px !important;
  margin-top: 24px !important;
  font-size: 14px;
  caret-color: #c72a1c !important;
  cursor: pointer;
  display: flex;
  flex: 1 0 auto;
  max-width: none;
  min-width: 100% !important;
  align-items: center;
  border-radius: 4px;
  font-weight: 500;
  justify-content: center;
  letter-spacing: 0;
  outline: 0;
  position: relative;
  text-decoration: none;
  text-indent: 0;
  transition-duration: 0.28s;
  transition-property: box-shadow, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  vertical-align: middle;
  background-color: transparent;
`;

const BtnIcon2 = styled.div`
  height: 24px;
  user-select: none;
  vertical-align: middle;
  text-indent: 0;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
  font-feature-settings: "liga";
  align-items: center;
  display: inline-flex;
  font-size: 24px;
  justify-content: center;
  letter-spacing: normal;
  line-height: 1;
  width: 22px;
  color: inherit;
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  color: #4d4021 !important;
  fill: #4d4021;
`;
