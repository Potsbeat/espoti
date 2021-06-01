
import Song from './Song';

function Favorites({setCurrentSong, favList, setFavList}){

    return (
    <div className="vertical-flex">
      {
          favList.length >0 ? favList.map( song => 
            <Song key={song.id} 
              song={song}
              playOnClick={()=>setCurrentSong(song)}
              favList={favList}
              setFavList={setFavList} />
          ) :
          <p>Nada que mostrar</p>
      }      
    </div>
    );
}

export default Favorites;