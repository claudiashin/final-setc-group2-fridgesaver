import React from 'react';
import Ingredient from '../comps/Ingredient';

export default{
    title:"Example/Ingredient",
    component:<Ingredient />
}

export const MyIngredient = () => <Ingredient />
export const EggplantIngredient = () => <Ingredient ulr = "/eggplants.jpg" />