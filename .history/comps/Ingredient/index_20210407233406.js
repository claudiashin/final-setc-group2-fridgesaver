import React from 'react';
import styled from 'styled-components';


const IngredientCont =styled.div`
display:flex;
flex-direction:column;
align-items: center;
max-width:2000px;
position:relative;
background:no-repeat url("/peppers.png");
width:${props=>props.width}px;
height:${props=>props.height}px;
`;

const BoxSubText =styled.div`
display:flex;
font-size:10px;
margin:5px;`

const SubBox = styled.div`
display:flex;
background-color:"#E09E9E";
width:100px;
height:100px;`



const Ingredient =({text = "7% of greenhouse gases produced globally are due to preventable food waste",
bgcolor ="#E09E9E",
width = 900,
height = 900,
subtext = "Lasts two weeks",
src = "/peppers.png"}) =>{
    return <IngredientCont bg = {bgcolor} width = {width} height = {height}>
     <BoxSubText>{subtext}</BoxSubText>
     <SubBox>hhhhhh</SubBox>
    
    
    </IngredientCont>
}

export default Ingredient