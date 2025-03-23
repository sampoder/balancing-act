let video;
let bodyPose;
let poses = [];
let connections;

let predefined = ["💼", "🎓", "❤️", "📚", "📝", "⏳", "🏃‍♂️", "📆", "🧑‍🧑‍🧒‍🧒", "🗳️"]; // while we're waiting for emojis to load from the DB we use these

function preload() {
  bodyPose = ml5.bodyPose(); // Load the bodyPose model: https://docs.ml5js.org/#/reference/bodypose
}

function setup() {
  createCanvas(windowWidth, windowHeight); // fill the screen

  // Create the video and hide it, because 
  video = createCapture(VIDEO);
  video.size(windowWidth, windowHeight);
  video.hide();

  // Start detecting poses in the webcam video
  bodyPose.detectStart(video, r => poses = r);
  connections = bodyPose.getSkeleton();
  
  world.gravity.y = 10; // this is how the balls start falling
  
  colours = [
    color(130, 211, 27),
    color(255, 204, 0),
    color(18, 150, 224),
    color(252, 183, 27)
  ] // randomise the background colour
  
  lines = new Group()
  
  floor = new Sprite(0, windowHeight -2, windowWidth * 2, 5, 'static'); // this is how we stop the balls from falling through the floor!
  
  stressors = ["💼", "🎓", "❤️", "📚", "📝", "⏳", "🏃‍♂️", "📆", "🧑‍🧑‍🧒‍🧒", "🗳️"]
}

let c;
let colours;
let flag = false;

let lines;

let stressors;

function draw() {  
  if(poses.length == 0 && !flag) { // change the colour of the background when there's no one in the frame
    c = random(colours);
    flag = true;
  } else if (poses.length > 0) {
    flag = false;
  }
  if(random(100) > 50) { // maybe we draw a ball?
    ball = new Sprite(random(windowWidth), 0, 100);
    ball.textSize = 40;
    ball.text = random(stressors); // random emoji!
    ball.collides(lines, ball => {
      ball.vel.y = -45; // bounce up if it hits a skeleton line
    })
  }
  
  background(c);
  
  for (let i = 0; i < lines.length; i++) {
    lines[i].remove() // redraw the skeleton everytime
  }
  // draw the skeleton
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i];
    for (let j = 0; j < connections.length; j++) {
      let pointAIndex = connections[j][0];
      let pointBIndex = connections[j][1];
      let pointA = pose.keypoints[pointAIndex];
      let pointB = pose.keypoints[pointBIndex];
      // only draw a line if both points are confident enough
      if (pointA.confidence > 0.1 && pointB.confidence > 0.1) {
        stroke(0, 0, 0);
        strokeWeight(6);
        line = new lines.Sprite([[pointA.x, pointA.y], [pointB.x, pointB.y]]);
        line.color = 'black';
        line.collider = 'static';
      }
    }
  }
}

// we call this every 10 seconds
async function updateStressors() {
  stressors = [...predefined, ...(await fetch("https://api2.hackclub.com/v0.1/SlashZSamPoder/Submissions")
                    .then(r => r.json())
                    .then(r => r.map(s => (s["fields"].Emoji))))]
  console.log("refreshed emojis:")
  console.log(stressors)
}

setInterval(updateStressors, 10000);
