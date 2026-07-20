window.onload = function (){
  setTimeout(function () {
    const gif = document.getElementById("introGif");
    const gifBackground = document.getElementById("introBackground")
    setTimeout(() =>{
        gif.remove();
        gifBackground.remove();
    }, 1000);
  }, 2500)  
};