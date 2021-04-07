import React from 'react';
import styled from 'styled-components';

const DishContainer = styled.div`;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    max-width: 120px;
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
    border-radius: 5px;
`;

//props
const Dish = ({
    dishname="Dish Name"
}) => {
    return <DishContainer>
        <DishName>{dishname}</DishName>
        <DishImage src="/onionnoodle.jpeg"/>
    </DishContainer>
}

export default Dish;