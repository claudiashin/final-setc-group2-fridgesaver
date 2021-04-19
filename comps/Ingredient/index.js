import React from 'react';
import styled from 'styled-components';



const IngredientCont =styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
width:160px;
height:250px;
margin:10px;
border-radius:15px;
border : solid gray 1px;
// background-color:lightblue;
width:${props=>props.width}px;
height:${props=>props.height}px;
`;

const BoxSubText =styled.h2`
display:flex;
justify-content:center;
align-self:center;
margin:10px;
font-size:8px;
text-align: center;
`;

const BoxImg =  styled.div`
display:flex;
justify-content:center;
align-items:center;
width:150px;
height:200px;
background:no-repeat url(${props=>props.url});
object-fit:contain;
border-radius:10px;
box-shadow: 5px 5px 5px rgba(0,0,0,0.4);
`;

const Vegetable = styled.div`
display:flex;
align-items:center;
justify-content:center;
font-size:30px;
font-family: 'Athiti';
font-weight:bold;
`;

const SubBox = styled.div`
display:flex;
background-color:white;
width:130px;
height:80px;
border-radius:20px;
margin-bottom:30px;
`;

const Preserve = styled.h3`
text-align: center;
font-size:20px;
font-family: 'Athiti';
`;


const Ingredient =({
veg = "pepper", 
url = "/peppers.png",
subtext = "Wrap the peppers with a papertowel can help last longer ",
preserve = "Lasts two weeks",
onClick=()=>{}}) =>{
    return (
    
    <IngredientCont>
      <BoxImg url = {url} onClick = {onClick}>
         <Vegetable>{veg}</Vegetable>
      </BoxImg> 
    <Preserve>{preserve}</Preserve>   
      <SubBox>
        <BoxSubText>{subtext}</BoxSubText>
      </SubBox>
    </IngredientCont>
    )
}

export default Ingredient;