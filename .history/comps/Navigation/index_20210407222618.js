import React from 'react';
import styled from 'styled-components';


const CardCont =styled. div`
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
const CardSub =styled.h3`
opacity:0.8;
margin:5px;`

const CardBigText =styled.h2`
margin:5px;`


const Card =({bigtext = "Big Card text",
subtext ="Sub text",
bgcolor ="#00C1CD",
left = 10,
width = 700,
height = 40,
opacity = 1}) =>{
    return <CardCont bg = {bgcolor} left = {left} width = {width} opacity = {opacity} height = {height}>
        <CardSub>{subtext}</CardSub>
        <CardBigText>{bigtext}</CardBigText>

    </CardCont>
}

export default Card