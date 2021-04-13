import React from 'react';
import styled from 'styled-components';


const IngredientCont =styled.div`
display:flex;
flex-direction:column;
align-items: center;
width:500px;
height:500px;
margin:10px;
background-color:lightblue;
width:${props=>props.width}px;
height:${props=>props.height}px;
`;

const BoxSubText =styled.h2`
display:flex;
justify-content:center;
align-self:center;
margin:20px;
font-size:20px;
`;

const BoxImg =  styled.div`
display:flex;
justify-content:center;
align-items:center;
width:400px;
height:100px;
background:no-repeat ${props=>props.bg};
`;

const Vegetable = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100px;
height:100px;
font-size:30px;
font-family: 'Athiti';
font-weight:bold;
`;

const SubBox = styled.div`
display:flex;
background-color:white;
width:400px;
height:200px;
border-radius:40px;
`;

const Preserve = styled.h3`
font-size:30px;
font-family: 'Athiti';
`;


const Ingredient =({
veg = "pepper", 
bg = ("/peppers.png"),
subtext = "Wrap the peppers with a papertowel can help last longer ",
}) =>{
    return <IngredientCont>
      <BoxImg bg = {bg}>
         <Vegetable>{veg}</Vegetable>
      </BoxImg> 
      <Preserve>Lasts two weeks </Preserve>   
      <SubBox>
        <BoxSubText>{subtext}</BoxSubText>
      </SubBox>
    </IngredientCont>
}

export default Ingredient;