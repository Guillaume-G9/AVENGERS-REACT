import React, { FunctionComponent, useState, useEffect } from 'react';
import Avenger from './models/avenger';
import AVENGERS from './models/mock-avengers'
  
const App: FunctionComponent = () => {
 const [avengers, setAvengers] = useState<Avenger[]>([]);

 useEffect(() => {
     setAvengers(AVENGERS);
 }, []); 
    
 return (
  <div>
      <h1 className="center">Liste des Avengers</h1>
      <div className="container">
          <div className="row">
          {avengers.map(({superHeroName, name, familyName, picture, id}) => (
            <div className="col s6 m4" key={id}>
            <div className="card horizontal">
                <div className="card-image">
                <img height="200vh"src={picture} alt= {name} />
                </div> 
                <div className="card-stacked">
                <div className="card-content">
                    <p>{superHeroName}</p>
                    <p><small>{name} {familyName}</small></p>
                </div>
                </div>
            </div>
            </div>
          ))}
          </div>
      </div>
  </div>
 )
}
  
export default App;