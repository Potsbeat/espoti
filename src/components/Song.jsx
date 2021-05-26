import "./css/Song.css";

function Song({song, playOnClick}){
    let cover_img = `https://api.napster.com/imageserver/v2/albums/${song.albumId}/images/70x70.jpg`;

    return (
        <div className="song" onClick={playOnClick}>
            <img alt="cover" src={cover_img} />
            <section className="song-data">
                <h4>{song.name}</h4>
                <span className="artista">{song.artistName}</span>
            </section>
        </div>
    );
}

export default Song;