import React from 'react';
import styled from 'styled-components';


const MessageCont =styled. div`
display:flex;
background-color:${props=>props.bg};
align-items: center;
padding:5px;
border-radius:80px;
width:${props=>props.width}px;
height:${props=>props.height}px;
opacity:${props=>props.opacity};
`
;

const BoxText =styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
font-size:10px;
font-family: 'Athiti';
margin:5px;`


const Message =({text = "7% of greenhouse gases produced globally are due to preventable food waste",
bgcolor ="#E09E9E",
width = 160,
height = 160,
opacity = 0.6}) =>{
    return <MessageCont bg = {bgcolor} width = {width} opacity = {opacity} height = {height}>
        <BoxText>{text}</BoxText>
    </MessageCont>
}

export default Message;