import { useState } from 'react';
import { useRecordWebcam } from 'react-record-webcam';

export default function RecordVideo(props) {
  const [mode, setMode] = useState('user');

  const options = {
    facingMode: mode,
  };
  const recordWebcam = useRecordWebcam(options);

  console.log(recordWebcam);

  const saveFile = async () => {
    const blob = await recordWebcam.getRecording();
  };

  const switchCameras = () => {
    setMode(mode === 'user' ? 'environment' : 'user');
  };

  return (
    <div>
      <p>Camera status: {recordWebcam.status}</p>
      <button onClick={recordWebcam.open}>Open camera</button>
      <button onClick={switchCameras}>Switch camera</button>
      <button onClick={recordWebcam.start}>Start recording</button>
      <button onClick={recordWebcam.stop}>Stop recording</button>
      <button onClick={recordWebcam.retake}>Retake recording</button>
      <button onClick={recordWebcam.download}>Download recording</button>
      <button onClick={saveFile}>Save file to server</button>
      <video ref={recordWebcam.webcamRef} autoPlay />
      <video ref={recordWebcam.previewRef} autoPlay loop controls />
    </div>
  );
}
