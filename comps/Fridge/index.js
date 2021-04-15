import React from 'react';
import styled from 'styled-components';

const FridgeContainer = styled.div`;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FridgeImage = styled.img`
    width: 120px;
    height: 120px;
    object-fit: contain;
`;

//props
const Fridge = ({
    image="fridge.png",

}) => {
    return <FridgeContainer>
        <FridgeImage src={image}/>
    </FridgeContainer>
}

export default Fridge;