// VR toggle
const vrToggle = document.querySelector('.vr-toggle');
const withVRSelect = document.querySelector('#with-vr');
const withoutVRSelect = document.querySelector('#without-vr');

// Number of scenes
const sceneLength = 15;

function SceneData(img, phone, title, desc) {

  //initializing data arrays
  this.img = img;
  this.phone = phone;
  this.title = title;
  this.desc = desc;

  // return scene img src based on index
  this.getImg = function() {
    return this.img;
  };

  // return scene title based on index
  this.getTitle = function() {
    return this.title;
  };

  // return scene description based on index
  this.getDesc = function() {
    return this.desc;
  };

  // set scenes
  this.setScene = function(newImg, newPhone, newTitle, newDesc) {
    this.img = newImg;
    this.phone = newPhone;
    this.title = newTitle;
    this.desc = newDesc;
  }

  this.loadNewImg = function() {
    $('body').css('background-image', this.img);
  }

  this.loadNewPhone = function() {
    $('.screen-image').attr('src', this.phone);
  }

  this.loadNewData = function() {
    $('.scene-title').text(this.title);
    $('.scene-description').text(this.desc);
  }

};

// Create an array for all scenes
var scenes = new SceneData(
  'url(\'scenes/start.jpg\')',
  '',
  'Introducing SWRVO',
  'Welcome to the Urban Air Mobility web simulation. To get started, press the next button to continue.'
);

function ChooseScene(index) {

  var newSrc, newPhone, newTitle, newDesc;

  switch (index) {

    case 0:
      newSrc =  'url(\'scenes/scene-1A-B.jpg\')';
      newPhone = 'non.png';
      newTitle = 'Waking Up';
      newDesc = 'As you wake up in the morning, you check your phone to find what time it is.';
      scenes.setScene(newSrc, newPhone, newTitle, newDesc);
      break;

    case 1:
      newSrc =  'url(\'scenes/scene-1A-B.jpg\')';
      newPhone = 'non.png';
      newTitle = 'Waking Up';
      newDesc = 'Recognizing that you are late to an important meeting, you quickly log on to a ride-hailing service to order a lift.';
      scenes.setScene(newSrc, newPhone, newTitle, newDesc);
      break;

    case 2:
      newSrc =  'url(\'scenes/scene-1C-A.jpg\')';
      newPhone = 'scenes/screens/opening-screen.png';
      newTitle = 'Check Your Phone';
      newDesc = 'You open up your phone.';
      scenes.setScene(newSrc, newPhone, newTitle, newDesc);
      break;

    case 3:
      newSrc =  'url(\'scenes/scene-1C-A.jpg\')';
      newPhone = 'scenes/screens/choosing-ride.png';
      newTitle = 'Opens UAM App';
      newDesc = 'You see that there are multiple options for riding hailing services. Choose an option that can get you to the meeting on time.';
      scenes.setScene(newSrc, newPhone, newTitle, newDesc);
      break;

    case 4:
      newSrc =  'url(\'scenes/scene-1C-A.jpg\')';
      newPhone = 'scenes/screens/requesting-ride.png';
      newTitle = 'Checks Time & Pricing for UAM';
      newDesc = 'The UAM is a premium services costing $____.___. However, it seems like you don\'t have much of a choice this morning';
      scenes.setScene(newSrc, newPhone, newTitle, newDesc);
      break;

    case 5:
      newSrc =  'url(\'scenes/scene-1C-A.jpg\')';
      newPhone = 'scenes/screens/confirm-ride.png';
      newTitle = 'Orders UAM Service';
      newDesc = 'You can order the UAM service just like any other ride hailing requests.';
      scenes.setScene(newSrc, newPhone, newTitle, newDesc);
      break;

    case 6:
      newSrc =  'url(\'scenes/scene-2A-A.jpg\')';
      newPhone = 'scenes/screens/pickup-zone-instruction.png';
      newTitle = 'Get Picked Up';
      newDesc = 'Once it\'s ordered, you can walk over to the pick up location where a driver will take you to the station.';
      scenes.setScene(newSrc, newPhone, newTitle, newDesc);
      break;

    case 7:
      newSrc =  'url(\'scenes/scene-2B-A.jpg\')';
      newPhone = 'scenes/screens/enroute.png';
      newTitle = 'Check the Flight';
      newDesc = 'While you are on your way to the station, check on the flight details.';
      scenes.setScene(newSrc, newPhone, newTitle, newDesc);
      break;

    case 8:
      newSrc =  'url(\'scenes/scene-2B-A.jpg\')';
      newPhone = 'scenes/screens/pilot-information.png';
      newTitle = 'Checks Pilot Information';
      newDesc = 'You can also check on your pilot for the ride to ensure that the best experience is secured.';
      scenes.setScene(newSrc, newPhone, newTitle, newDesc);
      break;

    case 9:
      newSrc =  'url(\'scenes/scene-2B-A.jpg\')';
      newPhone = 'scenes/screens/arrived.png';
      newTitle = 'User Arrives at Station';
      newDesc = 'Now, you\'ve arrived at your station.';
      scenes.setScene(newSrc, newPhone, newTitle, newDesc);
      break;

    case 10:
      newSrc =  'url(\'scenes/scene-2E-C.jpg\')';
      newPhone = 'scenes/screens/e-ticket.png';
      newTitle = 'Going Through Security (Scans Ticket)';
      newDesc = 'Make sure to have your app open to move through the security check-ins swiftly.';
      scenes.setScene(newSrc, newPhone, newTitle, newDesc);
      break;

    case 11:
      newSrc =  'url(\'scenes/scene-2E-B.jpg\')';
      newPhone = 'scenes/screens/flight-alert.png';
      newTitle = 'User is Guided Through Terminal';
      newDesc = 'You will be guided through the UAM station through your app';
      scenes.setScene(newSrc, newPhone, newTitle, newDesc);
      break;

    case 12:
      newSrc =  'url(\'scenes/scene-3B-B.jpg\')';
      newPhone = 'scenes/screens/flight-alert.png';
      newTitle = 'User Arrives at Terminal Gate & Checks Ticket';
      newDesc = 'You\'ve arrived at your gate. Scan your order request and the usher will guide you to the take-off zone.';
      scenes.setScene(newSrc, newPhone, newTitle, newDesc);
      break;

    case 13:
      newSrc =  'url(\'scenes/Uber-Elevate.jpg\')';
      newPhone = '';
      newTitle = 'Choose Your Ride';
      newDesc = 'Congratulations! You\'ve arrived at your destination station. Now, the ride hailing service will be waiting for you at the entrance to help you get through the last mile.';
      scenes.setScene(newSrc, newPhone, newTitle, newDesc);
      break;

    case 14:
      newSrc =  'url(\'scenes/Uber-Elevate.jpg\')';
      newPhone = 'scenes/screens/rate.png'
      newTitle = 'Rate Your Service';
      newDesc = 'Make sure to rate the service and provide any feedback for improvements in the next ride. See you next time!';
      scenes.setScene(newSrc, newPhone, newTitle, newDesc);
      break;

    default:
    console.log("case complete");
  }
};

