/*
 * 👋 Hello! This is an ml5.js example made and shared with ❤️.
 * Learn more about the ml5.js project: https://ml5js.org/
 * ml5.js license and Code of Conduct: https://github.com/ml5js/ml5-next-gen/blob/main/LICENSE.md
 *
 * This example demonstrates drawing skeletons on poses for the MoveNet model.
 */

let video;
let bodyPose;
let poses = [];
let connections;

let predefined = ["💼", "🎓", "❤️", "📚", "📝", "⏳", "🏃‍♂️", "📆", "🧑‍🧑‍🧒‍🧒", "🗳️"];

function preload() {
  // Load the bodyPose model
  bodyPose = ml5.bodyPose();
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create the video and hide it
  video = createCapture(VIDEO);
  video.size(windowWidth, windowHeight);
  video.hide();

  // Start detecting poses in the webcam video
  bodyPose.detectStart(video, r => poses = r);
  // Get the skeleton connection information
  connections = bodyPose.getSkeleton();
  
  world.gravity.y = 10;
  
  colours = [
    color(130, 211, 27),
    color(255, 204, 0),
    color(18, 150, 224),
    color(252, 183, 27)
  ]
  
  lines = new Group()
  
  floor = new Sprite(0, windowHeight -2, windowWidth * 2, 5, 'static');
  
  stressors = ["💼", "🎓", "❤️", "📚", "📝", "⏳", "🏃‍♂️", "📆", "🧑‍🧑‍🧒‍🧒", "🗳️"]
}

let c;
let colours;
let flag = false;

let lines;

let stressors;

function draw() {  
  if(poses.length == 0 && !flag) {
    c = random(colours);
    flag = true;
  } else if (poses.length > 0) {
    flag = false;
  }
  if(random(100) > 50) {
    ball = new Sprite(random(windowWidth), 0, 100);
    ball.textSize = 40;
    ball.text = random(stressors);
    ball.collides(lines, ball => {
      ball.vel.y = -45;
    })
  }
  
  background(c);
  
  for (let i = 0; i < lines.length; i++) {
    lines[i].remove()
  }
  // Draw the skeleton connections
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i];
    for (let j = 0; j < connections.length; j++) {
      let pointAIndex = connections[j][0];
      let pointBIndex = connections[j][1];
      let pointA = pose.keypoints[pointAIndex];
      let pointB = pose.keypoints[pointBIndex];
      // Only draw a line if both points are confident enough
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

async function updateStressors() {
  stressors = [...predefined, ...(await fetch("https://api2.hackclub.com/v0.1/SlashZSamPoder/Submissions")
                    .then(r => r.json())
                    .then(r => r.map(s => (s["fields"].Emoji))))]
  console.log("refreshed emojis:")
  console.log(stressors)
}

setInterval(updateStressors, 10000);