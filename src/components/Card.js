import React from 'react';


const Card = (props) => {
  const {country} = props;
  console.log(country);
   return (
     <li className="card">
       <img src={country.flag} alt="flag"/>
       <div className="data-container">
         <ul>
         <li>{country.name}</li>
         <li>Capitale: {country.capital}</li>
         <li>Population: {country.population}</li>
         <li>Continent: {country.region}</li>
         </ul>
       </div>
     </li>
   )
  
};

export default Card;