import React from 'react';
import styled from 'styled-components';

const ButtonInput = styled.button`
    background-color: #FFEBEB;
    width: 80px;
    height: 80px;
    border: none;
    border-radius: 100%;
    box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family:'Athiti', sans-serif;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    word-wrap: break-word;
`;

const CircleButton = ({
    text="Text"
}) => {
    return <ButtonInput>
        {text}
    </ButtonInput>

}

export default CircleButton;