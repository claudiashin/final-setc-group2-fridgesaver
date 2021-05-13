import React from 'react';
import styled from 'styled-components';

const PrepIngredCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-bottom: 50px;
`;

const PrepTime = styled.div`
    width: 150px;
    height: 250px;
    border: 2.5px solid grey;
    border-radius: 20px;
    padding: 20px;
    margin: 10px;
    padding-top: 0px;
`;

const Ingredients = styled.div`
    width: 150px;
    height: 250px;
    border: 2.5px solid grey;
    border-radius: 20px;
    padding: 20px;
    margin: 10px;
    padding-top: 0px;
`;

const Heading = styled.h3`
    font-size: 18px;
    font-family: "Athiti";
    font-size: bold;
`;

const PrepIngredText = styled.p`
    font-size: 14px;
    font-family: "Athiti";
`;

const PrepIngred = ({
    prep1="Prep Time 10 minutes",
    prep2="Cook time 15 minutes",
    prep3="Total time 25 minutes",
    prep4="Calories: 345 kcals",

    ingred1="1 [8 ounce] package egg noodles",
    ingred2="3 tablespoons butter",
    ingred3="1/2 pound bacon",
    ingred4="1 onion, chopped",
    ingred5="1 small head cabbage, chopped",
    ingred6="1 dash garlic salt",
    ingred7="",
    ingred8="",
}) => {

    return <PrepIngredCont>
        <PrepTime>
            <Heading>Prep Time</Heading>
            <PrepIngredText>
                {prep1}<br></br>
                {prep2}<br></br>
                {prep3}<br></br>
                {prep4}<br></br>
            </PrepIngredText>
        </PrepTime>

        <Ingredients>
            <Heading>Ingredients</Heading>
            <PrepIngredText>
                {ingred1}<br></br>
                {ingred2}<br></br>
                {ingred3}<br></br>
                {ingred4}<br></br>
                {ingred5}<br></br>
                {ingred6}<br></br>
                {ingred7}<br></br>
                {ingred8}<br></br>
            </PrepIngredText>
        </Ingredients>
    </PrepIngredCont>
}

export default PrepIngred;