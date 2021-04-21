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
max-width:650px;

.column{
  display:flex;
  flex-direction:column;
}

.circle{
display:flex;
justify-content:center;
align-items: center;
border-radius:50%;
margin:15px;
background-color:#FEF2CA;
}

.Ingredient{
  display:flex;
  font-family:Athiti;
  font-weight:bold;
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
object-fit:contain;
border-radius:20px;
box-shadow: 5px 5px 5px rgba(0,0,0,0.4);
`;

const IconImage = styled.img`
display:flex; 
width:100px;
height:100px;
`;


const Ingredient =({
veg = "pepper", 
src = "/bell-pepper.png",
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