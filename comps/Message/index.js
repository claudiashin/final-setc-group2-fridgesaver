import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';


const MessageCont =styled. div`
display:flex;
background-color:${props=>props.bg};
background:${props=>props.bgopacity};
align-items: center;
padding:10px;
margin:8px;
border-radius:100%;
width:${props=>props.width}px;
height:${props=>props.height}px;
opacity:${props=>props.opacity};
border:${props=>props.border};
`;

const BoxText =styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
font-size:14px;
font-family: 'Athiti';
text-align: center;
margin:5px;
`;


const Message =({text = "7% of greenhouse gases produced globally are due to preventable food waste",
bgcolor ="#E09E9E",
backgroundopacity = "rgba(224, 158, 158, 0.4)",
width = 160,
height = 160,
opacity = 0.6,
border = "none",

}) => {
    
    return <MessageCont bg = {bgcolor} bgopacity= {backgroundopacity} width = {width} opacity = {opacity} height = {height} border = {border}>
        <BoxText>{text}</BoxText>
    </MessageCont>
}

export default Message;