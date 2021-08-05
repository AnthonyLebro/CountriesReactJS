import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Countries from "../components/Countries";

const Home = () =>{
 return (
   <div className="home">
     <Navigation />
     <Logo/>
     <br/>
     <h1>Accueil</h1>
     <br/>
     <Countries/>
   </div>
 )
}

export default Home;