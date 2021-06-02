import {useState, useEffect} from 'react';
import Song from './Song';
import './css/Home.css';
function Home({setCurrentSong, favList, setFavList}){

    const [topList, setTopList] = useState([]);

    useEffect(() => {
        getTopTracks();
    }, [])
   

    return (
        <div>
            <h3 className="top-title">Top Canciones</h3>
            <div className="container">
            {
                topList.map( song =>
                    <section className="card">
                        <Song key={song.id}
                            song={song}
                            playOnClick={()=>setCurrentSong(song)}
                            favList={favList}
                            setFavList={setFavList} />
                    </section>
                )
            }
            </div>
        </div>
    );

    async function getTopTracks(){
        //Construir el URL
     
        let url = 'https://api.napster.com/v2.1/tracks/top?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm';

        //Hacemos la petición al servidor
        let resp = await fetch(url);
        let data = await resp.json();
        setTopList(data.tracks);
        console.log(data.tracks);
    }
}

export default Home;