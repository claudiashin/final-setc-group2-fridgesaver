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

const BoxImg =styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
font-size:10px;
margin:5px;
`

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
opacity = 0.4}) =>{
    return <IngredientCont bg = {bgcolor} width = {width} opacity = {opacity} height = {height}>
        <BoxText>{text}</BoxText>
        <BoxImg></BoxImg>
    </IngredientCont>
}

export default Ingredient