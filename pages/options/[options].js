import Head from 'next/head';
import styled from 'styled-components';
import Navbar from '../../comps/Navigation'
import Header from '../../comps/Header';
import OptionButton from '../../comps/Optionbutton';
import React, {component, useState} from 'react';
import {useRouter} from 'next/router';
import {optiontexts} from '../../data/options';


const HomeCont = styled.div`
    // max-width: 450px;
    height: 812px;
    background-color: #FFF8F8;

    .navbar {
      width: 100%;
      height: 40px;
      background-color: #9FCDA4;
    }
    .buttons {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin-top: 30px;

      & >* {
        padding: 20px;
        }
    }
`;

export default function Home() {
    const router = useRouter();
    const {options} = router.query;

    var head = "Head text goes here"
    var txt1 = "rice";
    var img1 = "/rice.svg";
    var txt2 = "rice";
    var img2 = "/rice.svg";
    var click = "/about"

    if(options === "option1"){
        head = optiontexts.option1.head;
        txt1 = optiontexts.option1.txt1;
        img1 = optiontexts.option1.img1;
        txt2 = optiontexts.option1.txt2;
        img2 = optiontexts.option1.img2;
        click = optiontexts.option1.click
    }
    if(options === "option2"){
        head = optiontexts.option2.head;
        txt1 = optiontexts.option2.txt1;
        img1 = optiontexts.option2.img1;
        txt2 = optiontexts.option2.txt2;
        img2 = optiontexts.option2.img2;
        click = optiontexts.option2.click
    }

    return <HomeCont>
      <div className="navbar"></div>
      <Header text={head}/>
      <div className="buttons">
        <div>
            <OptionButton 
                onClick={()=>router.push(click)}
                bgcolor="#FEF2CA"
                img={img1}
                text={txt1}
            />
        </div>
        <div>
            <OptionButton 
                onClick={()=>router.push(click)}
                bgcolor="#FBD0A9"
                img={img2}
                text={txt2}
            />
        </div>
      </div>
    </HomeCont>
}