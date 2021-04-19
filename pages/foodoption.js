import Head from 'next/head'
import styled from 'styled-components';
import Header from '../comps/Header';
import Line from '../comps/Line';
import Ingredient from '../comps/Ingredient'
import {useRouter} from "next/router"

  const HomeCont = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  overflow:scroll;
  margin:0px;
  background-color :#FFF8F8;  

  .navbar{
      width:100%;
      height:40px;
      background-color:#9FCDA4;
  }
  `
 const Row  = styled.div`
 display:flex;
 flex-direction:row;
 justify-content:center;
 align-items:center;
 margin:25px 50px 25px;
`;


export default function Home() {
  const router = useRouter();
  return <HomeCont>
    <div className ="navbar"></div>  
        <Header 
        icon="/salad.png"
        text="Choose one of the vegetables below that is about to expire"
        />
      <Row>
      <Ingredient veg = "Peppers" onClick={() => router.push('./recipeoption/Peppers')}/>
      <Ingredient veg = "Onions" subtext ="Put it on mesh bag and hang on the wall could save more than a month " url = "/Onions.jpeg" onClick={() => router.push('./recipeoption/Onions')}/>
      </Row>
      <Row>
      <Ingredient veg = "Eggplants" url = "/eggplants.jpeg" preserve = "Lasts five days" subtext = "Place uncut and unwashed eggplant in plastic bag and store in the refrigerator" onClick={() => router.push('./recipeoption/Eggplants')}/> 
      <Ingredient veg = "Mushrooms" url = "/mushrooms.jpg"subtext = "Place mushrooms in a paper bag and put it in freezer for up to 10 days" onClick={() => router.push('./recipeoption/Mushrooms')}/>
      </Row>
  </HomeCont>
}
