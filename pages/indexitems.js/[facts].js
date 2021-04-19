import Head from 'next/head';
import Logo from '../comps/Logo';
import Developer from '../comps/Developer';
import Line from '../comps/Line';
import Startbutton from '../comps/Startbutton';
import Message from '../../comps/Message';
import Fridge from '../comps/Fridge';
import Factsbutton from '../../comps/Factsbutton';
import styled from 'styled-components';
import React, {useState} from 'react';
import {useRouter} from 'next/router';
import {factstexts} from '../../data/texts';

const HomeCont = styled.div`
// max-width: 450px;
// height: 812px;
background-color: #FFF8F8;
overflow: scroll;

.navbar {
  width: 100$;
  height: 40px;
  background-color: #9FCDA4;
}

.logo {
  margin-top: 30px;
}

.cta-fridge {
  margin: 30px;
}

.message {
    // background-color: #FFF3F3;
    // height: 420px;
    border-radius: 20px;
    margin: 60px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

const factstexts =  {
  didyou:{
    first:"About 63% of the food that is thrown away could be eaten or used in some sort of way",
    second:"7% of greenhouse gases produced globally are due to preventable food waste"
  },
  startby:{
    first:"Finding tips on how to maximize the longevity of vegetables",
    second:"Using the foods you already have"
  }
}

export default function Home() {
  const [first, setFirst] = useState("About 63% of the food that is thrown away could be eaten or used in some sort of way") //default text
  const [second, setSecond] = useState("7% of greenhouse gases produced globally are due to preventable food waste") //default text

  const router= useRouter();
  console.log(router.query);
  const {facts} = router.query;

  var first = "default first text";
  var second = "default second text";

  if (facts === "didyou"){
      first = factstexts.didyou.first;
      second = factstexts.didyou.second;
  }

  if(facts === "startby"){
      first = factstext.startby.first;
      second = factstexts.startby.second;
  }

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
    <div className="navbar"></div>

    <div className="logo">
      <Logo />
    </div>

    <div className="cta-fridge">
      <Fridge image="fridge-open.png" />
    </div>

    <div className="message">
      <Factsbutton
        // onDidYouClick={HandleDidYou}
        // onStartByClick={HandleStartBy}
        onDidYouClick={()=>router.push("/indexitems/didyou")}
        onStartByClick={()=>router.push("/indexitems/startby")}
      />
      <Message
        firstfact={first}
        secondfact={second}
      />
    </div>

    <div className="start-button">
      <Startbutton text="Let's Get Started" />
    </div>

    <Line />

    <div className="footer">
      <Developer name1="Iori Takeshita" name2="Claudia Shin" name3="Maggie Su" name4="Leighai Nishibata" />
    </div>

  </HomeCont>
}

