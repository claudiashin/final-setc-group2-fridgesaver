import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
// import React, {useState} from 'react';

const ButtonCont = styled.span`
    margin: 5px;
`;

const ButtonInput = styled.button`
background-color: ${props=>props.background};
width: 240px;
padding: 25px;
border-radius: 5px;
border: none;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Athiti', sans-serif;
font-weight: bold;
font-size: 18px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ButtonImg = styled.img`
    width: 30px;
    hieght: 30px;
    object-fit: contain;
    margin-right: 20px;
`;
//props
const OptionButton = ({
    text="Rice",
    bgcolor="#FEF2CA",
    img='/rice.svg',
    routeTo="/",
    onClick=()=>{}

}) => {
    const router = useRouter();

    return <ButtonCont onClick={onClick}>
        <ButtonInput background={bgcolor}>
        <ButtonImg src={img}/>
            {text}
        </ButtonInput>
    </ButtonCont>
}

export default OptionButton;