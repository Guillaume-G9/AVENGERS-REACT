import React, { FunctionComponent } from 'react'; // ---------- NEW CODE LINE
import AvengerList from './pages/avenger-list';
import AvengerDetail from './pages/avenger-detail';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import AvengerEdit from './pages/avenger-edit';
import AvengerAdd from './pages/avenger-add';

  
const App: FunctionComponent = () => {
    
 return (
     <Router>
         <div style={{background: `repeat 100% / contain url("https://i.ibb.co/R9Rp87c/marvel-logo-wallpaper.webp")`}}>
             <nav  style={{marginBottom: '15vh'}}>
                 <div className="nav-wrapper red darken-4">
                    <Link to="/avengers" className="brand-logo center">MCU MEMBERS</Link>
                 </div>
             </nav>
             <Switch>
                <Route exact path="/" component={AvengerList} />
                <Route exact path="/avengers" component={AvengerList} />
                <Route exact path="/avenger/add" component={AvengerAdd} />
                <Route exact path="/avengers/edit/:id" component={AvengerEdit} />
                <Route path="/avengers/:id" component={AvengerDetail} />
                <Route component={PageNotFound} />
             </Switch>
         </div>
     </Router>
 )
}
  
export default App;