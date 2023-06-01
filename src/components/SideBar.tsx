import styled from "@emotion/styled";

const SideBar = () => {
  return (
    <Container>
      <SideBarCard>
        <ContentWrapper>
          <Content>
            <SearchContainer>
              <SearchSpan>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="inherit">
                  <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path>
                </svg>
                Cari
              </SearchSpan>
            </SearchContainer>
            <SidebarList>
              <span>Semua Produk</span>
            </SidebarList>
            <SidebarList>
              <span>Produk Unggulan</span>
            </SidebarList>
            <SidebarList>
              <span>Produk Bundle</span>
            </SidebarList>

            <LittleTitle>Kategori</LittleTitle>

            <SidebarList>New Arrivals</SidebarList>
            <SidebarList>Defect Sale</SidebarList>
            <SidebarList>Praying Set</SidebarList>
            <SidebarList>Dress</SidebarList>
            <SidebarList>Set</SidebarList>
            <SidebarList>Knitwear</SidebarList>
            <SidebarList>Hijab</SidebarList>
            <SidebarList>Top</SidebarList>
            <SidebarList>Bottom</SidebarList>
            <SidebarList>Zara Voal</SidebarList>
            <SidebarList>Cap Melayu Shawl</SidebarList>
            <SidebarList>Meeda Shawl</SidebarList>
            <SidebarList>Meeda Shawl</SidebarList>
            <SidebarList>Luna Cardigan</SidebarList>
            <SidebarList>Daily Mukena</SidebarList>
          </Content>
        </ContentWrapper>

        <Divider />

        <ContentWrapper>
          <Content>
            <LittleTitle>Urutkan produk berdasarkan</LittleTitle>

            <SidebarList>Unggulan</SidebarList>
            <SidebarList>Terbaru</SidebarList>
            <SidebarList>Terlama</SidebarList>
            <SidebarList>Terpopuler</SidebarList>
            <SidebarList>Harga Terendah</SidebarList>
            <SidebarList>Harga Tertinggi</SidebarList>
            <SidebarList>Nama Produk (A-Z)</SidebarList>
          </Content>
        </ContentWrapper>

        <ContentWrapper>
          <Content></Content>
        </ContentWrapper>
      </SideBarCard>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  width: 300px;
  margin-right: 12px;
  margin-top: 16px;
`;

const SideBarCard = styled.div`
  line-height: 20px;
  color: rgba(49, 46, 46, 0.8);
  margin-bottom: 16px;
  border: 1px solid rgba(0, 0, 0, 0.24);
  border-radius: 4px;
`;

const ContentWrapper = styled.div`
  padding: 24px 8px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchContainer = styled.div`
  height: 32px;
  overflow: hidden;
  padding: 0 14.2222222222px;
  color: rgba(49, 46, 46, 0.8);
  text-align: left;
  margin-bottom: 16px;
  font-size: 14px;
`;

const SearchSpan = styled.span`
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1 0 auto;
  justify-content: inherit;
  line-height: normal;
  position: relative;
`;

const SidebarList = styled.a`
  overflow: hidden;
  height: 32px;
  padding: 0 14.2222222222px;
  color: rgba(49, 46, 46, 0.8);
  font-size: 14px;
  text-align: left;
  width: 100%;
`;

const LittleTitle = styled.div`
  margin: 0 12px 4px;
  margin-top: 24px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: rgba(49, 46, 46, 0.8);
`;

const Divider = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.24);
  border-width: thin 0 0;
  display: block;
  flex: 1 1 0px;
  height: 0;
  max-height: 0;
  max-width: 100%;
  transition: inherit;
`;
