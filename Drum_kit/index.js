var numberofbuttons=document.querySelectorAll(".drum").length;

for(var i=0;i<numberofbuttons;i++){
  
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var st=this.innerHTML;
    play(st);
    animate(st);
  });
}



function play(dsound) {
  //console.log(this.innerHTML);
//  var st=this.innerHTML;
 // console.log(st);
//    this.style.color="red";
 
    switch(dsound){
         case "a" : var audio = new Audio("sounds/crash.mp3");
         audio.play();
         break;
         case "w": var audio = new Audio("sounds/kick-bass.mp3");
         audio.play();
         break;
         case "s" : var audio = new Audio("sounds/sample-9s.mp3");
         audio.play();
         break;
         case "d" : var audio = new Audio("sounds/snare.mp3");
         audio.play();
         break;
         case "j" : var audio = new Audio("sounds/tom-1.mp3");
         audio.play();
         break;
         case "k" : var audio = new Audio("sounds/tom-2.mp3");
         audio.play();
         break;
         case "l" : var audio = new Audio("sounds/tom-4.mp3");
         audio.play();
         break;
    }
    return;

  }


  function animate(currentkey){
    var activebrn=document.querySelector("." +currentkey)
    activebrn.classList.add("pressed");
    return;
  }


    
      document.querySelector("body").addEventListener("keydown",function(event){
         console.log(event.key);
         var dm1=event.key;
         play(dm1);
         animate(dm1)

      });

      