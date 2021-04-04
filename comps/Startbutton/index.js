import React from 'react';
import styled from 'styled-components';

const ButtonInput = styled.button`
    background-color: #B4E2B9;
    color: #000000;
    border:${props=>props.bordercolor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: ${props=>props.width};
    height: 40px;
    font-family: 'Athiti', sans-serif;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
`;

//props
const StartButton = ({
    text="Test Button",
    brdrcolor="2px solid #F7FFC5",
    width="200px"
}) => {

    return <ButtonInput bordercolor={brdrcolor} width={width}>
        {text}
    </ButtonInput>
}

export default StartButton;