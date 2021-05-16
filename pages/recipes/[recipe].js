import Head from 'next/head'
import styled from 'styled-components';
import Recipe from '../../comps/Recipe';
import Direction from '../../comps/Directions';
import CircleButton from '../../comps/Circlebutton';
import Infobox from '../../comps/Infobox';
import {useRouter} from 'next/router';
import Footer from '../../comps/Footer';
import React, {useState,useEffect} from 'react';
import Navbar from '../../comps/Navigation';
import {recipeCategories} from '../../data/recipetexts';
import StartButton from '../../comps/StartButton';
import PrepIngred from '../../comps/PrepIngred';

import {results_pepper} from '../../data/results_pepper';
import {results_onion} from '../../data/results_onion';
import {results_eggplant} from '../../data/results_eggplant';
import {results_carrot} from '../../data/results_carrot';
import {results_mushroom} from '../../data/results_mushroom';
import {results_tomato} from '../../data/results_tomato';

// next.js - make page where you can capture the parameter after the folder name

const recipe = {
  ...results_pepper,
  ...results_onion,
  ...results_eggplant,
  ...results_carrot,
  ...results_mushroom,
  ...results_tomato
}

const HomeCont = styled.div`
  display: flex;
  flex-direction: column;
  // height: 100vh;
  // height: 812px;
  align-items: center;
  background-color: #FFF8F8;
  overflow: scroll; 
  
    .navbar {
      width: 100%;
    }

    .directions {
      display: flex;
      width: 370px;
      padding-bottom: 15px;
      margin-bottom: 15px;
    }

    .bottom {
      display: flex;
      height: 180px;
      justify-content: center;
      align-items: flex-start;
      margin-top: 50px;
    }
`;


