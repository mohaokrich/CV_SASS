var click = 0;
function darkMode() {
    click++;
    if(click === 1){
        $('#image-cv').attr('src',"./img/foto-cv2-luz2.png");
        $(".lado-derecho").css({background:'#444440', color: 'white'});
        $(".lado-izquierdo").css({background:'#162742'});
        $("h1").css({color:'#162742'});
        $("h4").css({color:'white'});
        $("h5").css({color:'#D0D0D0'}); 
    }else if(click === 2){   
        $('#image-cv').attr('src',"./img/foto-cv2.jpeg");
        $(".lado-derecho").css({background:"", color: ""});
        $(".lado-izquierdo").css({background:''});
        $("h1").css({color:''});
        $("h4").css({color:''});
        $("h5").css({color:''}); 
        click = 0;
    }
}
function dilexicMode() {
    var element = document.getElementsByClassName("lado-derecho")[0];
    element.classList.toggle("dark-mode");
  }