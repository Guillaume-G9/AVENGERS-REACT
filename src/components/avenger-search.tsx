import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import Avenger from '../models/avenger';
import AvengerService from '../services/avenger-service';
 
const AvengerSearch: FunctionComponent = () => {
  
  const [term, setTerm] = useState<string>('');
  const [avengers, setAvengers] = useState<Avenger[]>([]);
 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const term = e.target.value;
    setTerm(term);
 
    if(term.length <= 1) {
      setAvengers([]);
      return;
    }
 
    AvengerService.searchAvenger(term).then(avengers => setAvengers(avengers));
  }
  
  return (
    <div className="row"> 
    <div className="col s12 m3 right red darken-4"> 
      <div className="card"> 
      <div> 
        <div style={{height: '3vh'}}  className="input-field"> 
        <input type="text" placeholder="Look for a member of the Marvel cinematic universe" value={term} onChange={e => handleInputChange(e)} /> 
        </div> 
        <div className='collection'>
        {avengers.map((avenger) => (
          <Link key={avenger.id} to={`/avengers/${avenger.id}`} className="collection-item">
            {avenger.superHeroName}
          </Link>
        ))}
        </div> 
      </div> 
      </div> 
    </div> 
    </div>
  );
}
  
export default AvengerSearch;