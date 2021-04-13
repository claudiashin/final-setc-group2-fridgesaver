import React from 'react';
import styled from 'styled-components';
import {useRouter} from "next/router"

const ButtonCont = styled.span`
margin:5px;
`;

// const ButtonImg =styled.img`
// width:5px,
// height:auto,
// object-fit:contain`


const ButtonInput = styled.button`
      background-color:${props => props.bgcolor};
      color:#FFF;
      padding:10px;
      border-radius:5px;
      border:none;
`;

const Button = ({text = "Test Buttons",
bgcolor = '#AFCF6B',
routeTo = "/",
onClick=()=>{}}) => {

const rounter  = useRouter()
// ()=> rounter.push(routeTo)
    return (<ButtonCont onClick = {onClick}>
        {/* <button style= {{backgroundColor:"#AFCF6B",
        color:"#fff",}}>Test Button</button> */}
            <ButtonInput bgcolor ={bgcolor}>
             {text}
            </ButtonInput>
            {/* <ButtonImg src = "/vercel.svg"></ButtonImg> */}
         </ButtonCont>

     )
}

export default Button;