import Head from 'next/head';
import Navbar from '../comps/Navigation';
import Developer from '../comps/Developer';
import Line from '../comps/Line';
import Startbutton from '../comps/Startbutton';
import Fridge from '../comps/Fridge';
import Facts from '../comps/Facts';
import Footer from '../comps/Footer';
import styled from 'styled-components';
import React, { useState } from 'react';
import { factstexts } from '../data/indexfacts';
import { Router } from 'next/router';

const HomeCont = styled.div`
height: 812px;
background-color: #FFF8F8;
overflow: scroll;

.cta-fridge {
  margin: 90px;
}

.message {
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

.developer {
  margin: 35px;
}
`;

export default function Home() {
  const [fridge, setFridge] = useState("fridge.png")
  const [heading, setHeading] = useState("Did you know that...") //default text
  const [first, setFirst] = useState("About 63% of the food that is thrown away could be eaten or used in some sort of way") //default text
  const [second, setSecond] = useState("7% of greenhouse gases produced globally are due to preventable food waste") //default text

  const HandleLeftClick = () => {
    setFridge(factstexts.fridge.fridgeclose)
    setHeading(factstexts.heading.first);
    setFirst(factstexts.didyou.first);
    setSecond(factstexts.didyou.second);
  }

  const HandleRightClick = () => {
    setFridge(factstexts.fridge.fridgeopen)
    setHeading(factstexts.heading.second);
    setFirst(factstexts.startby.first);
    setSecond(factstexts.startby.second);
  }

  return <HomeCont>
    <Navbar routeTo="/"/>

    <div className="cta-fridge">
      <Fridge image={fridge} />
    </div>

    <div className="message">
      <Facts
        onLeftArrowClick={HandleLeftClick}
        onRightArrowClick={HandleRightClick}

        image={fridge}
        heading={heading}
        fact1={first}
        fact2={second}
      />
    </div>


    <div className="start-button">
      <Startbutton text="Let's Get Started" routeTo="tutorial" />
    </div>

    <Line />

    <div className="developer">
      <Developer name1="Iori Takeshita" content1="" name2="Claudia Shin" content2="" name3="Maggie Su" content3="" name4="Leighai Nishibata" content4="" />
    </div>

    <Footer />

  </HomeCont>
}


