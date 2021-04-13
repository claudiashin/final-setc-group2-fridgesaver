import React from 'react';
import styled from 'styled-components';


const ExpireCont =styled.div`
display:flex;
flex-direction:column;
align-items: center;
width:500px;
height:500px;
margin:10px;
background-color:#E09E9E;
width:${props=>props.width}px;
height:${props=>props.height}px;
`;

const BoxSubText =styled.h2`
display:flex;
justify-content:center;
align-self:center;
margin:20px;
font-size:15px;`

const BoxImg =  styled.div`
display:flex;
justify-content:center;
align-items:center;
width:400px;
height:100px;
background:no-repeat url("/peppers.png");
`;

const Vegetable = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100px;
height:100px;
`

const SubBox = styled.div`
display:flex;
background-color:white;
width:400px;
height:200px;
border-radius:40px;
`

const Preserve = styled.h3`
font-size:20px;

`


const Expire =({
veg = "pepper",    
subtext = "Wrap the peppers with a papertowel can help last longer ",
}) =>{
    return <ExpireCont>
      <BoxImg>
         <Vegetable>{veg}</Vegetable>
      </BoxImg> 
      <Preserve>Lasts two weeks </Preserve>   
      <SubBox>
        <BoxSubText>{subtext}</BoxSubText>
      </SubBox>
    </ExpireCont>
}

export default Expire 