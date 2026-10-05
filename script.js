const bgm = new Audio('/assets/audio/dark.mp3');

document.getElementById("enter").addEventListener('click' , function(){
    bgm.play();
    document.querySelector('.contant').style.display = "none";
    document.querySelector('.time').style.display = "block";
    requestAnimationFrame(()=>{
 document.querySelector('.time').style.opacity = "1";
    });
   
});
 
const txt1 = "There is no escape once you enter.";
let i = 0;
function Type(text, length){
    if(i< length){
        document.getElementById("text1").textContent += text.charAt(i);
        i++;
        setTimeout(Type, 70)
    }
   
}
 Type(txt1,txt1.length);