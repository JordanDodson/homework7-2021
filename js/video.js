var video;
var volume;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	volume = document.querySelector("#volume");
	video =document.querySelector("#player1");
	
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play");
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";


});

document.querySelector("#pause").addEventListener("click", function(){
	video.pause();
	console.log("Pause");
	
});

document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate * 0.95;
	console.log("Slow speed down to" + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate * 1.05;
	console.log("Increase speed by " + video.playbackRate);
});


document.querySelector("#skip").addEventListener("click", function(){
	if(video.duration > video.currentTime + 15){
		video.currentTime += 15;
	
	} else {
		video.currentTime = 0;
		console.log("Restart video at " + video.currentTime);
	}
	console.log(video.duration)
	video.play();
});

document.querySelector("#mute").addEventListener("click", function(){
	console.log("Mute Video");
	if (video.muted == false){
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
	} else {
			video.muted = false
			document.querySelector("#mute").innerHTML = "Mute"		
	}
	console.log("Video is muted")
});


document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Set video to vintage mode");
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function(){
	console.log("Set video back to original");
	video.classList.remove("oldSchool")
});

document.querySelector("#slider").addEventListener("change", function(){
	console.log(video.volume);
	document.querySelector("#volume").innerHTML = this.value + "%";
	video.volume = (this.value/100);
});


