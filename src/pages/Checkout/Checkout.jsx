import React from 'react'
import successPic from '../../images/success.webp'

import {
    CheckoutWrapper,
    CheckoutContainer,
    Desc,
    Image
} from './Checkout.styled'

const Checkout = () => {
  return (
    <CheckoutWrapper>
        <CheckoutContainer>
            <Desc>SUCCESS YOU HAVE CHECKED OUT</Desc>
            <Image src={successPic} alt='Success Image'/>
        </CheckoutContainer>
    </CheckoutWrapper>
  )
}

export default Checkout