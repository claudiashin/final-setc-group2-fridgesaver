import React from 'react';
import styled from 'styled-components';

const FridgeContainer = styled.div`;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FridgeImage = styled.img`
    width: ${props=>props.width}px;
    height: 120px;
    object-fit: contain;
`;

//props
const Fridge = ({
    image="fridge.png",
    width="120"

}) => {
    return <FridgeContainer>
        <FridgeImage src={image} width={width}/>
    </FridgeContainer>
}

export default Fridge;