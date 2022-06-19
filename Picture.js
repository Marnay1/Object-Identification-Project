status= "";
objects= [];
function preload(){
    img= loadImage("Pictures.jpg");
}
function setup(){
    canvas= createCanvas(640, 400);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status : Detecting Objects";
}
function draw(){
    image(img, 0, 0, 640, 400);
    if(status != ""){
        for (i=0; i< objects.length; i++){
            document.getElementById("objects_there").innerHTML= "There are six identified objects in this picture and cocossd identified " + objects.length +"objects"; 
            confidence= floor(objects[i].confidence * 100);
            label= objects[i].label;
            fill("blue");
            text(label+ " "+ confidence + "%", objects[i].x +20, objects[i].y + 20);
            noFill();
            stroke("blue");
            rect(objects[i].width, objects[i].height, objects[i].x, objects[i].y);
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