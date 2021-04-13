import React from 'react';
import styled from 'styled-components';


const MessageCont =styled. div`
display:flex;
background-color:${props=>props.bg};
align-items: center;
padding:5px;
border-radius:200px;
max-width:2000px;
&>*{
    color:#fff
}
position:relative;
width:${props=>props.width}px;
height:${props=>props.height}px;
opacity:${props=>props.opacity};
transition:left 1s;
`
;

const BoxText =styled.div`
display:inline-flex;
justify-content:center;
flex-wrap:wrap;
margin:5px;`


const Message =({text = "7% of greenhouse gases produced globally are due to preventable food waste",
bgcolor ="#E09E9E",
width = 300,
height = 300,
opacity = 0.4}) =>{
    return <MessageCont bg = {bgcolor} width = {width} opacity = {opacity} height = {height}>
        <BoxText>{text}</BoxText>
    </MessageCont>
}

export default Message