import styled from "styled-components";

//MAIN MENU CONTAINER
export const MenuContainer = styled.div`
  width: 100vw;
  height: 64px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0px 10px;
`;


//MENU LOGO
export const MenuLogo = styled.div`
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
`;

//MENU TABS CONTAINER
export const MenuTabsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

//MENU TAB BUTTONS
export const MenuTabs = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
`;
