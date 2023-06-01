import styled from "@emotion/styled";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <h1>GoneGani</h1>
          <p>Phone: +6281234567890</p>
          <p>Bandung, West Java, Indonesia</p>
          <p>Since 2019</p>
        </Content>
        <Content>
          <ContentWrapper>
            <ContentTitle>Metode Pembayaran</ContentTitle>
            <IconWrapper>
              <Icon src="https://gonegani.id/_nuxt/a4e6bcfcbdeeae2e1165fc1c9adcb6ec.svg" />
              <Icon src="https://gonegani.id/_nuxt/5d77aa13f3d7e2efc5adb2643974280b.svg" />
              <Icon src="https://gonegani.id/_nuxt/0dd2173a4643f3f2c860c99800fef2e0.svg" />
              <Icon src="https://gonegani.id/_nuxt/85262fb5b5e295ef32a35c0f14921d49.svg" />
              <Icon src="https://gonegani.id/_nuxt/d3d95bc7c18cb127c2a173b14758e0f6.svg" />
              <Icon src="https://gonegani.id/_nuxt/edc299161b9b2e266db3fb4fdb73708d.svg" />
              <Icon src="https://gonegani.id/_nuxt/356cd19d90616c7d71c64492ad019af0.svg" />
              <Icon src="https://gonegani.id/_nuxt/7cbd8e9a2c69920aea77286c29909d70.svg" />
              <Icon src="https://gonegani.id/_nuxt/371b48e6f2e97a8cb95b8bdc7bb438b5.svg" />
              <Icon src="https://gonegani.id/_nuxt/cce01c5a6c106d17bef4ada277e92e35.svg" />
              <Icon src="https://gonegani.id/_nuxt/d6fe620344c11a553ec75ad1840aeda1.svg" />
            </IconWrapper>
          </ContentWrapper>
          <ContentWrapper>
            <ContentTitle>Metode Pengiriman</ContentTitle>
            <IconWrapper>
              <Icon src="https://shop-static.plugo.world/8de9681f9e7f86f46476ebef35629fbd.svg" />
              <Icon src="https://shop-static.plugo.world/7395cbe64f9a54ed860c9f5e11945703.svg" />
            </IconWrapper>
          </ContentWrapper>
        </Content>
        <Content>
          <ContentTitle>Terms & Conditions</ContentTitle>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  width: 100%;
  height: 286px; /* 내용물에 따라 알맞는 값 설정 */
  bottom: 0px;
  /* position: absolute; */
  border: 1px solid black;
  background-color: rgb(237, 234, 227);
  line-height: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px 16px;
  flex: 1 1 auto;
`;

const Content = styled.div`
  margin-bottom: 24px;
  height: 214px;
  width: 25%;
  line-height: inherit;
`;

const ContentWrapper = styled.div`
  padding: 0 12px;
`;

const ContentTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 16px;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 12px;
`;

const Icon = styled.img`
  width: 32px;
  padding: 4px;
`;
