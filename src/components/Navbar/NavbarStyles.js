import styled from "styled-components";
 
export const NavbarContainer = styled.header`
    background-color: ${props => props.theme.colors.black};
    padding: 20px 20px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    transition: background-color 0.3s ease;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

export const LogoContainer = styled.div`
    a {
        display: block;
    }
`

export const Logo = styled.img`
  width: 100px;
  height: auto;

  @media (max-width: 1000px) {
    width: 80px;
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media (max-width: 1000px) {
    gap: 20px;
  }
`;

export const Overlay = styled.div`
  display: ${props => props.visible === "true" ? 'block' : 'none'};
  position: fixed;
  top: 145px;
  left: 0;
  width: 100%;
  height: calc(100vh - 80px);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
