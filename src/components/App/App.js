import React, { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {
  const [video, setVideo] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [mode, setMode] = useState('environment');
  const videoRef = useRef(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    getVideo();
  }, [videoRef, mode]);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: mode,
  };

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { facingMode: mode, width: 320, height: 240 },
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
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
    videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
  };

  const switchCameras = () => {
    setMode(mode === 'user' ? 'environment' : 'user');
  };

  const getScreenshot = () => {
    const screenshot = cameraRef.current.getScreenshot({
      width: 800,
      height: 600,
    });
    setPhoto(screenshot);
  };

  return <div>
  <div className="streamWrapper">
        <video ref={videoRef} />
        // <Webcam
        //   ref={cameraRef}
        //   videoConstraints={videoConstraints}
        //   imageSmoothing="true"
        //   screenshotQuality="1"
        // />
        // {photo && <img src={photo} alt="screen snap" />}
      </div>
      <div className="btnWrapper">
        <button className="btn" onClick={getVideo}>
          START
        </button>
        // <button className="btn" onClick={getScreenshot}>
        //   PHOTO
        // </button>
        <button className="btn" onClick={stopVideo}>
          STOP
        </button>
        <button className="btn" onClick={switchCameras}>
          SWITCH
        </button>
      </div>
      <ToastContainer
        transition={Zoom}
        autoClose={4000}
        toastStyle={{ backgroundColor: '#c57d7d', color: '#000000' }}
      /></div>;
}

export default App;
