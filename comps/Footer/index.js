import React from 'react';
import styled from 'styled-components';
import {ImHome} from "react-icons/im";

const FooterCont  = styled.div`
display:flex;
flex-direction:row;
width: 100%;
height: 60px;
background-color: #9FCDA4;
`

const Iconbox = styled.div`
display:flex;
width: 30%;
height: 60px;
border-radius:20px;
`



const  Footer = () => {
    return( 
    
      <FooterCont>

        <Iconbox>
            <div><ImHome/></div>
        </Iconbox>    


        </FooterCont>

    )
}

export default Footer;
