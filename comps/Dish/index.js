import React from 'react';
import styled from 'styled-components';
import {useRouter} from "next/router"

const DishContainer = styled.div`;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    position: relative;
    max-width: 120px;
    
    .line{
        dispay:flex;
        align-items:center;
        justify-content:center;
        width:100%;
        height:1px;
        background-color:gray;
    }

`;

const DishName = styled.h3`
    font-family: 'Athiti', sans-serif;
    font-weight: bold;
    position: absolute;
    text-align: center;
    color: #000000;
`;



const DishImage = styled.img`
    width: 120px;
    height: 120px;
    opacity: 50%;
    margin-bottom:50px;
    border-radius: 5px;
`;



//props
const Dish = ({
    dishname1="Dish Name",
    dishname2="Dish Name",
    dishurl1 = "/onionnoodle.jpeg",
    dishurl2 = "/"  
    
}) => {
    return <DishContainer>
        <div className = "boxCon">
        <DishName>{dishname1}</DishName>
        <DishImage src={dishurl1} />
        </div>
        <div className = "boxCon">
        <DishName>{dishname2}</DishName>
        <DishImage src={dishurl2} />
        </div>
    </DishContainer>
}

export default Dish;