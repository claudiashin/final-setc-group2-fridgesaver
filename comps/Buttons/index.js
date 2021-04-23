import React from 'react';
import styled from 'styled-components';
import {useRouter} from "next/router"

const ButtonCont = styled.span`
    margin: 5px;
`;

const ButtonInput = styled.button`
background-color: ${props=>props.bgcolor};
width: 240px;
padding: 25px;
border-radius: 5px;
margin-bottom:10px;
border: none;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Athiti', sans-serif;
font-weight: bold;
font-size: 18px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Button = ({text = "Topic1",
bgcolor = '#FEF2CA',
routeTo = "/",
width = "250",
onClick=()=>{}}) => {

const rounter  = useRouter()
// ()=> rounter.push(routeTo)
    return (
        <ButtonCont onClick = {onClick}>
            <ButtonInput bgcolor ={bgcolor} width = {width}>
             {text}
            </ButtonInput>
         </ButtonCont>
     )
}

export default Button;