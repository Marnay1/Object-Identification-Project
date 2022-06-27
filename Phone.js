status= "";
objects= [];
function preload(){
    img= loadImage("th.jpg");
}
function setup(){
    canvas= createCanvas(640, 400);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status : Detecting Objects";
}
function draw(){
    image(img, 0, 0, 100, 200);
    if(status != ""){
        for (i=0; i< objects.length; i++){
            document.getElementById("objects_there").innerHTML= "There is one identified object in this picture and cocossd identified " + objects.length +" object"; 
            confidence= floor(objects[i].confidence * 100);
            label= objects[i].label;
            fill("blue");
            text(label+ " "+ confidence + "%", objects[i].x +20, objects[i].y + 20);
            noFill();
            stroke("blue");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
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
    objects= results;
}