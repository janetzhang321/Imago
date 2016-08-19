angular.module('app.controllers', [])

  .controller('welcomeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('signInCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('signUpCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('profileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('leaderboardCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('cameraCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('pointsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('detailsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('rewardsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('friendsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('addToBucketListCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('shareCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('friend1Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('friend2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('friend3Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  .controller('friend4Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }])

  // .controller('GeoCtrl', function ($scope, $cordovaGeolocation, $ionicPlatform) {

  //   $ionicPlatform.ready(function () {

  //     // GET CURRENT POSITION ONLOAD
  //     var posOptions = { timeout: 10000, enableHighAccuracy: false };
  //     $cordovaGeolocation
  //       .getCurrentPosition(posOptions)
  //       .then(function (position) {
  //         $scope.lat = position.coords.latitude
  //         $scope.long = position.coords.longitude
  //         $scope.alt = position.coords.altitude
  //         $scope.head = position.coords.heading



  //         // WATCH POSITION OPTIONS
  //         var watchOptions = {
  //           timeout: 3000,
  //           enableHighAccuracy: false // may cause errors if true
  //         };

  //         // WATCH POSITION
  //         var watch = $cordovaGeolocation.watchPosition(watchOptions);
  //         watch.then(
  //           null,
  //           function (err) {
  //             $scope.error = err.message;
  //           },
  //           function (position) {
  //             $scope.lat = position.coords.latitude
  //             $scope.long = position.coords.longitude
  //             $scope.alt = position.coords.altitude
  //             $scope.head = position.coords.heading
  //           });


  //       }, function (err) {
  //         // error
  //         $scope.error = err.message;
  //       });


  //   });

  //   //  watch.clearWatch();
  //   //  // OR
  //   //  $cordovaGeolocation.clearWatch(watch)
  //   //    .then(function(result) {
  //   //      // success
  //   //      }, function (error) {
  //   //      // error
  //   //    });
  // })





  .controller('PictureCtrl', function ($scope, $cordovaCamera, $ionicPlatform, $state, $timeout, $stateParams) {

    $ionicPlatform.ready(function () {

      document.addEventListener("deviceready", function () {

        var options = {
          quality: 50,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          allowEdit: true,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 100,
          targetHeight: 100,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false,
          correctOrientation: true
        };

        $cordovaCamera.getPicture(options).then(function (imageData) {

          // redirects to points page
          $state.go('points');

          var image = document.getElementById('myImage');
          image.src = "data:image/jpeg;base64," + imageData;
        }, function (err) {
          // error
        });

      }, false);
    });
  })

  .controller('compassCtrl', function($scope, $cordovaDeviceOrientation, $ionicPlatform) {

  $ionicPlatform.ready(function () {

    $cordovaDeviceOrientation.getCurrentHeading().then(function(result) {
       var magneticHeading = result.magneticHeading;
       var trueHeading = result.trueHeading;
       var accuracy = result.headingAccuracy;
       var timeStamp = result.timestamp;

        $scope.magneticHeading = "magneticHeading: " + magneticHeading;
        $scope.trueHeading = "trueheading: " + trueHeading;
        $scope.accuracy = "accuracy: " + accuracy;
        $scope.timeStamp = "timeStamp: " + timeStamp;
    }, function(err) {
      // An error occurred
    });



    var options = {
      frequency: 3000,
      filter: true     // if frequency is set, filter is ignored
    }

    var watch = $cordovaDeviceOrientation.watchHeading(options).then(
      null,
      function(error) {
        // An error occurred
      },
      function(result) {   // updates constantly (depending on frequency value)
        var magneticHeading = result.magneticHeading;
        var trueHeading = result.trueHeading;
        var accuracy = result.headingAccuracy;
        var timeStamp = result.timestamp;

        $scope.magneticHeading = "magneticHeading: " + magneticHeading;
        $scope.trueHeading = "trueheading: " + trueHeading;
        $scope.accuracy = "accuracy: " + accuracy;
        $scope.timeStamp = "timeStamp: " + timeStamp;
      });


//    watch.clearWatch();
//    // OR
//    $cordovaDeviceOrientation.clearWatch(watch)
//      .then(function(result) {
//        // Success!
//      }, function(err) {
//        // An error occurred
//      });
//
//      }, false);
    })})


  .controller('MapCtrl', function ($scope, $cordovaGeolocation, $ionicPlatform, Imagos) {

    $scope.error = 'none';

    $ionicPlatform.ready(function () {

      var posOptions = { timeout: 10000, enableHighAccuracy: true };

      $cordovaGeolocation
        .getCurrentPosition(posOptions)
        .then(function (position) {
          // google maps configuration
          $scope.lat = position.coords.latitude;
          var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

          var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{
              featureType: 'poi',
              elementType: 'labels',
              stylers: [ { visibility: 'off' } ]
            }]
          };

          $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

          //Wait until the map is loaded
          google.maps.event.addListenerOnce($scope.map, 'idle', function () {
            console.log('map')

            //Insert


            /*
            How to find latlng on googlemaps:
                *when you have the place,
                *right click
                *choose What's here?
                *gives exact latlng
            */

            // IMAGOS
            Imagos.getLIU($scope.map);
            Imagos.getMmuseum($scope.map);
            Imagos.getDoyers($scope.map);
			Imagos.getEmpireState($scope.map);

            //Your location blue dot
            var marker = new google.maps.Marker({
              map: $scope.map,
              animation: google.maps.Animation.DROP,
              position: latLng,
              // overwrite icon style
              icon: {
                url: 'https://chadkillingsworth.github.io/geolocation-marker/images/gpsloc.png',
                //'size': new google.maps.Size(34, 34),
                'scaledSize': new google.maps.Size(17, 17),
                'origin': new google.maps.Point(0, 0),
                'anchor': new google.maps.Point(8, 8)
              },
              // This marker may move frequently - don't force canvas tile redraw
              'optimized': false,
              'zIndex': 2

            });

            //init pos

            var circleOpts = {
              'clickable': false,
              'radius': 100,
              'strokeColor': '1bb6ff',
              'strokeOpacity': .4,
              'fillColor': '61a0bf',
              'fillOpacity': .4,
              'strokeWeight': 1,
              'zIndex': 1,
              map: $scope.map,
              center: latLng
            };

            var circle = new google.maps.Circle(circleOpts);

            //refresh map

            var watchOptions = {
              timeout: 30000,
              enableHighAccuracy: true // may cause errors if true
            };

            var watch = $cordovaGeolocation.watchPosition(watchOptions);
            watch.then(
              null,
              function (err) {
                // error
                $scope.error = err.message;
              },
              function (position) {
                console.log('new position')
                function redraw() {
                  $scope.map.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude, alt: 0 })
                  marker.setPosition({ lat: position.coords.latitude, lng: position.coords.longitude, alt: 0 });
                  circle.bindTo('$scope.map', marker);
                }

                redraw();
              });

          });

        }, function (err) {
          // error
          $scope.error = err.message;
        });

    });
  });
