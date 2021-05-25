import './css/Search.css';
import { useEffect, useRef, useState } from 'react';
import Song from './Song';
import Player from './Player';

function Search() {
  const search_input = useRef();
  const [songsList, setSongsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    
  },[songsList]);

  async function search(){
    setLoading(true);
    console.log("el tru: "+loading)
    setSongsList([]);
    
    //Construir el URL
    const search_input_val = search_input.current.value;
    let par_url = "http://api.napster.com";
    let key = "apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm";
    let query = `query=${search_input_val}`;
    let url = par_url + `/v2.2/search/verbose?${key}&${query}`;

    //Hacemos la petición al servidor
    let resp = await fetch(url);
    let data = await resp.json();
    setSongsList(data.search.data.tracks);
    console.log(data.search.data.tracks);
    setLoading(false);
    console.log("el fols: "+loading)
  }

  

  return (
    <div>
      
      <input type="text" ref={search_input} />
      <button onClick={search}>Buscar</button>
      { loading ? <div className="loading-div"><div className="loader"></div></div> : <></>}
      {
      songsList.map( song => 
        <Song key={song.id} song={song} playOnClick={()=>setCurrentSong(song)} />
      )
      }
        <Player song={currentSong} />
    </div>
  );
}

export default Search;