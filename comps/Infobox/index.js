import React from 'react';
import styled from 'styled-components';

const InfoCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    width: 80px;
    height: 80px;
    background-color: #FFECEC;
`;

const Infotext = styled.p`
    font-family: 'Athiti', sans-serif;  
    text-align: center;
    line-height: 20px;
`;

const InfoBox = ({
    text:"info",
}) => {
    
    return <InfoCont>
        <Infotext>
            {text}
        </Infotext>
    </InfoCont>
}

export default InfoBox;