import Head from 'next/head';
import styled from 'styled-components';
import Navbar from '../../comps/Navigation'
import Header from '../../comps/Header';
import Button from '../../comps/Buttons';
import OptionButton from '../../comps/Optionbutton';
import Footer from '../../comps/Footer'
import React, {component, useState,useEffect} from 'react';
import {useRouter} from 'next/router';

import {optiontexts} from '../../data/options';


const HomeCont = styled.div`

    height: 812px;
    background-color: #FFF8F8;
    padding-bottom: 100px;

    .navbar {
      width: 100%;
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


var data = {
  select1:null,
  select2:null,
  select3:null,
  select4:null
}

export default function Home() {
    const router = useRouter();
    const {options} = router.query;
    const [chosen,setChosen] = useState(0);
    const[end,setEnd] = useState(false);

    var head = "Head text goes here"
    var txt1 = "rice";
    var img1 = "/rice.svg";
    var txt2 = "rice";
    var img2 = "/rice.svg";
    var click = "/about"
    var click1 = "/";
    var display = "visible";
    
    

//  var buttontext = {
//      option1:"",
//      option2:"",
//      option3:"",
//      option4:"",
//  }


    if(options === "option1"){
        head = optiontexts.option1.head;
        txt1 = optiontexts.option1.txt1;
        img1 = optiontexts.option1.img1;
        txt2 = optiontexts.option1.txt2;
        img2 = optiontexts.option1.img2;
        click = optiontexts.option1.click;
        click1 = optiontexts.option1.click1;
        display = optiontexts.option1.display;

    }
    if(options === "option2"){
        head = optiontexts.option2.head;
        txt1 = optiontexts.option2.txt1;
        img1 = optiontexts.option2.img1;
        txt2 = optiontexts.option2.txt2;
        img2 = optiontexts.option2.img2;
        click = optiontexts.option2.click;
        click1 = optiontexts.option2.click1;
        display = optiontexts.option2.display;
    }



  useEffect(()=>{
   
      if(options === "option1"){
        setChosen(1);
        // console.log(chosen)
     }
     if(options === "option2"){
        setChosen(2);
        // console.log(chosen)
    }
    // else{
    //     setChosen(0)
    // }

    },[router.query]);



  const HandleEndRice = () =>{
    // alert(fruits);
    if (options === "option1"){
      data.select1 = "rice" 
      console.log(data)
    }
    setEnd(true);
    sessionStorage.setItem("options",JSON.stringify(data));
    router.push("/options/option2")
    }

   const HandleEndNoodle = () =>{
    // alert(fruits);
    if (options === "option1"){
      data.select2 = "noodle";
    }
    sessionStorage.setItem("options",JSON.stringify(data));
    router.push("/options/option2")
   }


   const HandleEndSoup = () =>{
    if (options === "option2"){
       data.select3 = "soup";
       console.log(data)
       
    }
    sessionStorage.setItem("options",JSON.stringify(data));
    router.push("/foodoption")
   }

   const HandleEndDried = () =>{
    if (options === "option2"){
      data.select4 = "dried";
    }
    sessionStorage.setItem("options",JSON.stringify(data));
    router.push("/foodoption")
   }

  //    const HandleEnd = () =>{
  //    sessionStorage.setItem("options",JSON.stringify(data));
  //    router.push("/options/option2")
  //  }


    return <HomeCont>
      <div className="navbar">
          <Navbar 
            onClick={()=>router.push(click1)}
            visibility={display}
          />
        </div>
      <Header text={head}/>
      <div className="buttons">
        <div>
          {chosen === 1 && <OptionButton 
            // onClick= {()=>router.push(click)}
            onClick = {HandleEndRice}
            bgcolor= "#FEF2CA"
            img={img1}
            text={txt1}
        /> }

           {chosen === 2 && <OptionButton 
            // onClick= {()=>router.push(click)}
            onClick = {HandleEndSoup}
            bgcolor= "#FEF2CA"
            img={img1}
            text={txt1}
        />} 
         
           
        </div>
        <div>
            {chosen === 1 && <OptionButton 
                // onClick={()=>router.push(HandleEndNoodle)}
                onClick = {HandleEndNoodle}
                bgcolor="#FBD0A9"
                img={img2}
                text={txt2}
            />}

              {chosen === 2 && <OptionButton 
                // onClick={()=>router.push(click)}
                onClick = {HandleEndDried}
                bgcolor="#FBD0A9"
                img={img2}
                text={txt2}
            />}
        </div>
      </div>
       {/* <div>
            {end === true && <Button bgcolor = "blue" text = "End" onClick= {HandleEnd} />}
        </div>   */}
      <Footer />
    </HomeCont>
}