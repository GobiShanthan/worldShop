import React from 'react'
import {Link} from 'react-router-dom'

//STYLED COMPONENTS
import { 
    MenuContainer,
    MenuLogo,
    MenuTabsContainer,
    MenuTabs
} from './Menu.styled'

const Menu = () => {
  return (
    <MenuContainer>
        <MenuLogo><Link to='/'>WorldShop</Link></MenuLogo>
        <MenuTabsContainer>
            <MenuTabs><Link to='/products'>Products</Link></MenuTabs>
            <MenuTabs> <Link to='carts'>Carts</Link></MenuTabs>
        </MenuTabsContainer>
    </MenuContainer>
  )
}

export default Menu