var lastClicked;

function PlaySound(melody, base) {
        var path = "assets\\"
        var snd = new Audio(path + melody + ".mp3");
        snd.play();
        if(base) lastClicked = melody;
}
var sounds = {
	32: 'robot',
	16: 'high'

}
document.onkeydown = function(e) {
    var soundId = sounds[e.keyCode];
    console.log(soundId);
    console.log(lastClicked);
    if (soundId) PlaySound(soundId + '_' + lastClicked, false);
    else console.log("key not mapped : code is", e.keyCode);
}