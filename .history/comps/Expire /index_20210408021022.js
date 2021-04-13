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
width:400px;
height:100px;
background:no-repeat url("/peppers.png");
`;

const Vegetable = styled.div`
width:100px;
height:100px;
`

const SubBox = styled.div`
display:flex;
background-color:white;
width:100px;
height:100px;`


const Expire =({
subtext = "Wrap the peppers with a papertowel can help last longer ",
}) =>{
    return <ExpireCont>
        <BoxImg>
         <Vegetable></Vegetable>
         </BoxImg> 
     <SubBox>hihihi</SubBox>   
     <BoxSubText>{subtext}</BoxSubText>
     <SubBox>hihihi</SubBox>
    </ExpireCont>
}

export default Expire 