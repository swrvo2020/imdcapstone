// Select image change button
var sceneChangeButton = document.querySelector('.scene-change');
const nextImg = document.querySelector('#next-button');
const prevImg = document.querySelector('#back-button');

// Query select background img tag
const selectBG = document.querySelector('#background-img');
const selectScreenImg = document.querySelector('.screen-container');

// Query select scene info
const selectSceneNumber = document.querySelector('.scene-number');
const selectSceneTitle = document.querySelector('.scene-title');
const selectSceneDesc = document.querySelector('.scene-description');

// VR toggle
const vrToggle = document.querySelector('.vr-toggle');
const withVRSelect = document.querySelector('#with-vr');
const withoutVRSelect = document.querySelector('#without-vr');

// Number of scenes
const sceneLength = 21;



switch (index) {
  case 0:

}

// sceneImg only contains img srcs
var sceneImg = [
  'url(\'scenes/scene-1A-B.jpg\')',
  'url(\'scenes/scene-1C-A.jpg\')',
  'url(\'scenes/scene-2A-A.jpg\')',
  'url(\'scenes/scene-2B-A.jpg\')',
  'url(\'scenes/scene-2E-C.jpg\')',
  'url(\'scenes/scene-3B-B.jpg\')',
  'url(\'scenes/Uber-Elevate.jpg\')'
];

// sceneTitle contains an array of strings
var sceneTitles = [

  // test index
  // ['Chapter 0 Title 0', 'Chapter 0 Title 1'],
  // ['Chapter 1 Title 0', 'Chapter 1 Title 1'],
  // ['Chapter 2 Title 0', 'Chapter 2 Title 1', 'Chapter 2 Title 2'],

  // Chapter 0
  ['Waking Up', 'Check Your Phone'],

  // Chapter 1
  ['Opens UAM App', 'Checks Time & Pricing for UAM', 'Orders UAM Service'],

  // Chapter 2
  ['Get Picked Up'],

  // Chapter 3
  ['Check the Flight', 'Checks Pilot Information', 'User Arrives at Station'],

  // Chapter 4
  ['Going Through Security (Scans Ticket)'],

  // Chapter 5
  ['User is Guided Through Terminal'],

  // Chapter 6
  ['User Arrives at Terminal Gate & Checks Ticket'],

  // Chapter 7
  ['Choose Your Ride'],

  // Chapter 8
  ['Rate Your Service']
];

var sceneDescriptions = [
  // test arrays
  // ['Title 0  Desc 0', 'Title 0  Desc 1'],
  // ['Title 1  Desc 0', 'Title 1  Desc 1'],
  // ['Title 2  Desc 0', 'Title 2  Desc 1', 'Title 2  Desc 2'],
  // ['Title 3  Desc 0', 'Title 3  Desc 1', 'Title 3  Desc 2', 'Title 3  Desc 3']

  // 'Waking Up'
  [
    'As you wake up in the morning, you check your phone to find what time it is.',
    'Recognizing that you are late to an important meeting, you quickly log on to a ride-hailing service to order a lift.'
  ],

  // Check Your phone
  ['You open up your phone.'],

  // 'Opens UAM App'
  ['You see that there are multiple options for riding hailing services. Choose an option that can get you to the meeting on time.'],

  // 'Checks Time & Pricing for UAM'
  ['The UAM is a premium services costing $____.___. However, it seems like you don\'t have much of a choice this morning'],

  // 'Orders UAM Service'
  ['You can order the UAM service just like any other ride hailing requests.'],

  // 'Get Picked Up'
  ['Once it\'s ordered, you can walk over to the pick up location where a driver will take you to the station.'],

  // 'Check the Flight'
  ['While you are on your way to the station, check on the flight details.'],

  // 'Checks Pilot Information'
  ['You can also check on your pilot for the ride to ensure that the best experience is secured.'],

  // 'User Arrives at Station'
  ['Now, you\'ve arrived at your station.'],

  // 'Going Through Security (Scans Ticket)'
  ['Make sure to have your app open to move through the security check-ins swiftly.'],

  // 'User is Guided Through Terminal'
  ['You will be guided through the UAM station through your app'],

  // 'User Arrives at Terminal Gate & Checks Ticket'
  ['You\'ve arrived at your gate. Scan your order request and the usher will guide you to the take-off zone.'],

  // Choose Your Ride
  ['Congratulations! You\'ve arrived at your destination station. Now, the ride hailing service will be waiting for you at the entrance to help you get through the last mile.'],

  // 'Rate Your Service'
  ['Make sure to rate the service and provide any feedback for improvements in the next ride. See you next time!']
];

