import "./css/Song.css";

function Song({song, playOnClick}){
    return (
        <div className="song" onClick={playOnClick}>
            <h3>{song.name}</h3>
            {song.artistName}
        </div>
    );
}

export default Song;