const pianokeys = document.querySelectorAll(".piano-keys .key");

let allKeys = [],
audio = new Audio();

const playTune = (key) =>{
  audio.src = `tunes/${key}.wav`;
  audio.play();
  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 100)
}


pianokeys.forEach(key=>{
  allKeys.push(key.dataset.key);
  //console.log(key.dataset.key);
  key.addEventListener("click",()=> playTune(key.dataset.key));
})
const pressedKey = (e) =>{
  //console.log(e);
  if(allKeys.includes(e.key)) playTune(e.key);
}
document.addEventListener("keydown", pressedKey);
