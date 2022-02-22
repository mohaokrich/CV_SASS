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
var click2 = 0;
function dilexicMode() {
    click2++;
    if(click2 === 1){
      var fuente = new FontFace('OpenDyslexic-Regular', 'url(./font/OpenDyslexic-Regular.otf)');
    $("h1,h2,h3,h4,h5,h6,ul,li").css({fontFamily:"OpenDyslexic-Regular"});
    }else if(click2 === 2){
    $("h1,h2,h3,h4,h5,h6,ul,li").css({fontFamily:""});
     click2 = 0;
    }
}