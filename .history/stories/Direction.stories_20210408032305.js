import React from 'react';
import Button from '../comps/Buttons';
import Direction from '../comps/Directions';

export default{
    title:"Example/Button",
    component:<Direction />
}

export const DefaultButton = () => <Direction />
export const ButtonwithColorProp = () => (
<Button text = 
"Color me" 
bgcolor = "blue" />

)