import React from 'react';
import styled from 'styled-components';


const DirectionCont =styled.div`
display:flex;
flex-direction:column;
align-items: center;
max-width:2000px;
position:relative;
background-color:${props=>props.bg};
width:${props=>props.width}px;
height:${props=>props.height}px;
`;

const BoxTitle =styled.h3`
display:flex;
justify-content:center;
align-self:center;
margin:20px;
font-size:15px;`


const BoxSubText =styled.h2`
display:flex;
justify-content:center;
align-self:center;
margin:20px;
font-size:15px;`

const SubBox = styled.div`
display:flex;
background-color:"#E09E9E";
width:100px;
height:100px;`


const Direction =({
bgcolor ="#E09E9E",
width = 500,
height = 500,
subtext = "Wrap the peppers with a papertowel can help last longer ",
src = "/peppers.png"}) =>{
    return <DirectionCont bg = {bgcolor} width = {width} height = {height}>
     <BoxTitle></BoxTitle>
     <BoxSubText>{subtext}</BoxSubText>
    </DirectionCont>
}

export default Direction 