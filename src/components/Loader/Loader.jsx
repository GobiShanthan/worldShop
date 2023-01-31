import React from 'react'
import loadIcon from '../../images/loadIcon.webp'

import {
    LoaderContainer,
    LoaderImage,
    LoaderText,
} from './Loader.styled'

const Loader = () => {
  return (
    <LoaderContainer>
        <LoaderImage src={loadIcon} alt='WorldShop loading'/>
        <LoaderText>LOADING</LoaderText>
    </LoaderContainer>
  )
}

export default Loader