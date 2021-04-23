import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const InfoCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    width:${props=>props.width}px;
    height: ${props=>props.height}px;
    background-color: ${props=>props.bgcolor};
    font-family: 'Athiti', sans-serif;
    margin-right:2px;
    transition: 0.5s;
`;

const CrossDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-top: 5px;
    margin-right: 10px;
`;

const CrossImg = styled.img`
    width: 10px;
    height: 10px;
    object-fit: contain;
`;

const InfoHeader = styled.div`
    // display: flex;
    // justify-content: center;
`;

const Infotext = styled.div`
    text-align: center;
    line-height: 1.5em;
    font-size:10px;
    // width: 200px;
    // height: 150px;

`;

//props - items inside {}
const InfoBox = ({
    width="250",
    height="250",
    bkgrdColor = "#FFECEC",
    img="/close.png",
    header="Costs Saved",
    text="You just saved average of $15 for this meal, alternative save about $100 per weeks. Keep going and be proud of being part of saving environment!",
    routeTo="/",
}) => {

    return <InfoCont bgcolor={bkgrdColor} width={width} height={height} >
        <CrossDiv>
            <CrossImg src={img} />
        </CrossDiv>
        <InfoHeader>{header}</InfoHeader>
        <Infotext>{text}</Infotext>
    </InfoCont>
}

export default InfoBox;

