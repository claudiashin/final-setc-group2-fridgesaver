import React from 'react';
import styled from 'styled-components';

const ArrowContainer = styled.div`;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ArrowImage = styled.img`
    width: ${props=>props.bordercolor}px;
    height: 120px;
    object-fit: contain;
`;

//props
const Arrow = ({
    image="rightarrow-01.svg",
    width={width}

}) => {
    return <ArrowContainer>
        <ArrowImage src={image} width={width}/>
    </ArrowContainer>
}

export default Arrow;