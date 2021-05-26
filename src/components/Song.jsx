import "./css/Song.css";

function Song({song, playOnClick}){
    return (
        <div className="song" onClick={playOnClick}>
            <h4>{song.name}</h4>
            <span className="artista">{song.artistName}</span>
        </div>
    );
}

export default Song;