import styled from "@emotion/styled";

import Navigation from "./Navigation";

const Header = () => {
  return (
    <Container>
      <Logo src="https://d2kchovjbwl1tk.cloudfront.net/vendors/19/assets/image/1670653014087-Logo_Gonegani_resized1024-png.webp" />
      <Navigation />
      <Icons>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          fill="rgba(49,46,46)">
          <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          fill="rgba(49,46,46)">
          <path d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"></path>
        </svg>
      </Icons>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 112px;
  border: 1px black solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: white;
`;

const Logo = styled.img`
  width: 88px;
  height: 88px;
  padding: 12px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 112px;
`;
