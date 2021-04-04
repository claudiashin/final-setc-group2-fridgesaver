import React from 'react'
import styled from 'styled-components';

const InfoContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;

const InfoTitle = styled.h3`
    color:#DB5959;
    font-size:24px;
    text-align:center;
    font-family: 'Permanent Marker', cursive;
`;
    
    const InfoDescription = styled.p`
    color:#DB5959;
    font-size:16px;
    text-align:center;
    font-family: 'Athiti', sans-serif;
`;

const Information = () => {
    
    return <InfoContainer>
        <InfoTitle>WHAT THIS APP DOES</InfoTitle>
        <InfoDescription>This mobile app ...</InfoDescription>
    </InfoContainer>
}

export default Information;