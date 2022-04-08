import React, { FunctionComponent } from 'react'; // ---------- NEW CODE LINE
import AvengerList from './pages/avenger-list';
import AvengerDetail from './pages/avenger-detail';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import AvengerEdit from './pages/avenger-edit';
import AvengerAdd from './pages/avenger-add';
import AvengerSearch from './components/avenger-search';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';

  
const App: FunctionComponent = () => {
    
 return (
     <Router>
         <div style={{height: '160vh', background: `repeat 100% / contain url("https://i.ibb.co/R9Rp87c/marvel-logo-wallpaper.webp")`}}>
             <nav className="red darken-4" style={{marginBottom: '15vh', padding: '0 3% 0 3%'}}>
                 <div style={{display: 'flex', gap: '80%'}} className="nav-wrapper red darken-4">
                    <Link to="/avengers" className="brand-logo center">MARVEL</Link>
                    <AvengerSearch />
                    <Link to={`/login`} className="right">
                        <i style={{fontSize: '3em'}} className="large material-icons">account_circle</i>
                    </Link>
                 </div>
             </nav>
             <Switch>
                <Route exact path="/" component={AvengerList} />
                <Route exact path="/login" component ={Login} />
                <Route exact path="/avengers" component={AvengerList} />
                <PrivateRoute exact path="/avenger/add" component={AvengerAdd} />
                <PrivateRoute exact path="/avengers/edit/:id" component={AvengerEdit} />
                <Route path="/avengers/:id" component={AvengerDetail} />
                <Route component={PageNotFound} />
             </Switch>
         </div>
     </Router>
 )
}
  
export default App;