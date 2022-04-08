import React, { FunctionComponent } from 'react';
  
const Loader: FunctionComponent = () => {
   
  return (
    <div className="center">
        <div className="preloader-wrapper big active"> 
        <div className="spinner-layer spinner-red" style={{zIndex: 999}}> 
            <div className="circle-clipper left"> 
            <div className="circle"></div> 
            </div>
            <div className="gap-patch"> 
            <div className="circle"></div> 
            </div><div className="circle-clipper right"> 
            <div className="circle"></div> 
            </div>
        </div> 
    </div> 
    </div>
  );
}
   
export default Loader;