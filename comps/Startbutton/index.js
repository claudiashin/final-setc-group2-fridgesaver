import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const ButtonInput = styled.button`
    background-color: #B4E2B9;
    color: #000000;
    border:${props=>props.bordercolor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);
    width: ${props=>props.width};
    height: 40px;
    font-family: 'Athiti', sans-serif;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
`;

//props
const StartButton = ({
    text="Test Button",
    brdrcolor="2px solid #F7FFC5",
    width="200px",

    routeTo="/",
    onClick=()=>{
    }}) => {
    
    const router = useRouter();
    return <ButtonInput bordercolor={brdrcolor} width={width} onClick={()=>router.push(routeTo)}>

        {text}
    </ButtonInput>
}

export default StartButton;