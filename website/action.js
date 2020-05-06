// Select image change button
const selectImgChange = document.querySelector('.change-button');

// Query select background img tag
const selectBG = document.querySelector('#background-img');

// Query select scene info
const selectSceneNumber = document.querySelector('.scene-number');
const selectSceneTitle = document.querySelector('.scene-title');
const selectSceneDesc = document.querySelector('.scene-description');

// Number of scenes
const sceneLength = 6;


// SceneData Constructor contains everything that needs to change per scene
function SceneData(sceneList, sceneTitle, sceneDesc, imgSource) {
  this.sceneList = sceneList;
  this.sceneTitle = sceneTitle;
  this.sceneDesc = sceneDesc;
  this.imgSource = imgSource;

  this.getImgSource = function() {
    return this.imgSource;
  }

  this.getTitle = function() {
    return this.sceneTitle;
  }

  this.getDesc = function() {
    return this.sceneDesc;
  }
};

// Create an array for all scenes
var scenes = new Array();

// Push all the scenes
for (var i = 0; i < sceneLength; i++) {
  var pushScene = new SceneData(i, "This is scene " + i, "This is what happens in scene " + i, "url('/scenes/scene-" + i + ".jpg')")
  scenes.push(pushScene);
};

// Current scene location
var imageSwitch = 0;

function loadNewScene(imageSwitch) {
  // swap out sceneData
  selectBG.style.backgroundImage = scenes[imageSwitch].getImgSource();
  selectSceneTitle.innerHTML = scenes[imageSwitch].getTitle();
  selectSceneDesc.innerHTML = scenes[imageSwitch].getDesc();
  selectSceneNumber.innerHTML = imageSwitch + "/" + sceneLength;
}

// when changeScene() button is clicked
function changeScene() {
  console.log("currently: " + imageSwitch);
  loadNewScene(imageSwitch);

  // if imageSwitch is less than the sceneLength
  if (imageSwitch < (sceneLength - 1)) {
    //  ++
    imageSwitch++;
  } else {
    // restart from zero
    imageSwitch = 0;
  };
  console.log("Now: " + imageSwitch);
};



// call the changeScene function
selectImgChange.onclick = changeScene;