export default function Home() {
  const router = useRouter();
  const {recipe} = router.query;  //{recipe} = [recipe].js variable is what you type in the browswer eg. iteems2/big
  const [data,setData] = useState({
    select1:"",
    select2:"",
    select3:""      
  })






  var subtext1 = "Step 1: ";
  var subtext2 = "Step 2: ";
  var subtext3 = "Step 3: ";
  var subtext4 = "Step 4: ";
  var image = "/DN-Onion.jpg";
  var title = "Dry Onion Noodle";
  var listText1 = "Ingredient 1" ;
  var listText2 = "Ingredient 2" ;
  var listText3 = "Ingredient 3" ;
  var listText4 = "Ingredient 4" ;
  var listText5 = "Ingredient 5" ;
  var listText6 = "Ingredient 6" ;
  var prep1="prep1";
  var prep2="prep2";
  var prep3="prep3";
  var prep4="prep4";
  var ingred1="ingred1";
  var ingred2="ingred2";
  var ingred3="ingred3";
  var ingred4="ingred4";
  var ingred5="ingred5";
  var ingred6="ingred6";


  useEffect(()=>{

    if(process.browser){
      var data =sessionStorage.getItem("options");
      var obj =JSON.parse(data);
      setData(obj)
      var decision = obj.select3 + obj.select1 +obj.select2
      console.log(decision)
      
    }
    // if(!recipes){
    //   sessionStorage.setItem("options",JSON.stringify(data))
    // }

    },[router.query]);
  





  if(recipe === "PepperStirFryNoodles"){
    subtext1 = recipeCategories.PepperStirFryNoodles.subtext1;
    subtext2 = recipeCategories.PepperStirFryNoodles.subtext2;
    subtext3 = recipeCategories.PepperStirFryNoodles.subtext3;
    subtext4 = recipeCategories.PepperStirFryNoodles.subtext4;
    image = recipeCategories.PepperStirFryNoodles.image;
    text = recipeCategories.PepperStirFryNoodles.text;
    listText1 = recipeCategories.PepperStirFryNoodles.listText1;
    listText2 = recipeCategories.PepperStirFryNoodles.listText2;
    listText3 = recipeCategories.PepperStirFryNoodles.listText3;
    listText4 = recipeCategories.PepperStirFryNoodles.listText4;
    listText5 = recipeCategories.PepperStirFryNoodles.listText5;
    listText6 = recipeCategories.PepperStirFryNoodles.listText6;
  }

  if(recipe === "PepperPasta"){
    subtext1 = recipeCategories.PepperPasta.subtext1;
    subtext2 = recipeCategories.PepperPasta.subtext2;
    subtext3 = recipeCategories.PepperPasta.subtext3;
    subtext4 = recipeCategories.PepperPasta.subtext4;
    image = recipeCategories.PepperPasta.image;
    text = recipeCategories.PepperPasta.text;
    listText1 = recipeCategories.PepperPasta.listText1;
    listText2 = recipeCategories.PepperPasta.listText2;
    listText3 = recipeCategories.PepperPasta.listText3;
    listText4 = recipeCategories.PepperPasta.listText4;
    listText5 = recipeCategories.PepperPasta.listText5;
    listText6 = recipeCategories.PepperPasta.listText6;
  }

  if(recipe === "OnionParmesanPasta"){
    subtext1 = recipeCategories.OnionParmesanPasta.subtext1;
    subtext2 = recipeCategories.OnionParmesanPasta.subtext2;
    subtext3 = recipeCategories.OnionParmesanPasta.subtext3;
    subtext4 = recipeCategories.OnionParmesanPasta.subtext4;
    image = recipeCategories.OnionParmesanPasta.image;
    text = recipeCategories.OnionParmesanPasta.text;
    listText1 = recipeCategories.OnionParmesanPasta.listText1;
    listText2 = recipeCategories.OnionParmesanPasta.listText2;
    listText3 = recipeCategories.OnionParmesanPasta.listText3;
    listText4 = recipeCategories.OnionParmesanPasta.listText4;
    listText5 = recipeCategories.OnionParmesanPasta.listText5;
    listText6 = recipeCategories.OnionParmesanPasta.listText6;
  }

  if(recipe === "OnionChickenCasserole"){
    subtext1 = recipeCategories.OnionChickenCasserole.subtext1;
    subtext2 = recipeCategories.OnionChickenCasserole.subtext2;
    subtext3 = recipeCategories.OnionChickenCasserole.subtext3;
    subtext4 = recipeCategories.OnionChickenCasserole.subtext4;
    image = recipeCategories.OnionChickenCasserole.image;
    text = recipeCategories.OnionChickenCasserole.text;
    listText1 = recipeCategories.OnionChickenCasserole.listText1;
    listText2 = recipeCategories.OnionChickenCasserole.listText2;
    listText3 = recipeCategories.OnionChickenCasserole.listText3;
    listText4 = recipeCategories.OnionChickenCasserole.listText4;
    listText5 = recipeCategories.OnionChickenCasserole.listText5;
    listText6 = recipeCategories.OnionChickenCasserole.listText6;
  }


  if(recipe === "EggplantChilliNoodles"){
    subtext1 = recipeCategories.EggplantChilliNoodles.subtext1;
    subtext2 = recipeCategories.EggplantChilliNoodles.subtext2;
    subtext3 = recipeCategories.EggplantChilliNoodles.subtext3;
    subtext4 = recipeCategories.EggplantChilliNoodles.subtext4;
    image = recipeCategories.EggplantChilliNoodles.image;
    text = recipeCategories.EggplantChilliNoodles.text;
    listText1 = recipeCategories.EggplantChilliNoodles.listText1;
    listText2 = recipeCategories.EggplantChilliNoodles.listText2;
    listText3 = recipeCategories.EggplantChilliNoodles.listText3;
    listText4 = recipeCategories.EggplantChilliNoodles.listText4;
    listText5 = recipeCategories.EggplantChilliNoodles.listText5;
    listText6 = recipeCategories.EggplantChilliNoodles.listText6;
  }

  if(recipe === "EggplantBeefPasta"){
    subtext1 = recipeCategories.EggplantBeefPasta.subtext1;
    subtext2 = recipeCategories.EggplantBeefPasta.subtext2;
    subtext3 = recipeCategories.EggplantBeefPasta.subtext3;
    subtext4 = recipeCategories.EggplantBeefPasta.subtext4;
    image = recipeCategories.EggplantBeefPasta.image;
    text = recipeCategories.EggplantBeefPasta.text;
    listText1 = recipeCategories.EggplantBeefPasta.listText1;
    listText2 = recipeCategories.EggplantBeefPasta.listText2;
    listText3 = recipeCategories.EggplantBeefPasta.listText3;
    listText4 = recipeCategories.EggplantBeefPasta.listText4;
    listText5 = recipeCategories.EggplantBeefPasta.listText5;
    listText6 = recipeCategories.EggplantBeefPasta.listText6;
  }

  if(recipe === "MushroomStirFryNoodles"){
    subtext1 = recipeCategories.MushroomStirFryNoodles.subtext1;
    subtext2 = recipeCategories.MushroomStirFryNoodles.subtext2;
    subtext3 = recipeCategories.MushroomStirFryNoodles.subtext3;
    subtext4 = recipeCategories.MushroomStirFryNoodles.subtext4;
    image = recipeCategories.MushroomStirFryNoodles.image;
    text = recipeCategories.MushroomStirFryNoodles.text;
    listText1 = recipeCategories.MushroomStirFryNoodles.listText1;
    listText2 = recipeCategories.MushroomStirFryNoodles.listText2;
    listText3 = recipeCategories.MushroomStirFryNoodles.listText3;
    listText4 = recipeCategories.MushroomStirFryNoodles.listText4;
    listText5 = recipeCategories.MushroomStirFryNoodles.listText5;
    listText6 = recipeCategories.MushroomStirFryNoodles.listText6;
  }

  if(recipe === "MushroomCreamPasta"){
    subtext1 = recipeCategories.MushroomCreamPasta.subtext1;
    subtext2 = recipeCategories.MushroomCreamPasta.subtext2;
    subtext3 = recipeCategories.MushroomCreamPasta.subtext3;
    subtext4 = recipeCategories.MushroomCreamPasta.subtext4;
    image = recipeCategories.MushroomCreamPasta.image;
    text = recipeCategories.MushroomCreamPasta.text;
    listText1 = recipeCategories.MushroomCreamPasta.listText1;
    listText2 = recipeCategories.MushroomCreamPasta.listText2;
    listText3 = recipeCategories.MushroomCreamPasta.listText3;
    listText4 = recipeCategories.MushroomCreamPasta.listText4;
    listText5 = recipeCategories.MushroomCreamPasta.listText5;
    listText6 = recipeCategories.MushroomCreamPasta.listText6;
  }
   
  // const [sticky1,setSticky1] =  useState(false)
  // const [sticky2,setSticky2] =  useState(false)
  // const [sticky3,setSticky3] =  useState(false)

  // const  Handleclick1 = () =>{
  //   setSticky1(!sticky1)
  //   setSticky2(sticky2)
  //   setSticky3(sticky3)
  // }
  
  // const  Handleclick2 = () =>{
  //   setSticky2(!sticky2)
  //   setSticky1(sticky1)
  //   setSticky3(sticky3)
  // }
  
  // const  Handleclick3 = () =>{
  //   setSticky3(!sticky3)
  //   setSticky1(sticky1)
  //   setSticky2(sticky2)
  // }

  return <HomeCont>
    <Head>
      <title>Recipes</title>
    </Head>
    <div className="navbar">
      <Navbar 
        onClick={()=>router.push("/options/option2")}
      />
    </div>
    
    <Recipe
      image={image}
      text={title}
    />

    <PrepIngred
      prep1={prep1}
      prep2={prep2}
      prep3={prep3}
      prep4={prep4}
      ingred1={ingred1}
      ingred2={ingred2}
      ingred3={ingred3}
      ingred4={ingred4}
      ingred5={ingred5}
      ingred6={ingred6}
    />

    <div className="directions">
      <Direction
        subtext1={subtext1}
        subtext2={subtext2}
        subtext3={subtext3}
        subtext4={subtext4}
      />
    </div>

{/* 
    <div className = "row">
      <Infobox  width = {sticky1 ? 200 :0}  
                height = {sticky1 ? 200 :0}
                text = {sticky1 ? "Replace proteins with other proteins like tofu, fish, turkey, or replace dairy with soy.":"" }
                header = {sticky1 ? "Food Substitutes":"" }
                bkgrdColor = {"#FBD0A9"}
      /> 

      <Infobox  width = {sticky2 ? 200 :0}  
                height = {sticky2 ? 200 :0}
                text = {sticky2 ? "You just saved average of $15, alternatively you can save $100/per week.":"" }
                header = {sticky2 ? "Costs Saved":"" }
                bkgrdColor = {"#FEF2CA"}
      />   

      <Infobox  width = {sticky3 ? 200:0}  
                height = {sticky3 ? 200:0}
                text = {sticky3 ? "Before going grocery shopping, don't go with an empty stomach and make a list. ":"" }
                header = {sticky3 ? "Tips on Saving":"" }
                bkgrdColor = {"#FBD0A9"}
      />  
    </div> */}
    {/* <div className="bottom">
      <CircleButton text="Food Substitutes" width="87" height="85" bkgdColor="#FBD0A9" onCircleClick = {Handleclick1} />
      <CircleButton text="Costs Saved"  width="87" height="85" bkgdColor="#FEF2CA" onCircleClick = {Handleclick2} />
      <CircleButton text="Tips on Saving"  width="87" height="85" bkgdColor="#FBD0A9" onCircleClick = {Handleclick3} />
    </div> */}
    <div className="bottom">
      <StartButton text= "Pick Another Veggie" brdrcolor= "none"/>
    </div>
    <Footer/>
  </HomeCont>
}