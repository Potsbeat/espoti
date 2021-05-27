import './css/Search.css';
import { useEffect, useRef, useState } from 'react';
import Song from './Song';

function Search({setCurrentSong}) {
  const search_input = useRef();
  const search_btn = useRef();
  const [songsList, setSongsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
  },[songsList]);

  async function search(){
    const search_input_val = search_input.current.value;
    if(search_input_val===null || !search_input_val.replace(/\s/g, '').length){
      return;
    }
    setLoading(true);
    setSongsList([]);
    
    //Construir el URL
    
    let par_url = "https://api.napster.com";
    let key = "apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm";
    let query = `query=${search_input_val}`;
    let url = par_url + `/v2.2/search/verbose?${key}&${query}`;

    //Hacemos la petición al servidor
    let resp = await fetch(url);
    let data = await resp.json();
    setSongsList(data.search.data.tracks);
    console.log(data.search.data);
    setLoading(false);
    console.log("el fols: "+loading)
  }

  function checkEnter(e){
    e.key==='Enter' && search_btn.current.click();
  }

  return (
    <div className="vertical-flex">
      
      <section className="search-section justify-center">
          <input type="text" ref={search_input} onKeyDown={checkEnter} />
          
          <div ref={search_btn} className="search-btn" onClick={search}><i className="fas fa-search"></i></div>
      </section>
      { loading ? <div className="loading-div"><div className="loader"></div></div> : <></>}
      {
      songsList.map( song => 
        <Song key={song.id} song={song} playOnClick={()=>setCurrentSong(song)} />
      )
      }
      
    </div>
  );
}

export default Search;