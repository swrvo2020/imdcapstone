var test = document.querySelector('.change-picture');

var scenes = ["url('/assets/car.jpg')", "url('/assets/tesla.jpg')", "url('assets/tesla-1.jpg')"];
var sceneLength = scenes.length;
var imageSwitch = 0;

var sceneLocation = (imageSwitch + 1) + "/" + sceneLength;

function changePicture() {
  console.log('clicked');

  document.querySelector('#background-img').style.backgroundImage = scenes[imageSwitch];
  document.querySelector('.scene-number').innerHTML = sceneLocation;

  if (imageSwitch >= (sceneLength - 1)) {
    console.log("imageScene restarts at " + imageSwitch);
    imageSwitch = 0;
    sceneLocation = (imageSwitch + 1) + "/" + sceneLength;
  } else {
    console.log("imageScene is at " + imageSwitch);
    imageSwitch++;
    sceneLocation = (imageSwitch + 1) + "/" + sceneLength;
  };
};

test.onclick = changePicture;
