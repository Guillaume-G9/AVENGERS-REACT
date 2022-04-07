import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import AvengerForm from '../components/avenger-form';
import Avenger from '../models/avenger';
import AVENGERS from '../models/mock-avenger';
 
type Params = { id: string };
  
const AvengerEdit: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
    
  const [avenger, setAvenger] = useState<Avenger|null>(null);
  
  useEffect(() => {
    AVENGERS.forEach(avenger => {
      if (match.params.id === avenger.id.toString()) {
        setAvenger(avenger);
      }
    })
  }, [match.params.id]);
    
  return (
    <div>
      { avenger ? (
        <div className="row">
            <h2 className="header center">Edit { avenger.name }</h2>
            <AvengerForm avenger={avenger}></AvengerForm>
        </div>
      ) : (
        <div className="center">
        <img style={{margin: '-5%'}} src="https://i.ibb.co/5kgsWDW/deadpool-shrug-poster-r09b83d0c41094c369d6f4af36aa5b56d-wvu-8byvr-704.webp" alt="Page non trouvée"/>
        <h1>Aucun Avenger à afficher !</h1> 
        </div>
      )}
    </div>
  );
}
  
export default AvengerEdit;