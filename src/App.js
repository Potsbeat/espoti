
import './App.css';
import Search from './components/Search';
import Player from './components/Player';
import Div100vh from 'react-div-100vh';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {  useState } from 'react';

function App() {
  const [currentSong, setCurrentSong] = useState(null);

  return (

      <Div100vh>
        <Router>
          <div className="header">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/search" className="nav-item">Buscar</Link>
            <Link to="/search" className="nav-item">Favoritas</Link>
          </div>
          <div className="body background-blur">
            
              
             
            <Switch>
            <Route path="/search">
                <Search setCurrentSong={setCurrentSong} />
              </Route>
            </Switch>
          </div>
        </Router>
        <div className="footer">
          <Player song={currentSong} />
        </div>
      </Div100vh>
    
  );
}

export default App;
