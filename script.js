var $btn = $(".play");
var $btn2 = $(".mute")
var video = $(".myVideo").get(0);
var mute = $(".myVideo").prop('muted',true);

$btn.on("click", function(){
    if (video.paused){
        video.play();
    } else{
        video.pause();
    }
});

$btn2.on("click",function(){
    if(video.muted){
        $(".myVideo").prop('muted',false)
    } else{
        $(".myVideo").prop('muted',true)
    }
});