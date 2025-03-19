import React, { useEffect, useRef, useState } from "react";
import "./AppMain.css";
import CommonModal from "../sharedComponent/CommonModal";
import QuantityForm from "./QuantityForm";
import axios from "axios";
const playlist = [
  { src: "/audio1.mp3", title: "Song 1" },
  { src: "/audio2.mp3", title: "Song 2" },
  { src: "/audio3.mp3", title: "Song 3" },
  { src: "/audio4.mp3", title: "Song 4" },
];
const AppMain = () => {
  const [initialValue, setInitialValue] = useState({
    duration: 0,
    start_time: null,
    end_time: null,
    milk_quantity: 0,
  });
  const [stage, setStage] = useState("start");
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [intialModalOpen, setInitialModalOpen] = useState(false);
  const milkManRef = useRef();
  const audioRef = useRef(null);
  const handleStart = () => {
    const now = new Date();
    setInitialValue((prev) => ({
      ...prev,
      start_time: now.toISOString(),
    }));
    setStage("stop");
    setInitialModalOpen(false);
    setIsPlaying(true);
    milkManRef.current = setInterval(() => {
      setInitialValue((prev) => ({ ...prev, duration: prev.duration + 1 }));
    }, 1000);
  };
  const handleStop = () => {
    const now = new Date();
    setIsPlaying(false);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    clearInterval(milkManRef.current);
    setInitialValue((prev) => ({
      ...prev,
      end_time: now.toISOString(),
    }));
    setInitialModalOpen(true);
  };
  const handlePause = () => {
    setIsPlaying(false);
    setStage("pause");
    audioRef.current.pause();
    clearInterval(milkManRef.current);
  };

  const handleRestart = () => {
    setInitialModalOpen(false);
    setIsPlaying(true);
    setStage("pause");
    milkManRef.current = setInterval(() => {
      setInitialValue((prev) => ({ ...prev, duration: prev.duration + 1 }));
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (milkManRef.current) {
        clearInterval(milkManRef.current);
      }
    };
  }, []);
  useEffect(() => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying, currentSongIndex]);

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  };

  const handleSubmission = async () => {
    setInitialModalOpen(false);
    const response = await axios.post(
      "http://localhost:4000/api/milkMan/create",
      initialValue
    );

    setStage("start");
  };

  return (
    <main className="main">
      <audio
        ref={audioRef}
        src={playlist[currentSongIndex].src}
        onEnded={nextSong}
        autoPlay
      />
      <div className="span-container">
        <span>Duration: {initialValue.duration} seconds</span>
      </div>
      <div className="button-container">
        {stage === "start" && (
          <button className="start-button" onClick={() => handleStart()}>
            Start
          </button>
        )}
        {stage !== "start" && (
          <>
            {stage === "pause" ? (
              <button className="start-button" onClick={() => handleRestart()}>
                Replay
              </button>
            ) : (
              <button className="pause-button" onClick={() => handlePause()}>
                Pause
              </button>
            )}
            <CommonModal
              key={intialModalOpen ? "modal-open" : "modal-closed"}
              renderButton={() => {
                return (
                  <button
                    className="cancel-button"
                    onClick={() => handleStop()}
                  >
                    Stop
                  </button>
                );
              }}
              initialState={intialModalOpen}
              modalTitle={"Submit Daily Milk Count"}
            >
              <QuantityForm
                setInitialValue={setInitialValue}
                handleSubmission={handleSubmission}
                initialValue={initialValue}
                handleClose={() => setInitialModalOpen(false)}
              />
            </CommonModal>
          </>
        )}
      </div>
    </main>
  );
};

export default AppMain;
