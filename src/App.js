import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const App = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition();

  const handleListening = () => {
    SpeechRecognition.startListening({ continuous: true });
  };
  const handleStopListening = () => {
    SpeechRecognition.stopListening();
  };
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <strong>{!isMicrophoneAvailable && `Enable Microphoneaccess`}</strong>
      <p>Microphone: {isMicrophoneAvailable ? "enabled" : "disabled"}</p>
      <p>{listening && "Speaking..."}</p>
      <button onClick={handleListening}>Start</button>
      <button onClick={handleStopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};
// https://codepen.io/Nurutomo2/pen/bKJvmZ?editors=0010 - audio visualizer
export default App;
