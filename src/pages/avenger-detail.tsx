import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import Avenger from '../models/avenger';
import AVENGERS from '../models/mock-avenger';
import formatDate from '../helpers/format-date';
import formatRace from '../helpers/format-race';
  
type Params = { id: string };
  
const AvengersDetail: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
    
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
          <div className="col s12 m8 offset-m2"> 
            <h2 className="header center">{ avenger.superHeroName }</h2>
            <div className="card hoverable"> 
              <div className="card-image">
                <img src={avenger.picture} alt={avenger.name} style={{width: '250px', margin: '0 auto'}}/>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <table className="bordered striped">
                    <tbody>
                      <tr> 
                        <td>Nom</td> 
                        <td><strong>{ avenger.name }</strong></td> 
                        <td>{ avenger.familyName}</td> 
                      </tr>
                      <tr> 
                        <td>Informations</td> 
                        <td><span key={avenger.race} className={formatRace(avenger.race)}>{avenger.race}</span></td> 
                      </tr> 
                      <tr> 
                        <td>Date de création</td> 
                        <td>{formatDate(avenger.created)}</td>
                        <td>{avenger.author}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-action">
                  <Link to="/">Retour</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h4 className="center">Aucun avenger à afficher !</h4>
      )}
    </div>
  );
}
  
export default AvengersDetail;