import React from 'react';
import styled from 'styled-components';

const HeartCont = styled.div`
    width: 30px;
    hieght: 30px;
`;

const HeartIcon = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fit;
`;


//props
const Heart = ({
  icon="/heart empty.svg"
}) => {
   
    return <HeartCont>
        <HeartIcon src={icon}/>
    </HeartCont>

}

export default Heart;