 var numberOfDrums = document.querySelectorAll(".drum").length;
 
document.querySelectorAll(".drum")[0].addEventListener("click", function () {
var audio=new Audio(" tom-1.mp3");
audio.play();
this.style.color="white";
buttonAnimation(document.querySelectorAll('.drum')[0].innerText);
});

document.querySelectorAll(".drum")[1].addEventListener("click", function () {
var audio=new Audio(" tom-2.mp3");
audio.play();
this.style.color="white";
buttonAnimation(document.querySelectorAll('.drum')[1].innerText);
});

document.querySelectorAll(".drum")[2].addEventListener("click", function () {
var audio=new Audio(" tom-3.mp3");
audio.play();
this.style.color="white";
buttonAnimation(document.querySelectorAll('.drum')[2].innerText);
});

document.querySelectorAll(".drum")[3].addEventListener("click", function () {
var audio=new Audio(" tom-4.mp3");
audio.play();
this.style.color="white";
buttonAnimation(document.querySelectorAll('.drum')[3].innerText);
});


document.querySelectorAll(".drum")[4].addEventListener("click", function () {
var audio=new Audio(" crash.mp3");
audio.play();
this.style.color="yellow";
buttonAnimation(document.querySelectorAll('.drum')[4].innerText);
});

document.querySelectorAll(".drum")[5].addEventListener("click", function () {
var audio=new Audio(" kick-bass.mp3");
audio.play();
this.style.color="white";
buttonAnimation(document.querySelectorAll('.drum')[5].innerText);
});

document.querySelectorAll(".drum")[6].addEventListener("click", function () {
var audio=new Audio(" snare.mp3");
audio.play();
this.style.color="yellow";
buttonAnimation(document.querySelectorAll('.drum')[6].innerText);
});

document.addEventListener("keypress" , function(event){
 makeSound(event.key);
 buttonAnimation(event.key);
 });
 
 function makeSound(key)
 {
 switch(key)
 {
 case "w" :
   var audio=new Audio(" tom-1.mp3");
   audio.play();
 
   break;
 
 case "a" : 
   var audio=new Audio(" tom-2.mp3");
    audio.play();
   
   break;
   
 case "s":
 	var audio=new Audio(" tom-3.mp3");
    audio.play();
    
    break;
 case "d":
    var audio=new Audio(" tom-4.mp3");
    audio.play();
    
    break;
 case "j":
 	var audio=new Audio(" crash.mp3");
    audio.play();
   
    break;
 case "k":
 	var audio=new Audio(" kick-bass.mp3");
	audio.play();
	
	break;
case "l":
	var audio=new Audio(" snare.mp3");
	audio.play();
	
	break;
	
default : console.log(key);
 }
 }
function buttonAnimation(currentKey)
{
var activeButton=document.querySelector("."+currentKey);
activeButton.classList.add("pressed");
setTimeout(function(){
activeButton.classList.remove("pressed");
}, 100);
}