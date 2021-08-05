import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
const About = () => {
  return (
    <div>
      <Navigation/>
      <Logo/>
      <br/>
      <h1>A propos</h1>
        <br/>
        <h3>Bonjour!</h3>
        <br/>
        <p>
          Je m'appel Anthony! Je suis un jeune développeur et j'ai crée ce site pour me familiariser avec React.
        C'est un site assez simple mis en place avec le Framework React et l'Api restcountries.eu 
        afin de pouvoir récupérer et afficher les informations sur les 250 pays.
        </p>
    </div>
  );
};

export default About;