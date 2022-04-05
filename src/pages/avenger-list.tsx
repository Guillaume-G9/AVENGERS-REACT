import React, { FunctionComponent, useState, useEffect } from 'react';
import Avenger from '../models/avenger';
import AVENGERS from '../models/mock-avenger';
import AvengerCard from '../components/avenger-card';
  
const AvengerList: FunctionComponent = () => {
  const [avengers, setAvengers] = useState<Avenger[]>([]);
  
  useEffect(() => {
    setAvengers(AVENGERS);
  }, []);
  
  return (
    <div>
      <div className="container"> 
        <div className="row"> 
        {avengers.map(avenger => (
          <AvengerCard key={avenger.id} avenger={avenger}/>
        ))}
        </div>
      </div>
    </div> 
  );
}
  
export default AvengerList;