import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';


const FooterCont  = styled.div`
display:flex;
flex-direction:row;
width:100%;
padding-top: 40px;
position: fixed;
bottom: 0;
margin:0px;
 
.IconCont{
       display:flex;
       align-items:center;
       justify-content:center;
       width:80px;
       height:80%;  
       margin:10px;
}   


`

const Iconbox = styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
 width: 100%;
 height: 50%;
 background-color: #9FCDA4;   
`

const IconImage = styled.img`
width: 40%;
height: 100%;



`
const  Footer = ({
    
}) => {
    return( 
    
    <FooterCont>
        <Iconbox>
              <div className = "IconCont">
                <Link href = "/">
                    <IconImage src = "/home.png"/>
                </Link>
              </div> 

              <div className = "IconCont">
                <Link href = "/saved">  
                  <IconImage src ="/share.png" />
                </Link>    
              </div>

              <div className = "IconCont">
                <Link href = "/saved">  
                    <IconImage src ="/bookmarks.png"/>
                </Link>
              </div>

          <div className = "IconCont">
            <Link href = "/about">  
              <IconImage src ="/planet.png"/>
            </Link>  
          </div>
        </Iconbox> 
   
    </FooterCont>

    )
}

export default Footer;
