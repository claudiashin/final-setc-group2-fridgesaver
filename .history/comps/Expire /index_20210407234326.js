import React from 'react';
import styled from 'styled-components';


const ExpireCont =styled.div`
display:flex;
flex-direction:column;
align-items: center;
max-width:2000px;
position:relative;
background:no-repeat url("/peppers.png");
width:${props=>props.width}px;
height:${props=>props.height}px;
`;

const BoxSubText =styled.h2`
display:flex;
justify-content:center;
align-self:center;
margin:30px;
font-size:20px;`

const SubBox = styled.div`
display:flex;
background-color:"#E09E9E";
width:100px;
height:100px;`



const Expire =({text = "7% of greenhouse gases produced globally are due to preventable food waste",
bgcolor ="#E09E9E",
width = 200,
height = 100,
subtext = "Lasts two weeks",
src = "/peppers.png"}) =>{
    return <ExpireCont bg = {bgcolor} width = {width} height = {height}>
     <BoxSubText>{subtext}</BoxSubText>
    
    
    </ExpireCont>
}

export default Expire 