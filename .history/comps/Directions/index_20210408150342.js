import React from 'react';
import styled from 'styled-components';


const DirectionCont =styled.div`
display:flex;
flex-direction:column;
align-items: center;
width:500px;
height:500px;
margin:10px;
position:relative;
background-color:${props=>props.bg};
width:${props=>props.width}px;
height:${props=>props.height}px;
`;

const BoxTitle =styled.h3`
display:flex;
justify-content:center;
align-self:flex-start;
margin:20px;
font-size:15px;
font-family: 'Permanent Marker'`


const BoxSubText =styled.h2`
display:flex;
justify-content:center;
align-self:center;
margin:20px;
font-size:15px;
font-family: 'Athiti';`

// const SubBox = styled.div`
// display:flex;
// background-color:"#E09E9E";
// width:100px;
// height:100px;`


const Direction =({
bgcolor ="#E09E9E",
width = 500,
height = 500,
subtext = "1. Heat the olive oil in a large pot over medium-high heat. Add the onion and cook until translucent, about 4 minutes. Add the garlic and cook 30 seconds. Add the celery and carrot and cook until they begin to soften, about 5 minutes. Stir in the green beans, dried oregano and basil, 3/4 teaspoon salt, and pepper to taste; cook 3 more minutes. "}) =>{
    return <DirectionCont bg = {bgcolor} width = {width} height = {height}>
     <BoxTitle>Direction</BoxTitle>
     <BoxSubText>{subtext}</BoxSubText>
     <BoxSubText>{subtext}</BoxSubText>
    </DirectionCont>
}

export default Direction 