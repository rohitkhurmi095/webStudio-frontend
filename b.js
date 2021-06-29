/*heart click*/
function myFunction(x) {
  x.classList.toggle("fas"); //changine class
  x.style="color:#bda4a7";
};


/*PLAY SONG ON ANY CLICK*/
$(document).ready(function(){
	var obj = new Audio();
	obj.src = "sound/click.mp3";
	obj.volume = 0.10;
	obj.autoPlay = false;
	obj.preLoad = true;

	$('.audio').click(function(){
		obj.play();
	});
});

var playBtn = document.getElementById('play');
var audio = document.getElementById('audio');
var stopbtn = document.getElementById('stop');

var playSound = function () {
    audio.play();
};

var stopSound = function () {
    audio.pause();
    audio.currentTime = 0;
};


playBtn.addEventListener('click', playSound, false);

stopbtn.addEventListener('click', stopSound, false);


/*dark theme toggle jquery*/
/*on clicking toggler new class with left more gap added*/
/*heart click*/
function myFunction2(x1) {
  x1.classList.toggle("pause"); //changine class
};












