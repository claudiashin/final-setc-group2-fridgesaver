import React from 'react';
import styled from 'styled-components';

// Recipes Component

const RecipeCont = styled.div`
    display: flex;
    // width: 450px;
    // height: 30%;
    justify-content: center;
    align-items: flex-end;
    margin-top: 50px;

    @media only screen and (max-width: 400px){
        display: flex;
        flex-direction: column;
    }
`;

const RecipeImage = styled.img`
    display: flex;
    width: 180px;
    height: 180px; 
    object-fit: contain;
    margin-right: 15px;
`;

const IngredientsCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-items: left;
    width: 220px;
    height: 180px; 
`;

const RecipeTitle = styled.h2`
    font-family: 'Permanent Marker', cursive;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const IngredientsList = styled.ul`
    font-family: 'Athiti', sans-serif;
    list-style-type: none;
    line-height: 1.3em;
    padding: 2px;
    margin-top: 0px;
`;

const Recipe = ({
    image="/DN-Onion.jpg",
    text="Onion Dry Noodle",
    listText1="1 pkg (8 ounce) egg noodles",
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