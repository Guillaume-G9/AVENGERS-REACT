import React, { FunctionComponent, useState, useEffect } from 'react';
import Avenger from '../models/avenger';
import AvengerCard from '../components/avenger-card';
import AvengerService from '../services/avenger-service';
import { Link} from 'react-router-dom';
import AvengerSearch from '../components/avenger-search';
  
const AvengerList: FunctionComponent = () => {
  const [avengers, setAvengers] = useState<Avenger[]>([]);
  
  useEffect(() => {
    AvengerService.getAvengers().then(avengers => setAvengers(avengers));
  }, []);
  
  return (
    <div>
      <div style={{paddingBottom: '10%'}} className="container"> 
        <div className="row">
          <div>
          <AvengerSearch /> 
          </div>
        {avengers.map(avenger => (
          <AvengerCard key={avenger.id} avenger={avenger}/>
        ))}
        </div>
        <div className="hoverable">
          <Link className="btn-large waves-effect waves-light red darken-2 z-depth-3"
          style={{position: 'fixed', bottom: '25px', right: '25px'}}
          to="/avenger/add"
          >
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    </div> 
  );
}
  
export default AvengerList;