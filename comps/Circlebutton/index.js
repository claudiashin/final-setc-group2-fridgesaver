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
    font-weight :600;
    font-size: 16px;
    text-align: center;
    word-wrap: break-word;
`;

const CircleButton = () => {
    return <div>
        <ButtonInput>
            Costs Saved
        </ButtonInput>
    </div>
}

export default CircleButton;