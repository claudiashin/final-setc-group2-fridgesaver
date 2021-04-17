import React from 'react';
import Arrow from "../comps/Arrow"

export default {
    title:"Example/Arrow",
    component:<Arrow/>
}

export const ArrowDefault = () => <Arrow/>

export const RightArrow = () => (
    <Arrow
        image="rightarrow-01.svg"
        widhth="100"
    />
);