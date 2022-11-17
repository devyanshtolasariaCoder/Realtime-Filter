function preload(){

}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center()
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
   
}
function draw(){
    image(video,0,0,300,300)
}
function modelLoaded(){
    console.log('PoseNet Is Initialised');
}
function take_snapshot(){
   save('student_name.png');
}


function gotPoses(results)
    {
        if(results.length > 0 )
        {
            console.log("mustache x = " + results[0].pose.mustache.x);
            console.log("mustache y = "+ results[0].pose.mustache.y);
        }
    }
