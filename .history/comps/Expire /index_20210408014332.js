import React from 'react';
import styled from 'styled-components';


const ExpireCont =styled.div`
display:flex;
flex-direction:column;
align-items: center;
width:500px;
height:500px;
position:relative;
background-color:${props=>props.bg};
width:${props=>props.width}px;
height:${props=>props.height}px;
`;

const BoxSubText =styled.h2`
display:flex;
justify-content:center;
align-self:center;
margin:20px;
font-size:15px;`

const SubBox = styled.div`
display:flex;
background-color:"#FFF";
width:100px;
height:100px;`


const Expire =({
bgcolor ="#E09E9E",
width = 200,
height = 100,
subtext = "Wrap the peppers with a papertowel can help last longer ",
src = "/peppers.png"}) =>{
    return <ExpireCont bg = {bgcolor} width = {width} height = {height}>
     <BoxSubText>{subtext}</BoxSubText>
     <SubBox>hihihi</SubBox>
    </ExpireCont>
}

export default Expire 