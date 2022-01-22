import React, { useState, useRef, useEffect } from 'react';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import ReactPlayer from 'react-player';
// import CameraRoll from '../CameraRoll/CameraRoll';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {
  const [video, setVideo] = useState(null);
  const [mode, setMode] = useState('environment');
  const [playbackSpeed, setPlaybackSpeed] = useState(0);

  const videoRef = useRef(null);

  useEffect(() => {
    getVideo();
  }, [videoRef, mode]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { facingMode: mode, width: 320, height: 240 },
      })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        if (err.name === 'OverconstrainedError') {
          toast.error('This camera mode is not supported');
        }
        if (err.name === 'NotReadableError') {
          toast.error('There was hardware problem, please reload a page');
        }
        if (err.name === 'NotFoundError') {
          toast.error('No compatible camera source found');
        }
        if (err.name === 'TypeError') {
          toast.error('Video stream error in not secure environment');
        }
        if (err.name === 'NotAllowedError') {
          toast.error('You rejected permission to use your camera');
        }
        console.error(err.name);
        console.error(err.message);
      });
  };

  const stopVideo = () => {
    videoRef.current.srcObject.getTracks().forEach(track => track.stop());
  };

  const switchCameras = () => {
    setMode(mode === 'user' ? 'environment' : 'user');
  };

  const handlePlaybackSpeed = e => {
    const { value } = e.target;
    setPlaybackSpeed(+value);
  };

  return (
    <div>
      <div className="streamWrapper">
        <select onChange={handlePlaybackSpeed} name="playbackSpeed" value={playbackSpeed}>
          <option value={-1.5}>-1.5</option>
          <option value={-1.25}>-1.25</option>
          <option value={1}>1</option>
          <option value={1.25}>1.25</option>
          <option value={1.5}>1.5</option>
        </select>
        <video ref={videoRef} style={{ transform: mode === 'user' ? 'scaleX(-1)' : '' }} />
        <ReactPlayer url={video} />
      </div>
      <div className="btnWrapper">
        <button className="btn" onClick={getVideo}>
          START
        </button>
        <button className="btn" onClick={stopVideo}>
          STOP
        </button>
        <button className="btn" onClick={switchCameras}>
          SWITCH
        </button>
      </div>
      {/* <CameraRoll /> */}
      <ToastContainer
        transition={Zoom}
        autoClose={4000}
        toastStyle={{ backgroundColor: '#c57d7d', color: '#000000' }}
      />
    </div>
  );
}

export default App;
