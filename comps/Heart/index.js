// import React from 'react';
import styled from 'styled-components';

const HeartCont = styled.div`
    width: 30px;
    height: 30px;
`;

const HeartIcon = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fit;
`;

const Heart = ({
    icon="/heart_outline.svg"

}) => {
    return <HeartCont>
        <HeartIcon src={icon}/>
    </HeartCont>
}

export default Heart;