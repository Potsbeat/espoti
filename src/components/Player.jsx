import {useAudio} from 'react-use';
import {useState} from 'react';
import './css/Player.css';
const Player = ({song}) => {
    let src = '';
    (song==null) ? src='' : src = song.previewURL;
  const [audio, state, controls] = useAudio({
    src: src,
    autoPlay: true,
  });

  const[volume, setVolume] = useState(80);

  function togglePlay(){
      state.paused ? controls.play() : controls.pause();
  }

  function handleVolume(ev){
    setVolume(ev.target.value);
    controls.volume(volume/100);
  }

  function handleTime(ev){
    controls.seek(ev.target.value);
  }

  return (
    <div className="player">
      {audio}
      
      <div className="play-btn" onClick={ togglePlay }>
        { state.paused ? <i class="far fa-play-circle"></i> : <i class="fas fa-pause-circle"></i> }
      </div>

      <div className="player-info vertical-flex">
        <span className="title">{ (song!=null) ? song.name : ''}</span>
        <span className="artist">{ (song!=null) ? song.artistName : ''}</span>
      </div>

      <input className="progress-bar" type="range" min="0" max={state.duration} value={state.time} step="0.01" onChange={handleTime} />
      
      <input type="range" min="0" max="100" value={volume} onChange={handleVolume} />
     
    </div>
  );
};

export default Player;