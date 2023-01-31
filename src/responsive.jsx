import {css} from 'styled-components'


//MOBILE  UP TO IPHONE 10 SIZE 414 WIDE
export const Mobile  =(props)=>{
    return css`
    @media only screen and (max-width:1000px){
        ${props}
    }
    `
}
