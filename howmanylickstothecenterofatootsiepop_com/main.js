'use strict';

var lickCount = 0;

function resetAnimation() {
    var lickGif = document.getElementById("lickGif");
    var countDiv = document.getElementById("count");

    lickCount++;
    countDiv.innerText = lickCount;
    lickGif.src = lickGif.src;
};

document.addEventListener('keypress', (event) => {
    console.log(event.code);
  if (event.code == "Space") { resetAnimation(); }
});
