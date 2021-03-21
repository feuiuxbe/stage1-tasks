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

window.addEventListener('keydown', function (e) {
    for (let i=0; i < soundDB.length; i++) {
        if (e.keyCode === soundDB[i][1]) {
            const audio = new Audio(soundDB[i][2]);
            console.log(audio);
            audio.currentTime = 0;
            audio.play();
        }
    }
});