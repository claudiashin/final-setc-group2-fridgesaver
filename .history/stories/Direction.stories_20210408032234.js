import React from 'react';
import Button from '../comps/Buttons';

export default{
    title:"Example/Button",
    component:<Direction />
}

export const DefaultButton = () => <Button />
export const ButtonwithTextProp = () => <Button text = "Press me" />
export const ButtonwithColorProp = () => (
<Button text = 
"Color me" 
bgcolor = "blue" />

)