import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import AvengerForm from '../components/avenger-form';
import Avenger from '../models/avenger';
import AvengerService from '../services/avenger-service'
import Loader from '../components/loader';
 
type Params = { id: string };
  
const AvengerEdit: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
    
  const [avenger, setAvenger] = useState<Avenger|null>(null);
  
  useEffect(() => {
    AvengerService.getAvenger(+match.params.id).then(avenger => setAvenger(avenger));
  }, [match.params.id]);
    
  return (
    <div>
      { avenger ? (
        <div className="row" style={{paddingBottom: '5%'}}>
            <h2 style={{color: 'white', fontWeight: 'bolder'}} className="header center">EDIT { avenger.superHeroName.toUpperCase() }</h2>
            <AvengerForm avenger={avenger} isEditForm={true}></AvengerForm>
        </div>
      ) : (
        <h4 style={{height: '100vh'}} className="center"><Loader/></h4>
        //   <div style={{color: 'white', fontWeight: 'bolder', paddingBottom: '15%', paddingTop: '2vh'}} className="center">
        //   <img style={{margin: '-5%'}} src="https://i.ibb.co/5kgsWDW/deadpool-shrug-poster-r09b83d0c41094c369d6f4af36aa5b56d-wvu-8byvr-704.webp" alt="Page non trouvée"/>
        //   <h1 style={{margin: '6% 0 0'}}>Aucun Avenger à afficher !</h1> 
        //   <div style={{marginTop: '1%'}}>
        //   <Link to="/" className="btn red darken-2">
        //     Retourner à l'accueil
        //   </Link>
        //   </div>
        // </div>
      )}
    </div>
  );
}
  
export default AvengerEdit;