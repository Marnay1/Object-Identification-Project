status= "";
function preload(){
    img= loadImage("Scarf_Rack.jpg");
}
function setup(){
    canvas= createCanvas("640, 340");
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status : Detecting Objects";
}
function draw(){
    img(img, 0, 0, 640, 340);
}
function modelLoaded(){
    console.log("Model Loaded");
    status= true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if (error){
        console.log(error);
    }
    console.log(results);
}