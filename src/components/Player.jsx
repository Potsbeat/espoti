import { useAudio } from 'react-use';
import { useState } from 'react';
import './css/Player.css';
const Player = ({ song }) => {
  let src = '';
  let img_src = '';

  if (song !== null) {
    src = song.previewURL;
    img_src = `https://api.napster.com/imageserver/v2/albums/${song.albumId}/images/70x70.jpg`;
  }

  const [audio, state, controls] = useAudio({
    src: src,
    autoPlay: true,
  });

  const [volume, setVolume] = useState(100);

  function togglePlay() {
    state.paused ? controls.play() : controls.pause();
  }

  function handleVolume(ev) {
    setVolume(ev.target.value);
    controls.volume(volume / 100);
  }

  function handleTime(ev) {
    controls.seek(ev.target.value);
  }

  return (
    <div className="player">
      {audio}


      <input className="progress-bar" type="range" min="0" max={state.duration} value={state.time} step="0.01" onChange={handleTime} />
      <section className="bellow-pbar">

        <div className="horizontal-flex align-center justify-center">
          <img className="player-img" src={img_src} alt='' />
          <div className="player-info vertical-flex">
            <span className="title">{(song != null) ? song.name : ''}</span>
            <span className="artist">{(song != null) ? song.artistName : ''}</span>
          </div>
        </div>

        <div className="play-btn" onClick={togglePlay}>
          {state.paused ? <i className="far fa-play-circle ihover"></i> : <i className="far fa-pause-circle ihover"></i>}
        </div>

        <input className="hide-on-mobile" type="range" min="0" max="100" value={volume} onChange={handleVolume} />
      </section>


    </div>
  );
};

export default Player;