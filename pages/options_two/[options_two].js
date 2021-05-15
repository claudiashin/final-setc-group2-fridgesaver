import styled from 'styled-components';
import Navbar from '../../comps/Navigation'
import Header from '../../comps/Header';
import Vegicon from '../../comps/Vegicon';
import Ingredient from '../../comps/Ingredient';
import StartButton from '../../comps/Startbutton';
import Footer from '../../comps/Footer';
import React, {component, useState,useEffect} from 'react';
import {Router, useRouter} from 'next/router';

import {vegitexts} from '../../data/vegies'


const HomeCont = styled.div `
    height: 812px;
    background-color: #FFF8F8;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 170px;
    padding-top: 60px;

    .nav {
        width: 100%;
    }

    .icons {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 10px;

    }
    .content {
        margin: 30px 0 30px 0;
    }
    
`;


var data = {
    select1:null,
    select2:null,
    select3:null,
  }


export default function Home() {
    const router = useRouter();
    const {options_two} = router.query;


    var image="/carrot.png";
    var title="Carrot";
    var info="an information goes here";
    var bg1="#FEF2CA;";
    var bg2="#FEF2CA;";
    var bg3="#FEF2CA;";
    var bg4="#FEF2CA;";
    var bg5="#FEF2CA;";
    var bg6="#FEF2CA;";
    var right="/options_two/peppers"
    var left="/options_two/pepper"

    //Pepper & peppers 
    if(options_two === "pepper") {
        image = vegitexts.pepper.image;
        title = vegitexts.pepper.title;
        bg1 = vegitexts.pepper.bg1;
        info = vegitexts.pepper.info;
        right = vegitexts.pepper.right;
    }
    if(options_two === "peppers") {
        image = vegitexts.peppers.image;
        title = vegitexts.peppers.title;
        bg1 = vegitexts.peppers.bg1;
        info = vegitexts.peppers.info;
        left = vegitexts.peppers.left;
    }
    //Onion & onions
    if(options_two === "onion") {
        image = vegitexts.onion.image;
        title = vegitexts.onion.title;
        bg2 = vegitexts.onion.bg2;
        info = vegitexts.onion.info;
        right = vegitexts.onion.right;
    }
    if(options_two === "onions") {
        image = vegitexts.onions.image;
        title = vegitexts.onions.title;
        bg2 = vegitexts.onions.bg2;
        info = vegitexts.onions.info;
        left = vegitexts.onions.left;
    }
    //Eggplant & eggplants
    if(options_two === "eggplant") {
        image = vegitexts.eggplant.image;
        title = vegitexts.eggplant.title;
        bg3 = vegitexts.eggplant.bg3;
        info = vegitexts.eggplant.info;
        right = vegitexts.eggplant.right;
    }
    if(options_two === "eggplants") {
        image = vegitexts.eggplants.image;
        title = vegitexts.eggplants.title;
        bg3 = vegitexts.eggplants.bg3;
        info = vegitexts.eggplants.info;
        left = vegitexts.eggplants.left;
    }
    //carrot & carrots
    if(options_two === "carrot") {
        image = vegitexts.carrot.image;
        title = vegitexts.carrot.title;
        bg4 = vegitexts.carrot.bg4;
        info = vegitexts.carrot.info;
        right = vegitexts.carrot.right;
    }
    if(options_two === "carrots") {
        image = vegitexts.carrots.image;
        title = vegitexts.carrots.title;
        bg4 = vegitexts.carrots.bg4;
        info = vegitexts.carrots.info;
        left = vegitexts.carrots.left;
    }
    //mushroom & mushrooms
    if(options_two === "mushroom") {
        image = vegitexts.mushroom.image;
        title = vegitexts.mushroom.title;
        bg5 = vegitexts.mushroom.bg5;
        info = vegitexts.mushroom.info;
        right = vegitexts.mushroom.right
    }
    if(options_two === "mushrooms") {
        image = vegitexts.mushrooms.image;
        title = vegitexts.mushrooms.title;
        bg5 = vegitexts.mushrooms.bg5;
        info = vegitexts.mushrooms.info;
        left = vegitexts.mushrooms.left;
    }
    //tomato & tomatoes
    if(options_two === "tomato") {
        image = vegitexts.tomato.image;
        title = vegitexts.tomato.title;
        bg6 = vegitexts.tomato.bg6;
        info = vegitexts.tomato.info;
        right = vegitexts.tomato.right;
    }
    if(options_two === "tomatoes") {
        image = vegitexts.tomatoes.image;
        title = vegitexts.tomatoes.title;
        bg6 = vegitexts.tomatoes.bg6;
        info = vegitexts.tomatoes.info;
        left = vegitexts.tomatoes.left;
    }


        const HandleEndPepper = () =>{
        data.select3 = "pepper" 
        sessionStorage.setItem("options",JSON.stringify(data));
        router.push("/options_two/pepper")
        }

        const HandleEndOnion = () =>{
            data.select3 = "onion" 
            sessionStorage.setItem("options",JSON.stringify(data));
            router.push("/options_two/onion")
            }
            
        const HandleEndEggPlant = () =>{
                data.select3 = "eggplant" 
                sessionStorage.setItem("options",JSON.stringify(data));
                router.push("/options_two/eggplant")
                } 
        
        const HandleEndCarrot = () =>{
                data.select3 = "carrot" 
                sessionStorage.setItem("options",JSON.stringify(data));
                router.push("/options_two/carrot")
                }
                
        const HandleEndMushroom = () =>{
                data.select3 = "mushroom" 
                sessionStorage.setItem("options",JSON.stringify(data));
                router.push("/options_two/mushroom")
                }     

        const HandleEndTomato = () =>{
                data.select3 = "tomato" 
                sessionStorage.setItem("options",JSON.stringify(data));
                router.push("/options_two/tomato")
                    }

    return <HomeCont>
        <div className="nav">
            <Navbar onClick={() => router.push("/tutorial")} />
        </div>
        <Header text="What do you have in your fridge? Choose one vegetable" />
        <div className="icons">
            <div className="row">
                <Vegicon src="/bell-pepper.svg" bgcolor={bg1} onClick={HandleEndPepper}/>
                <Vegicon src="/onion.png" bgcolor={bg2} onClick={HandleEndOnion}/>
                <Vegicon src="/eggplant.png" bgcolor={bg3} onClick={HandleEndEggPlant}/>
            </div>
            <div className="row">
                <Vegicon src="/carrot.png"  bgcolor={bg4} onClick={HandleEndCarrot}/>
                <Vegicon src="/mushroom.png" bgcolor={bg5} onClick={HandleEndMushroom}/>
                <Vegicon src="/tomato.png" bgcolor={bg6} onClick={HandleEndTomato}/>
            </div>
        </div>
        <div className="content">
            <Ingredient
                src={image}
                name={title}
                text={info}
                onLeftArrowClick={()=> router.push(left)}
                onRightArrowClick={()=> router.push(right)}
            >
            </Ingredient>
        </div>
        <StartButton text="Next" routeTo="/options/option1"/>

        <Footer />

    </HomeCont>
}