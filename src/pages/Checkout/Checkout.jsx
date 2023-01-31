import React from 'react'

import {
    CheckoutWrapper,
    CheckoutContainer,
    Desc
} from './Checkout.styled'

const Checkout = () => {
  return (
    <CheckoutWrapper>
        <CheckoutContainer>
            <Desc>SUCCESS YOU HAVE CHECKED OUT</Desc>
        </CheckoutContainer>
    </CheckoutWrapper>
  )
}

export default Checkout