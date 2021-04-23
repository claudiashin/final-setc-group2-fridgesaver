import styled from 'styled-components';
import React, { useState } from 'react';

const FactsCont = styled.div`
    background-color: #FFF3F3;
    width: 500px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    border-radius: 20px;
`;

const Heading = styled.p`
    font-family: 'Athiti';
    font-size: 24px;
    font-weight: bold;
`;

const FactCirclesCont = styled.div`
    font-family: 'Athiti';
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    flex-direction: row;
    // position: relative;
`;

const FactCircle1 = styled.div`
    background-color: #F3D4D4;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    padding: 25px;
    text-align: center;
    margin: 20px;
    display:flex;
    align-items: center;
    justify-content: center;
    // position: absolute;
    // top: 20px;
    // left: -80px;
`;

const FactCircle2 = styled.div`
    background-color: #F3D4D4;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    padding: 25px;
    text-align: center;
    margin: 20px;
    display:flex;
    align-items: center;
    justify-content: center;
`;
const ArrowImgCont = styled.div`
    display: flex;
    margin-bottom: 30px;
`;
const ArrowImg = styled.img`
    width: 50px;
`;

const Facts = ({
    heading = "Did you know that...",
    fact1 = "About 63% of the food that is throw away could be eaten or used in some sort of way",
    fact2 = "7% of greenhouse gases produced globally are due to preventable fodo waste",
    leftarrow = "arrow-left.png",
    rightarrow = "arrow-right.png",
    // onDidYouClick=()=>{},
    // onStartByClick=()=>{},
    onClick=()=>{},

    onLeftArrowClick=()=>{},
    onRightArrowClick=()=>{},
}) => {
    // const [open, setOpen] = useState(false);
    
    return <FactsCont>
        <Heading>{heading}</Heading>
        <FactCirclesCont>
            <FactCircle1>{fact1}</FactCircle1>
            <FactCircle2>{fact2}</FactCircle2>
        </FactCirclesCont>
        <ArrowImgCont onClick={onClick}>
            <ArrowImg src={leftarrow} onClick={onLeftArrowClick}/>
            <ArrowImg src={rightarrow} onClick={onRightArrowClick}/>
        </ArrowImgCont>
    </FactsCont>
}

export default Facts;