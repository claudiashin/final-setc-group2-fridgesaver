import React from 'react';
import styled from 'styled-components';


const IngredientCont =styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
width:100%;
margin-bottom:40px;
border-radius:15px;
max-width:500px;

.column{
  display:flex;
  flex-direction:column;
}

.circle{
display:flex;
justify-content:center;
align-items: center;
margin:15px;
background-color:#FEF2CA;
width: 100px;
height: 70px;
border-radius: 50%;
}


.Ingredient{
  display:flex;
  font-family:Athiti;
  font-weight:bold;
  font-size: 20px;
  margin:2px;
}
.description{
  display:flex;
  justify-content:center;
  align-items: center; 
  font-family:Athiti;
  margin:3px;
  flex-wrap:wrap;
}
`;

const Box = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
width:80%;
// object-fit:contain;
border-radius:20px;
// box-shadow: 5px 5px 8px rgba(219, 211, 185, 0.5);
// background-color: rgba(255, 223, 118, 0.55);
// border: 1px solid black;
`;

const IconImage = styled.img`
// display:flex; 
width: 40px;
height: 40px;
object-fit: fit;
`;


const Ingredient =({
veg = "pepper", 
src = "/bell-pepper.svg",
bgcolor = "Blue",
subtext = "Wrap the peppers with a papertowel can help last longer ",
// preserve = "Lasts two weeks",
onClick=()=>{}}) =>{
    return (
    <IngredientCont>
      <Box onClick = {onClick}>
          <div className = "circle">
            <IconImage src ={src} />
          </div>
          <div className = "column">
            <div className = "Ingredient">{veg}</div>
            <div className = "description">{subtext}</div>
          </div>
      </Box> 



    </IngredientCont>
    )
}

export default Ingredient;