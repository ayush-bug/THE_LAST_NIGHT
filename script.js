const bgm = new Audio('/assets/audio/dark.mp3');

 
const txt1 = "There is no escape once you enter.";
let i = 0;
function Type(text,ele) {
    let i = 0;
    function write() {
        if (i < text.length) {
           ele.textContent += text.charAt(i);
            i++;
            setTimeout(write, 70);
        }
    }
    write();
}



document.getElementById("enter").addEventListener('click' , function(){
    bgm.play();
    document.querySelector('.contant').style.display = "none";
    document.querySelector('.time').style.display = "block";
    requestAnimationFrame(()=>{
 document.querySelector('.time').style.opacity = "1";
    });
    document.querySelector('.story').style.display = "block";
   Type(txt1, document.getElementById("text1"));
});

document.getElementById("next").addEventListener('click', function(){
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").style.display = "block";
     const nextText = "you can only escape if you can finish all the levels !!!";
    Type(nextText, document.getElementById("text2"));
    document.getElementById("next").style.display = "none";
    document.getElementById("ready").style.display = "block";
});

document.getElementById("ready").addEventListener('click' , function(){
   const txt2 = "so are you ready ??"
    document.getElementById("text2").style.display = "none";
   document.getElementById("text3").style.display = "block";
   
    Type(txt2, document.getElementById("text3"));
    document.getElementById("ready").style.display = "none";
    document.getElementById("yeah").style.display = "block";
});

document.getElementById("yeah").addEventListener('click' , function(){
    document.querySelector('.story').style.display = "none";
    document.querySelector('.time').style.display = "none";
    document.querySelector(".mission").style.display = "grid";
});
