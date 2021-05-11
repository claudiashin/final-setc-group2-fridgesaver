import Head from 'next/head'
import styled from 'styled-components';
import Header from '../comps/Header';
import Line from '../comps/Line';
import Ingredient from '../comps/Ingredient'
import {useRouter} from "next/router";
import Footer from '../comps/Footer';
import Navbar from "../comps/Navigation";

  const HomeCont = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  overflow:scroll;
  margin:0px;
  background-color :#FFF8F8; 
  padding-bottom: 130px;
  
  .column{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
  `


export default function Home() {
  const router = useRouter();
  return <HomeCont>
        <Navbar  onClick={()=>router.push("/options/option2")}/>

        <div className = "column">
        <Header 
        icon="/salad.png"
        text="Choose one of the vegetables below that is about to expire"
        fontsize="22px"
        />

      <Ingredient veg = "Peppers" onClick={() => router.push('./recipeoption/Peppers')}/>
      <Ingredient veg = "Onions"  subtext ="Excellent sources of vitamins A and C, potassium, folic acid, and fiber" src = "/onion.png" onClick={() => router.push('./recipeoption/Onions')}/>
      <Ingredient veg = "Eggplants" src = "/eggplant.png" preserve = "Lasts five days" subtext = "Rich in the B vitamins: riboflavin, niacin, and pantothenic acid." onClick={() => router.push('./recipeoption/Eggplants')}/> 
      <Ingredient veg = "Mushrooms" src = "/mushroom.png"subtext = "Contains low in calories and sodium, and is a great source of dietary fiber." onClick={() => router.push('./recipeoption/Mushrooms')}/>
      <Ingredient veg = "Carrots" src = "/carrot.png"subtext = "Contains low in calories and sodium, and is a great source of dietary fiber." onClick={() => router.push('./recipeoption/Mushrooms')}/>
      <Ingredient veg = "Tomatoes" src = "/tomato.png"subtext = "Contains low in calories and sodium, and is a great source of dietary fiber." onClick={() => router.push('./recipeoption/Mushrooms')}/>
       </div>

      <Footer/>
  </HomeCont>
}
