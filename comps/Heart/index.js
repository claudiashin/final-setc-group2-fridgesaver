import React from 'react';
import styled from 'styled-components';
import {FiHeart} from 'react-icons/fi';
import React, {useState} from 'react';

const HeartCont = styled.div`
    display: flex;
    flex-direction: column;
`;

const HeartIcon = styled.div`
    border-color: red;
    width: 25px;
    height: 25px;
`;

// const HeartCont = styled.div`
//     width: 30px;
//     height: 30px;
// `;

// const HeartIcon = styled.img`
//     width: 100%;
//     height: 100%;
//     object-fit: fit;
// `;

const Heart = ({

    //   icon="/heart empty.svg"
    onHeartClick=()=>{},

}) => {
    const [open, setOpen] = useState(false);
    
    var width = 0, height = 0; 
    if(open){
        width=35;
        height=35;
    }

    return <HeartCont>
        <HeartIcon onClick={()=>setOpen(!open)}>
            <FiHeart 
                text={<div><GiShinyApple />Apple</div>} 
                bgcolor="red"
                onClick={onHeartClick}
            />
        </HeartIcon>
    </HeartCont>
}

export default Heart;