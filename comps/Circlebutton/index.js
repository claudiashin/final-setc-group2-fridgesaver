import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    @media only screen and (max-width: 400px)
    {
        display:flex;
        flex-direction: column;
    }
`;

const ButtonInput = styled.button`
    background-color: #FFEBEB;
    width: 80px;
    height: 80px;
    border: none;
    border-radius: 50%;
    box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family:'Athiti', sans-serif;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    margin: 40px;
`;

const CircleButton = ({
    text1="Costs Saved",
    text2="Food of Thought",
    text3="Tips on Saving",
}) => {
    return <ButtonContainer>
        <ButtonInput>{text1}</ButtonInput>
        <ButtonInput>{text2}</ButtonInput>
        <ButtonInput>{text3}</ButtonInput>
    </ButtonContainer>
        

}

export default CircleButton;