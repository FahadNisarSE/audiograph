import WaveSurfer, {WaveSurferOptions} from "wavesurfer.js";
import TimelinePlugin from "wavesurfer.js/dist/plugins/timeline.esm.js";

const timeContainer = document.getElementById("time");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");

const wavesurfer = WaveSurfer.create({
  container: "#waveform",
  waveColor: "#cdd3dc",
  progressColor: "#adb2b9",
  url: "/audio.wav",
  plugins: [TimelinePlugin.create()],
});

wavesurfer.setOptions({minPxPerSec: 1000})

wavesurfer.on("timeupdate", (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  const formattedTime = `${minutes < 10 ? "0" : ""}${minutes} : ${
    seconds < 10 ? "0" : ""
  }${seconds}`;

  if (timeContainer) timeContainer.innerText = formattedTime;
});

wavesurfer.on("finish", () => {
  wavesurfer.pause();
  playButton?.classList.toggle("hide");
  pauseButton?.classList.toggle("hide");
});

playButton?.addEventListener("click", () => {
  wavesurfer.play();
  playButton.classList.toggle("hide");
  pauseButton?.classList.toggle("hide");
});

pauseButton?.addEventListener("click", () => {
  wavesurfer.pause();
  playButton?.classList.toggle("hide");
  pauseButton?.classList.toggle("hide");
});
