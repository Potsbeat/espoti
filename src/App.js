
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
import {  useState, useEffect } from 'react';
import Favorites from './components/Favorites';

let favoriteStorage = JSON.parse(localStorage.getItem("favorites") || '[]');

function App() {
  
  const [currentSong, setCurrentSong] = useState(null);
  const [favList, setFavList] = useState(favoriteStorage);
  console.log(favList)

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favList));
    
  }, [favList])
  return (

      <Div100vh>
        <Router>
          <div className="header">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/search" className="nav-item">Buscar</Link>
            <Link to="/favorites" className="nav-item">Favoritas</Link>
          </div>
          <div className="body background-blur">
            
            <Switch>
            <Route path="/search">
                <Search setCurrentSong={setCurrentSong} favList={favList} setFavList={setFavList} />
              </Route>
              <Route path="/favorites">
                <Favorites setCurrentSong={setCurrentSong} favList={favList} setFavList={setFavList} />
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