// next & back button
var indexCount = 0;

// $('#next-button').on('mouseover', function() {
//
//   console.log('hover on');
//
//   $(this).animate({
//     padding: '-=2px',
//     margin: '+=2px'
//   }, 100, 'linear');
// });
//
// $('#next-buton').mouseout(function() {
//
//   console.log('hover off');
//
//   $('#next-button').animate({
//     padding: '-=2px',
//     margin: '+=2px'
//   }, 100, 'linear');
// })

$('#next-button, #back-button').mouseover(function() {
  console.log('hover on');

  $(this).animate({
    padding: '-=2px',
    margin: '+=2px'
  }, 50, 'linear')

}).mouseout(function() {
  console.log('hover off');

  $(this).animate({
    padding: '+=2px',
    margin: '-=2px'
  }, 50, 'linear');
})


$('#next-button').on('click', function() {

  console.log(indexCount);

  $(this).animate({
    padding: '-=3px',
    margin: '+=3px'
  }, 25, 'linear', function() {
    $(this).animate({
      padding: '+=3px',
      margin: '-=3px'
    })
  })

  if(indexCount == 0) {
    $('.screen-container').addClass('fade-from-left');
    $('.screen-container').removeClass('hidden');
    $('.scene-number').addClass('hidden');
  };

  if(indexCount == 1) {
    $('#back-button').removeClass('hidden');
  }

  if(indexCount < sceneLength) {

    ChooseScene(indexCount);
    scenes.loadNewImg();
    scenes.loadNewPhone();

    $('.scene-info').animate({
      'opacity': 0,
    }, 300, 'linear', function() {

       scenes.loadNewData();

       $('.scene-info').animate({
         'opacity': 1,
       }, 300, 'linear');

    });

    indexCount++;

  } else {
    console.log('the case is outside of the boundaries!');
  };
});

$('#back-button').on('click', function() {

  console.log(indexCount);

  $(this).animate({
    padding: '-=3px',
    margin: '+=3px'
  }, 25, 'linear', function() {
    $(this).animate({
      padding: '+=3px',
      margin: '-=3px'
    })
  })

  if(indexCount > 0) {
    indexCount--;
    ChooseScene(indexCount);
    scenes.loadNewImg();
    scenes.loadNewPhone();
    scenes.loadNewData();
  } else {
    console.log('the case is outside of the boundaries!');
  };

});

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
vrToggle.onclick = sceneToggle;
