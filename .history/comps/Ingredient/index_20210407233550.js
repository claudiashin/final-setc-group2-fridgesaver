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
justify-content:center;
align-item:centerl
font-size:10px;
margin:5px;`

const SubBox = styled.div`
display:flex;
background-color:"#E09E9E";
width:100px;
height:100px;`



const Ingredient =({text = "7% of greenhouse gases produced globally are due to preventable food waste",
bgcolor ="#E09E9E",
width = 200,
height = 100,
subtext = "Lasts two weeks",
src = "/peppers.png"}) =>{
    return <IngredientCont bg = {bgcolor} width = {width} height = {height}>
     <BoxSubText>{subtext}</BoxSubText>
    
    
    </IngredientCont>
}

export default Ingredient