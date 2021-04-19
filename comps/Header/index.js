import React from 'react';
import styled from 'styled-components';

// Header Component

const HeaderCont = styled.div`
    display: flex;
    background-color: ${props=>props.backgroundTexture};
    flex-direction: column;
    align-items: center;
`;

const RecipeIcon = styled.img`
    width: 50px;
    height: 50px; 
    margin: 50px;
`;

const HeaderText = styled.h2`
    font-family: 'Permanent Marker', cursive;
    text-align: center;
    width: 300px;
    height: 60px; 
`;

const HeaderSubText = styled.p`
    font-family: 'Athiti';
    text-align: center;
    margin: 0px;
`;

const Header = ({
    icon="/plate.png",
    text="Choose What Type of Food You Want",
    text2="",
    bgcolor= ""
}) => {

    return <HeaderCont backgroundTexture={bgcolor}>
        <RecipeIcon src={icon}/>
        <HeaderText>
            {text} 
        </HeaderText>
        <HeaderSubText>
            {text2}
        </HeaderSubText>
    </HeaderCont>
}

export default Header;