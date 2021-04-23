import Head from 'next/head'
import styled from 'styled-components';
import Recipe from '../../comps/Recipe';
import Direction from '../../comps/Directions';
import CircleButton from '../../comps/Circlebutton';
// import Infobox from '../../comps/Infobox';
import {useRouter} from 'next/router';
import Footer from '../../comps/Footer';
import React, {useState} from 'react';
import Navbar from '../../comps/Navigation';
// import {recipeCat} from '../../data2/recipetexts';

// next.js - make page where you can capture the parameter after the folder name

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
      // width: 50%;
      // height: 350px; 
      margin-bottom: 30px;
    }

    .bottom {
      display: flex;
      flex-wrap: wrap;
      width: 90%;
      max-width: 370px;
      height: 150px;
      justify-content: space-between;
      align-items: flex-start;
    }
`;

const recipeCategories = {

  PepperStirFryNoodles: {
    subtext1:"Step 1: Put the chicken in a bowl, add the cornflour and some seasoning, and toss.",
    subtext2:"Step 2: Heat 1 tbsp of the groundnut oil in a wok or large frying pan, add the chicken and cook until golden all over. ",
    subtext3:"Step 3: Scoop out of the pan with a slotted spoon and add the rest of the oil, spring onions, ginger and pepper. Stir-fry until the pepper has softened a little then add back the chicken along with the chilli flakes, soy sauce, honey and stock. ",
    subtext4:"Step 4: Bubble for 2 minutes then add the noodles and sesame oil, and toss. Sprinkle with a little more spring onions before serving.",
    image: "/DN-Pepper.jpg",
    text: "Pepper Stir Fry Noodles",
    listText1: "300g ready-cooked egg noodles ",
    listText2: "1 red pepper",
    listText3: "2 skinless chicken thigh fillets",
    listText4: "1 Tbsp. cornflour",
    listText5: "2 Tbsp. soy sauce",
    listText6: "50ml chicken stock",
  },

  PepperPasta: {
    subtext1:"Step 1: Put a small amount of oil in a large non stick skillet. Add beef cubes. Fry beef cubes and season in skillet on high stirring occsionally until nicely browned.",
    subtext2:"Step 2: In large pot with lid, put 4 to 5 cups water and 4 bouillion packets or cubes. Heat to dissolve bouillon. Add beef and all juices from skillet to boullion, and bring to boil, turn heat down to very low and cover tightly. Continue to cook until beef cubes are extrememly tender. Add red and green peppers to beef and boullion and continue cooking till peppers are just slightly softened.",
    subtext3:"Step 3: Now add onions and cook till peppers and onions are crisply tender in large shaker type bottle with lid, put 3/4 cup soy sauce, 3/4 cup ice cold water and cornstarch. Shake vigorously to dissolve corn starch",
    subtext4:"Step 4: Using a whisk gently whisk soy sauce into beef and peppers, keeping heat at medium temp. as you are whisking the gravy should thicken. Serve beef and peppers and onions over egg noodles or rice if you prefer. ",
    image: "/PepperPasta.jpeg",
    text: "Pepper Pasta",
    listText1: "1 bag egg noodles ",
    listText2: "3 large red bell peppers",
    listText3: "2 large vidalia onions",
    listText4: "3 pounds beef cubes",
    listText5: "5 packets of beef boullion",
    listText6: "3/4 Tbsp. soy sauce",
  },

  OnionParmesanPasta: {
    subtext1:"Step 1: Heat oil and butter in a large heavy pot or Dutch oven over medium until butter is melted. Add onions and garlic and cook, stirring occasionally, until very tender and deeply golden brown, about 30 minutes. ",
    subtext2:"Step 2: Add red pepper flakes (if using) and 1 1/2 tsp. salt. Remove pot from heat. ",
    subtext3:"Step 3: Add pasta and 1 cup pasta cooking liquid to onion mixture and stir to combine. Add a small handful of cheese and stir until melted. Repeat with remaining cheese, adding more pasta cooking liquid as needed to create a glossy sauce that coats the pasta. Stir in parsley (if using).",
    subtext4:"Step 4: Meanwhile, cook pasta in a large pot of boiling salted water, stirring occasionally, until al dente. Reserve 1 1/2 cups pasta cooking liquid. Top with Parmesan, parsley, and a few cranks of pepper.",
    image: "/DN-Onion.jpg",
    text: "Onion Parmesan Pasta",
    listText1: "12oz. linguine pasta",
    listText2: "3 large onions",
    listText3: "2 Tbsp. extra-virgin olive oil",
    listText4: "2 garlic cloves",
    listText5: "1 cup Parmesan",
    listText6: "Ground black pepper",
  },

  OnionChickenCasserole: {
    subtext1:"Step 1: Cook egg noodles according to package directions, drain.",
    subtext2:"Step 2: Preheat oven to 350ºF. Lightly spray a 9×13-inch pan with cooking spray.",
    subtext3:"Step 3: Combine chicken, soup, dip, and cheese. Stir in cooked egg noodles.",
    subtext4:"Step 4: Pour mixture into prepared pan. Top with crushed french fried onions. Bake for 25-30 minutes, until heated through.",
    image: "/onion-chicken-casserole.jpg",
    text: "Onion Chicken Casserole",
    listText1: "12oz Egg Noodles",
    listText2: "2 Large Onions",
    listText3: "1 cup cheddar cheese",
    listText4: "1 16oz container sour cream",
    listText5: "2 cans cream of chicken soup",
    listText6: "",
  },

  EggplantChilliNoodles: {
    subtext1:"Step 1: Slice the eggplants into batons, around 3 inches in length and 1 inch thick. In a pot, heat enough water to cook noodles. Once it boils, add in the noodles and cook until half-cooked and chewy. Remove from the water and set aside.", 
    subtext2:"Step 2: Heat a large pan over medium high. Add in the sesame oil. Once hot, add in the onion. Sauté over medium high heat for 2 minutes. Add in the garlic and sauté for a minute until aromatic. Add in the szechuan pepper (if using), black beans, chili bean paste, and bell pepper. Leave to cook for 2 minutes until bell pepper is tender.",
    subtext3:"Step 3: Add eggplant into the pan with the bell pepper mix. Leave eggplant to cook over medium high heat until tender, around 6 minutes.",
    subtext4:"Step 4: Lower heat to medium and pour in the water and soy sauce. Leave to simmer over medium high until it boils. Once it boils, lower heat and add in the cornstarch slurry while mixing. Keep mixing until the sauce thickens. Add in the cooked noodles. Add dark soy sauce (if using) and mix well. Feel free to add more soy sauce and chili garlic sauce as needed, to taste and for extra heat. Serve and enjoy hot with some chopped green onions.",
    image: "/DN-Eggplant.jpg",
    text: "Eggplant Chilli Noodles",
    listText1: "120g uncooked noodles",
    listText2: "2 tbsp sesame oil",
    listText3: "1/2 small onion diced",
    listText4: "4 cloves garlic minced",
    listText5: "1 tbsp black bean sauce",
    listText6: "1/2 cup water",
  },

  EggplantBeefPasta: {
    subtext1:"Step 1: In a large nonstick skillet heat oil over medium-high heat. Add eggplant; cook until tender, stirring frequently. Remove from skillet. Add ground beef, onion, and garlic to skillet. Cook until meat is brown, using a wooden spoon to break up meat as it cooks. Drain off fat. Stir in eggplant, tomatoes, tomato sauce, basil, oregano, salt, and crushed red pepper. Spread mixture in a shallow baking pan to cool quickly. ",
    subtext2:"Step 2: Meanwhile, cook pasta according to package directions; drain. Rinse with cold water; drain again. Stir pasta into meat mixture.",
    subtext3:"Step 3: Line a 2-quart baking dish or 8x8x1 3/4-inch square disposable foil pan with a triple layer of plastic wrap, extending the wrap to one side so there is enough to cover when folded back over dish. Transfer meat mixture to the prepared baking dish.",
    subtext4:"Step 4: Preheat oven to 350°F. Bake, covered, about 75 minutes or until heated though (165°F), stirring mixture once halfway through baking. Sprinkle with cheese. Bake, uncovered, about 5 minutes more or until cheese is melted.",
    image: "/Eggplant-Beef-Pasta.PNG",
    text: "Eggplant Beef Pasta",
    listText1: "4 chopped eggplants",
    listText2: "8oz penne pasta",
    listText3: "1 medium chopped onion",
    listText4: "8oz ground beef",
    listText5: "8oz can tomato sauce",
    listText6: "½ cup mozzarella cheese",
  },

  MushroomStirFryNoodles:{
    subtext1:"Step 1: Heat oil in a large skillet over high heat. Add mushrooms and cook for 3 minutes. Add the garlic and sesame oil, cook until mushrooms and garlic are golden. ",
    subtext2:"Step 2: Add Sauce, give it a quick stir. Add white part of green onions. Cook 1 minute until mushrooms are caramelised.",
    subtext3:"Step 3: Add water then squidge noodle cakes in. Cook 45 seconds, then flip. Cook 30 seconds then break up the noodles.",
    subtext4:"Step 4: Add green part of green onions and toss well, adding more water if needed to make it saucy.",
    image: "/MushroomStirFryNoodles.jpg",
    text: "Mushroom Stir Fry Noodles",
    listText1: "2 packets ramen or other instant noodles",
    listText2: "400g / 14 oz mushrooms",
    listText3: "2 tsp sesame oil",
    listText4: "2 garlic cloves ",
    listText5: "1 tbsp Oyster sauce",
    listText6: "1 tbsp soy sauce",
  },

  MushroomCreamPasta:{
    subtext1:"Step 1: Heat 2 Tbsp. oil in a large pot over medium-high. Cook half of mushrooms in a single layer, undisturbed, until edges are brown and starting to crisp, about 3 minutes. Give mushrooms a toss and continue to cook, tossing occasionally, until all sides are brown and crisp, about 5 minutes more. Using a slotted spoon, transfer mushrooms to a plate; season with salt. Repeat with remaining 2 Tbsp. oil and mushrooms and more salt.",
    subtext2:"Step 2: Reduce heat to medium-low and return all of the mushrooms to the pot. Add shallots and cook, stirring often, until shallots are translucent and softened, about 2 minutes.",
    subtext3:"Step 3: Meanwhile, cook pasta in a large pot of boiling salted water, stirring occasionally, until very al dente, about 2 minutes less than package directions.",
    subtext4:"Step 4: Cook the pasta in a large pot of boiling salted water, stirring occasionally, until very al dente, about 2 minutes less than package directions. Using tongs, transfer pasta to pot with mushrooms and add cream and 1 cup pasta cooking liquid. Increase heat to medium, bring to a simmer, and cook, tossing constantly, until pasta is al dente and liquid is slightly thickened, about 3 minutes. Remove pot from heat. Add lemon zest and juice, parsley, butter, ½ oz. Parmesan, and lots of pepper and toss to combine. ",
    image: "/MushroomCreamPasta.jpg",
    text:"Mushroom Cream Pasta",
    listText1: "1lb. dried pasta",
    listText2: "1lb. mixed mushrooms",
    listText3: "4 Tbsp. extra-virgin olive oil",
    listText4: "½ cup heavy cream",
    listText5: "2 medium shallots",
    listText6: "½ cup grated parmesan",
  },

}

export default function Home() {
  const router = useRouter();
  const {recipe} = router.query;  //{recipe} = [recipe].js variable is what you type in the browswer eg. iteems2/big

  var subtext1 = "Step 1: ";
  var subtext2 = "Step 2: ";
  var subtext3 = "Step 3: ";
  var subtext4 = "Step 4: ";
  var image = "/DN-Onion.jpg";
  var text = "Dry Onion Noodle";
  var listText1 = "Ingredient 1" ;
  var listText2 = "Ingredient 2" ;
  var listText3 = "Ingredient 3" ;
  var listText4 = "Ingredient 4" ;
  var listText5 = "Ingredient 5" ;
  var listText6 = "Ingredient 6" ;

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


  return <HomeCont>
    <Head>
      <title>Recipes</title>
    </Head>
    <div className="navbar">
      <Navbar 
        onClick={()=>router.push("/recipeoption/recipeoption")}
      />
    </div>
    <Recipe
      image={image}
      text={text}
      listText1={listText1}
      listText2={listText2}
      listText3={listText3}
      listText4={listText4}
      listText5={listText5}
      listText6={listText6}
    />
    <div className="directions">
      <Direction
        subtext1={subtext1}
        subtext2={subtext2}
        subtext3={subtext3}
        subtext4={subtext4}
      />
    </div>
    {/* <Infobox /> */}
    <div className="bottom">
      <CircleButton text="Food Substitutes" width="87" height="85" bkgdColor="#FBD0A9" />
      <CircleButton text="Costs Saved"  width="87" height="85" bkgdColor="#FEF2CA"/>
      <CircleButton text="Tips on Saving"  width="87" height="85" bkgdColor="#FBD0A9" />
    </div>
    <Footer/>
  </HomeCont>
}