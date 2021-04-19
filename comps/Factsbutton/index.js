import styled from 'styled-components';
import React, { useState } from 'react';

const FactsButtonCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const HeadingCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFF3F3;
    width: 500px;
    height: 220px;
    border-radius: 30px 30px 0px 0px
`;

const HeadingText = styled.div`
    width: 135px;
    height: 135px;
    padding: 20px;
    margin: 10px;
    font-family: 'Athiti';
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    background-color: rgba(224, 158, 158, 0.2);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
`;

const Factsbutton = ({
    onDidYouClick=()=>{},
    onStartByClick=()=>{},
}) => {
    // const [open, setOpen] = useState(false);
    return <FactsButtonCont>
        <HeadingCont>
            <HeadingText onClick={onDidYouClick}>Did you know...</HeadingText>
            <HeadingText onClick={onStartByClick}>Start saving by...</HeadingText>
        </HeadingCont>
    </FactsButtonCont>
}

export default Factsbutton;