import React from 'react';
import styled from 'styled-components';


const IngredientCont =styled. div`
display:flex;
flex-direction:column
background-color:${props=>props.bg};
align-items: center;
max-width:2000px;
&>*{
    color:#fff
}
position:relative;
width:${props=>props.width}px;
height:${props=>props.height}px;
opacity:${props=>props.opacity};
`;

const BoxImg =styled.img`
display:flex;
width:100px;
flex-wrap:wrap;
margin:5px;
`

// const ButtonImg =styled.img`
// width:5px,
// height:auto,
// object-fit:contain`

const BoxText =styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
font-size:10px;
margin:5px;`


const Ingredient =({text = "7% of greenhouse gases produced globally are due to preventable food waste",
bgcolor ="#E09E9E",
width = 160,
height = 160,
subtext = "Lasts two weeks",
src = "/peppers.png"}) =>{
    return <IngredientCont bg = {bgcolor} width = {width} height = {height}>
     <BoxImg src = "/peppers.png"></BoxImg>
<BoxText>{subtext}</BoxText>
    
    
    </IngredientCont>
}

export default Ingredient