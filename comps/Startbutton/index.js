import React from 'react';
import styled, {keyframes} from 'styled-components';
import {useRouter} from 'next/router';

const AnimateStartButton = keyframes`
    0% {
        transform: scale(0.8);
    }
    100% {
        transform: scale(1);
    }
`;

const ButtonInput = styled.button`
    background-color: #B4E2B9;
    color: #000000;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.20);
    width: ${props=>props.width};
    height: 50px;
    font-family: 'Athiti', sans-serif;
    font-weight: bold;
    font-size: 1.3em;
    text-align: center;
    visibility: ${props=>props.visibility};
    animation: ${AnimateStartButton} 1.1s ease infinite;

`;

//props
const StartButton = ({
    text="Test Button",
    width="220px",
    visibility="visible",
    routeTo="/",

    onClick=()=>{},

}) => {
    
    const router = useRouter();
    return <ButtonInput width={width} visibility={visibility} onClick={()=>router.push(routeTo)}>
        {text}
    </ButtonInput>
}

export default StartButton;