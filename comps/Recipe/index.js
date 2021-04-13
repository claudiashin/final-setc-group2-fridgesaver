import React from 'react';
import styled from 'styled-components';

// Recipes Component

const RecipeCont = styled.div`
    display: flex;
    justify-content: center;
`;
const RecipeImage = styled.img`
    width: 250px;
    height: 250px; 
    margin-right: 5px;
`;

const IngredientsCont = styled.div`
    flex-direction: column;
    align-items: left;
    width: 250px;
    height: 250px; 
    margin-left: 5px;
`;

const RecipeTitle = styled.h2`
    font-family: 'Permanent Marker', cursive;
    text-align: left;
    margin-top: 2px;
    margin-bottom: 0px;
`;

const IngredientsList = styled.ul`
    font-family: 'Athiti', sans-serif;
    list-style-type: none;
    padding: 5px;
    margin-top: 0px;
`;

const Recipe = ({
    image="/DN-Onion.jpg",
    text="Onion Dry Noodle",
    listText1="1 (8 ounce) package egg noodles",
    listText2="3 tablespoons butter",
    listText3="½ pound bacon",
    listText4="1 onion, chopped",
    listText5="1 small head cabbage, chopped",
    listText6="1 dash garlic salt"

}) => {
    return <RecipeCont>
        <RecipeImage src={image}/>
        <IngredientsCont>
            <RecipeTitle>{text}</RecipeTitle>
            <IngredientsList>
                <li>{listText1}</li>
                <li>{listText2}</li>
                <li>{listText3}</li>
                <li>{listText4}</li>
                <li>{listText5}</li>
                <li>{listText6}</li>  
            </IngredientsList>
        </IngredientsCont>
    </RecipeCont>
}

export default Recipe;