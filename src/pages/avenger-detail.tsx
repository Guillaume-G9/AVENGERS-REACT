import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import Avenger from '../models/avenger';
import formatDate from '../helpers/format-date';
import formatRace from '../helpers/format-race';
import AvengerService from '../services/avenger-service'
import Loader from'../components/loader';
  
type Params = { id: string };
  
const AvengersDetail: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
    
  const [avenger, setAvenger] = useState<Avenger|null>(null);
  
  useEffect(() => {
    AvengerService.getAvenger(+match.params.id).then(avenger => setAvenger(avenger));
  }, [match.params.id]);
    
  return (
    <div>
      { avenger ? (
        <div className="row">
          <div className="col s12 m8 offset-m2" style={{paddingBottom: '5%'}}> 
            <h2 style={{color: 'white', fontWeight: 'bolder'}} className="header center">{ avenger.superHeroName.toUpperCase() }</h2>
            <div className="card hoverable"> 
              <div className="card-image">
            <Link to={`/avengers/edit/${avenger.id}`} style={{margin: '5%'}} className="btn-large btn-floating halfway-fab waves-effect waves-light red darken-2">
            <i className="material-icons">edit</i>
            </Link>
                <img src={avenger.picture} alt={avenger.name} style={{width: '200px', margin: '0 auto'}}/>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <table className="bordered striped">
                    <tbody>
                      <tr> 
                        <td>Name</td>
                        <td><strong>{ avenger.name }</strong></td> 
                        <td>{ avenger.familyName}</td> 
                      </tr>
                      <tr> 
                        <td>About</td> 
                        <td>{avenger.race.map(race => (
                        <span key={race} className={formatRace(race)}>{race}</span>
                        ))}</td>
                      </tr> 
                      <tr> 
                        <td>Created</td> 
                        <td>{formatDate(avenger.created)}</td>
                        <td>{avenger.author}</td>
                      </tr>
                      <tr>
                          <td>Backstory</td>
                          <td style={{width: '25vw', margin: '0 auto'}}>{avenger.backstory}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="btn red darken-2">
                  <Link style={{color: 'white'}} to="/">Retour</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h4 style={{height: '100vh'}}  className="center"><Loader/></h4>
      //   <div style={{color: 'white', fontWeight: 'bolder', paddingBottom: '15%', paddingTop: '2vh'}} className="center">
      //   <img style={{margin: '-5%'}} src="https://i.ibb.co/5kgsWDW/deadpool-shrug-poster-r09b83d0c41094c369d6f4af36aa5b56d-wvu-8byvr-704.webp" alt="Page non trouv??e"/>
      //   <h1 style={{margin: '6% 0 0'}}>Aucun Avenger ?? afficher !</h1> 
      //   <div style={{marginTop: '1%'}}>
      //   <Link to="/" className="btn red darken-2">
      //     Retourner ?? l'accueil
      //   </Link>
      //   </div>
      // </div>
      )}
    </div>
  );
}
  
export default AvengersDetail;