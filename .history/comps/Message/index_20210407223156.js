import React from 'react';
import styled from 'styled-components';


const MessageCont =styled. div`
display:inline-flex;
background-color:${props=>props.bg};
flex-direction:column;
padding:5px;
border-radius:5px;
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
margin:5px;`


const Card =({text = "7% of greenhouse gases produced globally are due to preventable food waste",
subtext ="Sub text",
bgcolor ="#00C1CD",
width = 100,
height = 100,
opacity = 1}) =>{
    return <MessageCont bg = {bgcolor} width = {width} opacity = {opacity} height = {height}>
        <BoxText>{text}</BoxText>

    </MessageCont>
}

export default Card