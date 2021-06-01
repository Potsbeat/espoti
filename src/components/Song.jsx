import "./css/Song.css";

function Song({song, playOnClick, favList, setFavList}){
    let cover_img = `https://api.napster.com/imageserver/v2/albums/${song.albumId}/images/70x70.jpg`;

    function addFav(){
        let elem = favList.find(s => s.id===song.id)
        let temp = [...favList];
        temp.splice(temp.indexOf(elem),1)
        !favList.includes(song) ?
            setFavList([song,...favList]) :
            setFavList( temp );
           
    }

    return (
        <div className="song">
            <img alt="cover" src={cover_img} className="song-cover" onClick={playOnClick} />
            <section className="song-data" onClick={playOnClick}>
                <h4>{song.name}</h4>
                <span className="artista">{song.artistName}</span>
            </section>
            <section className="star-div" onClick={addFav}>
                { favList.includes(song) ? <i className="fas fa-star"></i> : 
                                       <i className="far fa-star"></i> }
            </section>
        </div>
    );
}

export default Song;