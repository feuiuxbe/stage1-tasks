const soundDB = [
["D", 68, "assets/audio/c.mp3"],
["F", 70, "assets/audio/d.mp3"],
["G", 71, "assets/audio/e.mp3"],
["H", 72, "assets/audio/f.mp3"],
["J", 74, "assets/audio/g.mp3"],
["K", 75, "assets/audio/a.mp3"],
["L", 76, "assets/audio/b.mp3"],
["R", 82, "assets/audio/c♯.mp3"],
["T", 84, "assets/audio/d♯.mp3"],
["U", 85, "assets/audio/f♯.mp3"],
["I", 73, "assets/audio/g♯.mp3"],
["O", 79, "assets/audio/a♯.mp3"]
]

const piano = document.querySelector('.piano');
//console.log(piano);
const pianoКeys = document.querySelectorAll('.piano-key');
//console.log(pianoКeys);

// button push

document.addEventListener('keydown', function (event) {
    for (let i=0; i < soundDB.length; i++) {
        if (event.code === 'Key' + soundDB[i][0]) {
            const audio = new Audio(soundDB[i][2]);
            audio.currentTime = 0;
            audio.play();
        }
    } 

    console.log(event.target.classList);
    if(event.target.classList.contains('piano-key')) {
        
        pianoКeys.forEach((el) => {
          if(el.classList.contains('piano-key-active')) {
            el.classList.remove('piano-key-active');
          }
        });
        event.target.classList.add('piano-key-active');
    }
});

// mouse click 

piano.addEventListener('click', (event) => {
    if(event.target.classList.contains('piano-key')) {
        const note = event.target.dataset.note;
        const src = `assets/audio/${note}.mp3`;
        const audio = new Audio(src);
        audio.currentTime = 0;
        audio.play();
        pianoКeys.forEach((el) => {
            if(el.classList.contains('piano-key-active')) {
                el.classList.remove('piano-key-active');
            }
        });
        event.target.classList.add('piano-key-active');
    }   
});


//fullscreen

const fullScreen = document.querySelector(".fullscreen");
    
fullScreen.addEventListener('click', function (turnFullScreen) {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } 
    document.exitFullscreen();
});