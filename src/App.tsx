import React, { FunctionComponent } from 'react'; // ---------- NEW CODE LINE
import AvengerList from './pages/avenger-list';
import AvengerDetail from './pages/avenger-detail';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

  
const App: FunctionComponent = () => {
    
 return (
     <Router>
         <div>
             <nav>
                 <div className="nav-wrapper red darken-4">
                    <Link to="/" className="brand-logo center">AVENGER MEMBERS</Link>
                 </div>
             </nav>
             <Switch>
                <Route exact path="/" component={AvengerList}/>
                <Route exact path="/avengers" component={AvengerList}/>
                <Route path="/avengers/:id" component={AvengerDetail}/>
             </Switch>
         </div>
     </Router>
 )
}
  
export default App;