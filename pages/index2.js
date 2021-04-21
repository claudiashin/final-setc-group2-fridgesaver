import Head from 'next/head';
import Logo from '../comps/Logo';
import Developer from '../comps/Developer';
import Line from '../comps/Line';
import Startbutton from '../comps/Startbutton';
import Message from '../comps/Message';
import Fridge from '../comps/Fridge';
import Factsbutton from '../comps/Factsbutton';
import styled from 'styled-components';
import React, {useState} from 'react';
import {factstexts} from '../data/indextexts';

const HomeCont = styled.div`
height: 812px;
background-color: #FFF8F8;
overflow: scroll;

.logo {
  margin-top: 30px;
}

.cta-fridge {
  margin: 90px;
}

.message {
    // background-color: #FFF3F3;
    // height: 420px;
    border-radius: 20px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 26px;
}

.top {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

.bottom {
    display: flex;
    justify-content: center;
    align-items: center;
}

.start-button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px;
}

.footer {
  margin: 35px;
}
`;

// const factstexts =  {
//   didyou:{
//     first:"About 63% of the food that is thrown away could be eaten or used in some sort of way",
//     second:"7% of greenhouse gases produced globally are due to preventable food waste"
//   },
//   startby:{
//     first:"Finding tips on how to maximize the longevity of vegetables",
//     second:"Using the foods you already have"
//   }
// }

export default function Home() {
  const [first, setFirst] = useState("About 63% of the food that is thrown away could be eaten or used in some sort of way") //default text
  const [second, setSecond] = useState("7% of greenhouse gases produced globally are due to preventable food waste") //default text

  const HandleDidYou = () => {
    // setFirst("About 63% of the food that is thrown away could be eaten or used in some sort of way");
    // setSecond("7% of greenhouse gases produced globally are due to preventable food waste");
    setFirst(factstexts.didyou.first);
    setSecond(factstexts.didyou.second);
  }

  const HandleStartBy = () => {
    // setFirst("Finding tips on how to maximize the longevity of vegetables")
    // setSecond("Using the foods you already have")
    setFirst(factstexts.startby.first);
    setSecond(factstexts.startby.second);
  }

  return <HomeCont>
    {/* <div className="navbar"></div> */}

    <div className="logo">
      <Logo routeTo="/"/>
    </div>

    <div className="cta-fridge">
      <Fridge image="fridge.png" />
    </div>

    <div className="message">Did you know ...
      {/* <Factsbutton
        onDidYouClick={HandleDidYou}
        onStartByClick={HandleStartBy}
      /> */}
      <Message
        firstfact={first}
        secondfact={second}
      />
    </div>

    <div className="start-button">
      <Startbutton text="Let's Get Started" routeTo="tutorial"/>
    </div>

    <Line />

    <div className="footer">
      <Developer name1="Iori Takeshita" content1="" name2="Claudia Shin" content2="" name3="Maggie Su" content3="" name4="Leighai Nishibata" content4="" />
    </div>

  </HomeCont>
}


