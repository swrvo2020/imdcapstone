// Select image change button
var sceneChangeButton = document.querySelector('.scene-change');
const nextImg = document.querySelector('#next-button');
const prevImg = document.querySelector('#back-button');

// Query select background img tag
const selectBG = document.querySelector('#background-img');

// Query select scene info
const selectSceneNumber = document.querySelector('.scene-number');
const selectSceneTitle = document.querySelector('.scene-title');
const selectSceneDesc = document.querySelector('.scene-description');

// VR toggle
const vrToggle = document.querySelector('.vr-toggle');
const withVRSelect = document.querySelector('#with-vr');
const withoutVRSelect = document.querySelector('#without-vr');

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
  var pushScene = new SceneData(i, "This is scene " + (i + 1), "This is what happens in scene " + (i + 1), "url('scenes/scene-" + i + ".jpg')")
  scenes.push(pushScene);
};

// Current scene location
var imageSwitch = 0;

function loadNewScene(imageSwitch) {
  // swap out sceneData
  selectBG.style.backgroundImage = scenes[imageSwitch].getImgSource();
  selectSceneTitle.innerHTML = scenes[imageSwitch].getTitle();
  selectSceneDesc.innerHTML = scenes[imageSwitch].getDesc();
  selectSceneNumber.innerHTML = (imageSwitch + 1) + "/" + sceneLength;
}

// when changeScene() button is clicked
function changeScene() {

  // if you click next
  nextImg.onclick = function() {
    imageSwitch++; // move image switch +1

    // if it hits scene 3
    if(imageSwitch == 3) {
      placeScene(true); // place the vr toggle
    } else {
      placeScene(false); // hide the vr toggle, once you move past
    }

    // if the imageSwitch goes beyond the number of screens
    if(imageSwitch > (sceneLength - 1)) {
      imageSwitch = 0; // restart at 0
    }
  };

  // if you click prev
  prevImg.onclick = function() {
    imageSwitch--; // move image switch -1

    // if it hits scene 3
    if(imageSwitch == 3) {
      placeScene(true); // place the vr toggle
    } else {
      placeScene(false); // hide the vr toggle, once you move past
    }

    // if the imageSwitch goes before the number of screens
    if(imageSwitch < 0) {
      imageSwitch = (sceneLength - 1); // restart from top; obsolete once all screens are in
    }
  };

  loadNewScene(imageSwitch); // load new screen
};

// unhide the scene toggle
function placeScene(toggle) {
  const selectPlaceScene = document.querySelector('#place-scene');

  if (toggle == true) {
    selectPlaceScene.classList.remove("hidden");
  } else {
    selectPlaceScene.classList.add("hidden");
  }
}

// if sceneToggle elements are clicked
function sceneToggle() {

  withVRSelect.onclick = function() {
    console.log("vr selected")
    vrToggleSelect = true;
    imageSwitch = 4;
    loadNewScene(imageSwitch);
    placeScene(false);
  };

  withoutVRSelect.onclick = function() {
    console.log("without vr selected")
    vrToggleSelect = false;
    imageSwitch = 5;
    loadNewScene(imageSwitch);
    placeScene(false);
  };
}

// check which element is clicked
var vrToggleSelect = false;




// call the changeScene function
sceneChangeButton.onclick = changeScene;
vrToggle.onclick = sceneToggle;
