import styled from 'styled-components'

export const ToastMessagesContainer = styled.div`
position:absolute;
top:80px;
right:20px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:white;
font-size:20px;
gap:10px;
z-index:99
`


export const ToastContainer = styled.div`
border-radius:10px;
padding:10px;
min-width:100px;
display:flex;
justify-content:center;
align-items:center;
color:white;
font-size:20px;
background:${(props) => props.success ?'green':'red'};
`