// Create an array for all scenes
var scenes = new SceneData(sceneImg, sceneTitles, sceneDescriptions);

function SceneData(img, title, desc) {

  //initializing data arrays
  this.img = img;
  this.title = title;
  this.desc = desc;

  // return scene img src based on index
  this.getImg = function(index) {
    return this.img[index];
  };

  // load new image
  this.loadNewImg = function(index) {
    selectBG.style.backgroundImage = this.getImg(index);
  };

  // return scene title based on index
  this.getTitle = function() {
    return this.title;
  };

  // load new title
  this.loadNewTitle = function(chapter, scene) {
    selectSceneTitle.innerHTML = this.getTitle()[chapter][scene];
  };

  // return scene description based on index
  this.getDesc = function() {
    return this.desc;
  };

  // load new image
  this.loadNewDesc = function(scene, index) {
    selectSceneDesc.innerHTML = this.getDesc()[scene][index];
  };

};

// Current scene location
var chapterIndex = 0;
var titleIndex = 0;
var descIndex = 0;

var chatperLength = 0;
var descLength = 0;

var count = 0;

// abc is used to see where the indexes are located;
var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];

function changeScene() {

  // grab the length of the scene data arrays
    descLength = scenes.getDesc()[titleIndex].length;
    chapterLength = scenes.getTitle()[chapterIndex].length;

  // initializing sceneTitle; used only the first time user clicks 'next'
  if(count == 0) {
    scenes.loadNewTitle(0, 0);
    scenes.loadNewDesc(0, 0);
    scenes.loadNewImg(0);

    selectSceneNumber.innerHTML = "";

    // var element = document.getElementByClass("screen-image");
    selectScreenImg.classList.remove("hidden");
    console.log("remove");

    count++; // add to count so it won't trigger again

    // debug
    console.log('initialize screen');
    console.log('Chapter: ' + chapterIndex + "\nTitle: " + titleIndex + "\nDescription: " + descIndex);

    return; // exit

  }

  // if the descIndex is within the array
  if(descIndex < (descLength - 1)) {

    descIndex++ // move descIndex to next
    scenes.loadNewDesc(titleIndex, descIndex); // change the description at new descIndex
    scenes.loadNewImg(chapterIndex);
    console.log('new description');

    // if the descIndex goes out of the array
  } else {

    descIndex = 0; // reset the index to 0

    // and if the titleIndex is within the chapterLength
    if(titleIndex < (chapterLength - 1)) {

      titleIndex++; // move titleIndex to next
      scenes.loadNewTitle(chapterIndex, titleIndex); // change the title at the new titleIndex
      scenes.loadNewDesc(titleIndex, descIndex); // change the description at new descIndex
      descIndex++;

      console.log('new title');

      // if the titleIndex goes out of the array
    } else {

      titleIndex = 0; // reset the titleIndex to 0

      // and if the chapterIndex is within the length of the chapter array
      if(chapterIndex < (scenes.getTitle().length - 1)) {

        chapterIndex++; // move chapterIndex to next
        scenes.loadNewImg(chapterIndex); // load new img at the new chapterIndex

        console.log('new chapter');
      }
    }
  }

  // debug
  console.log('Chapter: ' + chapterIndex + "\nTitle: " + titleIndex + "\nDescription: " + descIndex);
}

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
