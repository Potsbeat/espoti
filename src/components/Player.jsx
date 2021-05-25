import {useAudio} from 'react-use';

const Player = ({song}) => {
    let src = '';
    (song==null) ? src='' : src = song.previewURL;
  const [audio, state, controls, ref] = useAudio({
    src: src,
    autoPlay: true,
  });

  function togglePlay(){
      state.paused ? controls.play() : controls.pause();
  }

  return (
    <div>
      {audio}
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={ togglePlay }>{ state.paused ? 'Play' : 'Pausa'}</button>
      <br/>
      <button onClick={controls.mute}>Mute</button>
      <button onClick={controls.unmute}>Un-mute</button>
      <br/>
      <button onClick={() => controls.volume(.5)}>Volume: 50%</button>
      <button onClick={() => controls.volume(1)}>Volume: 100%</button>
      <br/>
      
    </div>
  );
};

export default Player;