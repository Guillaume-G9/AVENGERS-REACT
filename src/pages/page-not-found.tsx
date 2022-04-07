import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
  
const PageNotFound: FunctionComponent = () => {
  
  return (
    <div style={{color: 'white', fontWeight: 'bolder', height: '100vh'}} className="center">
      <img src="https://64.media.tumblr.com/97ed366281eacaba20d29bced85a4e55/tumblr_n5a9dosIBW1snr14bo1_1280.jpg" alt="Page non trouvée"/>
      <h1 style={{marginTop: '5%'}}>Hey, cette page n'existe pas !</h1> 
      <Link to="/" className="waves-effect waves-teal btn-flat red darken-2">
        Retourner à l'accueil
      </Link>
    </div>
  );
}
  
export default PageNotFound;
