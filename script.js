const bgm = new Audio('/assets/audio/dark.mp3');

document.getElementById("enter").addEventListener('click' , function(){
    bgm.play();
})