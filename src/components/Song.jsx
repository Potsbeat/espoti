import "./css/Song.css";

function Song({song, loading}){
    return (
        <div className="song">
            <h3>{song.name}</h3>
            {song.artistName}
            <audio controls>
                <source src={song.previewURL} type="audio/mpeg" />
            </audio>
        </div>
    );
}

export default Song;