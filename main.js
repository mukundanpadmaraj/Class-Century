var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition()

function start(){
    document.getElementById("told_text").innerHTML=""
    recognition.start()
}
recognition.onresult=function(event){
    console.log(event)
    var content=event.results[0][0].transcript
    document.getElementById("told_text").innerHTML=content
    if(content=="take my selfie"){
        speak();
        console.log("taking selfie")
    }
    Webcam.attach(camera)
}
function speak(){
    var synth=window.speechSynthesis
    told_text_data="taking your selfie in 5 seconds"
    utterThis=new SpeechSynthesisUtterance(told_text_data)
    synth.speak(utterThis)
    setTimeout(function(){
        takesnapshot()
        save()
    },5000)
}
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src="+data_uri+">"
    })
}
Webcam.set({
    width:320,
    height:180,
    image_format:"png",
    png_quality:0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001
})
camera=document.getElementById("camera")

function save(){
    link=document.getElementById("link")
    image=document.getElementById("captured_image").src
    link.href=image
    link.click()
}