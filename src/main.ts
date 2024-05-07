import WaveSurfer from "wavesurfer.js";
import Regions from "wavesurfer.js/dist/plugins/regions.esm.js";

const timeContainer = document.getElementById("time");

const wavesurfer = WaveSurfer.create({
  container: "#waveform",
  waveColor: "#4F4A85",
  progressColor: "#383351",
  url: "/audio.wav",
});

wavesurfer.on("timeupdate", (time) => {
  console.log("Time update: ", time)
  if (timeContainer) timeContainer.innerText = String(Math.floor(time));
});

document.getElementById("play")?.addEventListener("click", () => {
  wavesurfer.play();
});

document.getElementById("pause")?.addEventListener("click", () => {
  wavesurfer.pause();
});
