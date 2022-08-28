palmX=0;
palmY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(500, 476);
    canvas.position(560,80);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded() {
    console.log('poseNet Is Initialized');
}


function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        palmX = results[0].pose.palm.x;
        palmY = results[0].pose.palm.y;
        console.log("palmX =" + palmX +"palmY ="+ palmY)
          
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

       

    }

    }


function draw() {
    background('#969A97');

    document.getElementById("square_side").innerHTML = "Width and Height of a Square will be = " + difference +"px";
    fill('#F90093');
    text('Next Gen Coder', 50,400);
    
} 