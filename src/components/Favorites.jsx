import './css/Favorites.css'
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
          <h3 className="nothing-title">A&uacute;n no tienes canciones agregadas :0</h3>
      }      
    </div>
    );
}

export default Favorites;