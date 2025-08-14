export async function startApp() {
  await Tone.start(); // unlock audio
  await navigator.mediaDevices.getUserMedia({ video: true }); // trigger camera prompt
  // then run your existing setup & rendering code here
}
