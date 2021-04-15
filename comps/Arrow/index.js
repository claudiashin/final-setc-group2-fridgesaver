import React from 'react';
import styled from 'styled-components';

const ArrowContainer = styled.div`;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ArrowImage = styled.img`
    width: 120px;
    height: 120px;
    object-fit: contain;
`;

//props
const Arrow = ({
    image="rightarrow-01.svg",

}) => {
    return <ArrowContainer>
        <ArrowImage src={image}/>
    </ArrowContainer>
}

export default Arrow;