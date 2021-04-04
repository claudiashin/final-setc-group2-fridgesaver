import React from 'react'
import styled from 'styled-components';

const InfoContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;

const InfoTitle = styled.h3``;

const InfoDescription = styled.p``;

const Information = () => {
    return <InfoContainer>
        <InfoTitle>WHAT THIS APP DOES</InfoTitle>
        <InfoDescription>This mobile app ...</InfoDescription>
    </InfoContainer>
}

export default Information;