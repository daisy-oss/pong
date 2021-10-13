img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;
function setup(){
    
    canvas=createCanvas(1240,336);
    canvas.parent('canvas');
    instializeInSetup(mario);
    video=createCapture(VIDEO);
	video.size(600,300);
  video.parent('game_console');
	poseNet=ml5.poseNet(video,modalLoaded);
	poseNet.on('pose',gotposes);
}


function draw(){
    game()
    if(noseX<300){
        marioX=marioX-1;
      }
      if(noseX>300){
        marioX=marioX+1;
      }
      if(noseY<150){
        marioY= marioY-1;
      }
      if(noseY>150){
        marioY= marioY+1;
      }
}
function preload(){
    world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}
function modalLoaded(){
	console.log("Started");
  }
  function gotposes(resuts,error){
	if(resuls.length>0){
	  noseX=resuts[0].nose.x;
	   noseY=resuts[0].nose.y
	  console.log(noseX,noseY);
	}
  }
  

