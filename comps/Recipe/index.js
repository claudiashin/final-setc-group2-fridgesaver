import React from 'react';
import styled from 'styled-components';

// Recipes Component

const RecipeCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    
    @media only screen and (max-width: 400px){
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
`;
const ImageDiv = styled.div`
    width: 150px;
    height: 150px;
    margin-right: 5px;
`;


const RecipeImage = styled.img`
    width: 100%;
    height: 100%; 
    object-fit: cover;

`;

const IngredientsCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 220px;
    height: 200px; 
    margin: 15px 0px 15px 10px;
`;

const RecipeTitle = styled.h2`
    font-family: 'Permanent Marker', cursive;
    line-height: 1.2em;
    margin: 0px;
`;

const IngredientsList = styled.ul`
    font-family: 'Athiti', sans-serif;
    list-style-type: none;
    line-height: 1.3em;
    text-align: left;
    padding: 0px;
    margin-top: 10px;
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
        <ImageDiv>
        <RecipeImage src={image}/>
        </ImageDiv>
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