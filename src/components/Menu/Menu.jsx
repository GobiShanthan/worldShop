import React from "react";
import {useSelector} from 'react-redux';

import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

//STYLED COMPONENTS
import {
  MenuContainer,
  MenuLogo,
  MenuTabsContainer,
  MenuTabs,
} from "./Menu.styled";






const Menu = () => {

  const {cart}= useSelector((state)=> state.cartData)


  return (
    <MenuContainer>
      <MenuLogo>
        <Link to="/" style={{color:'white',textDecoration:'none'}}>WorldShop</Link>
      </MenuLogo>
      <MenuTabsContainer>
        <MenuTabs>
          <Link to="/" style={{color:'white',textDecoration:'none'}}>Products</Link>
        </MenuTabs>
        <MenuTabs>
          {" "}
          <Link to="cart" style={{color:'white',textDecoration:'none'}}>
            <Badge  badgeContent={cart.length} invisible={!cart} disabled color="primary">
              <ShoppingCartIcon />
            </Badge>
          </Link>
        </MenuTabs>
      </MenuTabsContainer>
    </MenuContainer>
  );
};

export default Menu;
