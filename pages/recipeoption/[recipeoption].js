import Head from 'next/head'
import styled from 'styled-components';
import Header from '../../comps/Header';
import Ingredient from '../../comps/Dish';
import Dish from '../../comps/Dish';
import Line from '../../comps/Line';
import {useRouter} from 'next/router';



//   const HomeBody = styled.body`
//   max-width:475px;
//   max-height:812px;
//   margin:0px;
//   overflow:scroll
// `;

  const HomeCont = styled.div`
  margin:0px;
  display:flex;
  height:812px;
  flex-direction:column;
  justify-contents:center;
  align-item:center;
  background-color :#FFF8F8;
  overflow:scroll;
  
  .navbar{
    width:100%;
    height:40px;
    background-color:#9FCDA4;
}
.line{
    dispay:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:1px;
    background-color:gray;
}

  `
 const DishCont  = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 margin:30px;
`;

const recipes = {
    Peppers:{
        dishname1:"Pepper Chinese Noodle",
        dishname2:"Pepper Meat Noodle",
        dishurl1:"/DN-Pepper.jpg",
        dishurl2:"/PepperPasta.jpeg ", 
        dishlink1:"/recipe",
        dishlink2:"/recipe"
    },
    Onions:{
        dishname1:"Onion Cream Pasta",
        dishname2:"Onion Chicken Noodle",
        dishurl1:"/DN-Onion.jpg",
        dishurl2:"/ChickenNoodle.jpeg",
        dishlink1:"/recipe",
        dishlink2:"/recipe" 
     },
    Eggplants:{
        dishname1:"Eggplants Noodle",
        dishname2:"Eggplants Meat Noodle",
        dishurl1:"/DN-Eggplant.jpg",
        dishurl2:"/DR-Eggplant.jpg" ,
        dishlink1:"/recipe",
        dishlink2:"/recipe",
    },
    Mushrooms:{
        dishname1:"Mushroom Noodle",
        dishname2:"Mushroom Cream Pasta",
        dishurl1:"/DN-Mushroom.jpg",
        dishurl2:"/MushroomCreamPasta.jpg" ,
        dishlink1:"/recipe",
        dishlink2:"/recipe"
    }  
}




export default function Home() {
  const router = useRouter();
  const {recipeoption} = router.query; 
  var name1 = "name";
  var name2 = "name";
  var url1 = "/";
  var url2 = "/";
  var click1 = "/recipe";
  var click2 = "/recipe";

  
  if(recipeoption === 'Peppers'){
    name1 = recipes.Peppers.dishname1; 
    name2 = recipes.Peppers.dishname2; 
    url1 = recipes.Peppers.dishurl1;
    url2 = recipes.Peppers.dishurl2;
    click1 = recipes.Peppers.dishlink1;
    click2 = recipes.Peppers.dishlink2;
    

    }

   if(recipeoption === 'Onions'){
        name1 = recipes.Onions.dishname1; 
        name2 = recipes.Onions.dishname2; 
        url1 = recipes.Onions.dishurl1;
        url2 = recipes.Onions.dishurl2;
        click1 = recipes.Onions.dishlink1;
        click2 = recipes.Onions.dishlink2;
        }

     if(recipeoption === 'Eggplants'){
        name1 = recipes.Eggplants.dishname1; 
        name2 = recipes.Eggplants.dishname2; 
        url1 = recipes.Eggplants.dishurl1;
        url2 = recipes.Eggplants.dishurl2;
        click1 = recipes.Eggplants.dishlink1;
        click2 = recipes.Eggplants.dishlink2;
        } 
        
      if(recipeoption === 'Mushrooms'){
            name1 = recipes.Mushrooms.dishname1; 
            name2 = recipes.Mushrooms.dishname2; 
            url1 = recipes.Mushrooms.dishurl1;
            url2 = recipes.Mushrooms.dishurl2;
            click1 = recipes.Mushrooms.dishlink1;
            click2 = recipes.Mushrooms.dishlink2;
            }   



  return <HomeCont>
        <div className = "navbar"></div> 
        <Header 
        icon="/recipe-book.png"
        text="Choose the recipe you want to try"
        />
         <DishCont> 
          <Dish dishname1= {name1} 
                dishname2= {name2}
                dishurl1 = {url1}
                dishurl2 = {url2}
                onClick1={()=>router.push(click1)}
                onClick2={()=>router.push(click2)}
          />
         </DishCont>   
          {/* <div className = "line"></div> */}
         
  </HomeCont>
}

