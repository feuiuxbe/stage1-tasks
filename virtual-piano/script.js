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

// keyboard button push

window.addEventListener('keydown', function (event) {
    for (let i=0; i < soundDB.length; i++) {
        if (event.code === 'Key' + soundDB[i][0]) {
            const audio = new Audio(soundDB[i][2]);
            audio.currentTime = 0;
            audio.play();
            const key = document.querySelector(`.piano-key[data-letter="${soundDB[i][0]}"]`);
            pianoКeys.forEach((el) => {
                if(el.classList.contains('piano-key-active')) {
                    el.classList.remove('piano-key-active');
                }
                key.classList.add('piano-key-active');
            });

        }
    }
});

// mouse click - was bugged with mousedown

/* piano.addEventListener('click', (event) => {
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
}); */

// mousedown (button is pressed)

piano.addEventListener('mousedown', (event) => {
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

// fullscreen

const fullScreen = document.querySelector(".fullscreen");
    
fullScreen.addEventListener('click', (event) => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } 
    document.exitFullscreen();
});

// Notes - Letters buttons

const lettersButton = document.querySelector(".btn-letters");
const notesButton = document.querySelector(".btn-notes");

lettersButton.addEventListener('mousedown', (event) => {
    for (let i = 0; i < pianoКeys.length; i++) {
      if (!pianoКeys[i].classList.contains("piano-key-letter")) {
        pianoКeys[i].classList.add("piano-key-letter");
      }
    }
    lettersButton.classList.add('btn-active');
    notesButton.classList.remove('btn-active');
});
  
notesButton.addEventListener('mousedown', (event) => {
    for (let i = 0; i < pianoКeys.length; i++) {
      if (pianoКeys[i].classList.contains("piano-key-letter")) {
        pianoКeys[i].classList.remove("piano-key-letter");
      }
    }
    lettersButton.classList.remove('btn-active');
    notesButton.classList.add('btn-active');
});

// remove transitions




for (let i = 0; i < pianoКeys.length; i++) {
    
    pianoКeys[i].addEventListener('transitionend', (event) => {
        event.target.classList.remove('piano-key-active');
    });


// mouseover sound
     pianoКeys[i].addEventListener('mouseover', (event) => {
        if (event.buttons !== 1) return;
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
}
