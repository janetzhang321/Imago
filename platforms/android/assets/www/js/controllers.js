  angular.module('app.controllers', [])

    .controller('imagoMapCtrl', function ($scope, $state, $cordovaGeolocation, $ionicPlatform, $rootScope, ImagoFactory, DistanceCalculationsFactory, StepsFactory, Camera, Map) {
      var div, map;

      $ionicPlatform.ready(function () {
        $scope.showCamera = false;

        div = document.getElementById("map_canvas");

        if (ionic.Platform.isAndroid()) {
          // Initialize the map view
          map = Map.initializeMap(div);

          map.addEventListener(plugin.google.maps.event.MAP_READY, function () {
            //$rootScope.currentPosition.then(
            map.getMyLocation({ enableHighAccuracy: true }, function (position) {
              var currentPosition = new plugin.google.maps.LatLng(position.latLng.lat, position.latLng.lng);

              // camera view, zoom, and tilt
              map.animateCamera({
                target: currentPosition,
                tilt: 30,
                zoom: 12,
              });

              // place all Imagos/Markers on map
              ImagoFactory.getAllImagos(map);

              // add tracking circle
              map.addCircle({
                'center': currentPosition,
                'radius': 77, // in meters
                'strokeColor': '#159966',
                'strokeWidth': 2,
                'fillColor': '#23FFAA'
              }, function (circle) {

                // track location
                $rootScope.watchPosition.then(null,
                  function (err) {
                    // TODO: handleError
                  },
                  function (position) {
                    var latestPosition = new plugin.google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    circle.setCenter(latestPosition);

                    var currentLocation = {
                      latitude: position.coords.latitude,
                      longitude: position.coords.longitude
                    }

                    // IMAGOS NEARBY
                    $scope.nearbyImagoName = DistanceCalculationsFactory.isAnImagoNearby(currentLocation);
                    if ($scope.nearbyImagoName) {
                      $scope.takePicture = function () {
                        Camera.takePicture()
                          .then(function () {
                            $state.go('points', { imagoName: $scope.nearbyImagoName });
                          })
                          .catch(function (err) {
                            console.log(err);
                          });
                      }
                      $scope.showCamera = true;
                    } else {
                      $scope.showCamera = false;
                    }

                    // REGISTER STEPS
                    StepsFactory.registerSteps(currentLocation);
                  });
              });
            });
          });
        }
      });
    })

    .controller('sideNavCtrl', ['$scope', '$stateParams', '$ionicHistory', '$state', '$rootScope', '$ionicSideMenuDelegate', 'Auth', 'StepsFactory', 'currentUser',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
      // You can include any angular dependencies as parameters for this function
      // TIP: Access Route Parameters for your page via $stateParams.parameterName
      function ($scope, $stateParams, $ionicHistory, $state, $rootScope, $ionicSideMenuDelegate, Auth, StepsFactory, currentUser) {

        $scope.user = currentUser;

        // Hamburger or Back Button Icon
        if ($state.current.name.indexOf('tabsController') !== -1) {
          $scope.showBackButton = false;
          $scope.showHamburgerMenu = true;
        } else {
          $scope.showHamburgerMenu = false;
          $scope.showBackButton = true;
        }

        $rootScope.$on('$stateChangeStart',
          function (event, toState, toParams, fromState, fromParams, options) {
            if (toState.name.indexOf('tabsController') !== -1) {
              $scope.showBackButton = false;
              $scope.showHamburgerMenu = true;
            } else {
              $scope.showHamburgerMenu = false;
              $scope.showBackButton = true;
            }
          })

        // Back button
        $scope.goBack = function () {
          $state.go('tabsController.imagoMap');
        }

        $scope.$watch(function () {
          return $ionicSideMenuDelegate.getOpenRatio();
        }, function (newValue, oldValue) {

          if (newValue == 0) {
            $scope.hideLeft = true;
            $scope.hideRight = true;
          } else {
            if (newValue == 1) {
              $scope.hideLeft = false;
            } else {
              $scope.hideRight = false;
            }
          }
        });

        // Sign Out
        $scope.signOut = function () {
          $state.go('login');
          Auth.$signOut();
        };

        // Steps Count
        $scope.steps = StepsFactory.steps.total;
        $scope.$watch(function () {
          return StepsFactory;
        }, function (newVal, oldVal) {
          $scope.steps = parseInt(newVal.steps.total);
        }, true);
      }])

    .controller('leaderboardCtrl', ['$scope', '$stateParams', 'Users', 'currentUser', 'allUsers',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
      // You can include any angular dependencies as parameters for this function
      // TIP: Access Route Parameters for your page via $stateParams.parameterName
      function ($scope, $stateParams, Users, currentUser, allUsers) {
        $scope.allUsers = allUsers;
      }])

    .controller('bucketListCtrl', ['$scope', '$state', '$stateParams', 'ImagoFactory', 'Map',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
      // You can include any angular dependencies as parameters for this function
      // TIP: Access Route Parameters for your page via $stateParams.parameterName
      function ($scope, $state, $stateParams, ImagoFactory, Map) {

        var markers = ImagoFactory.markers;

        /*
  $scope.goToDetails = function () {
  $state.go('detail',{imagoName:currentImago});
  }
  */

        $scope.getBuildings = function () {
          markers.forEach(function (marker) {

            if (marker.category !== 'building') {
              marker.setVisible(false);
            }
            if (marker.category == 'building') {
              marker.setVisible(true);
            }

          });
          $state.go('tabsController.imagoMap');
        }
        $scope.getLandmarks = function () {
          markers.forEach(function (marker) {

            if (marker.category !== 'landmark') {
              marker.setVisible(false);
            }
            if (marker.category == 'landmark') {
              marker.setVisible(true);
            }

          });
          $state.go('tabsController.imagoMap');
        }
        $scope.getBusinesses = function () {
          markers.forEach(function (marker) {

            if (marker.category !== 'business') {
              marker.setVisible(false);
            }
            if (marker.category == 'business') {
              marker.setVisible(true);
            }
          });
          $state.go('tabsController.imagoMap');
        }
        $scope.showImagos = function () {
          markers.forEach(function (marker) {
            marker.setVisible(true);
          });
          $state.go('tabsController.imagoMap');
        }
        $scope.listBuildings = function () {
          $state.go('buildings');
        }
        $scope.listLandmarks = function () {
          $state.go('landmarks');
        }
        $scope.listBusinesses = function () {
          $state.go('businesses');
        }

      }])

    .controller('loginCtrl', ['$scope', '$stateParams', '$state', '$ionicPlatform', '$cordovaOauth', 'Auth', 'GOOGLE_LOGIN_KEY', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
      // You can include any angular dependencies as parameters for this function
      // TIP: Access Route Parameters for your page via $stateParams.parameterName
      function ($scope, $stateParams, $state, $ionicPlatform, $cordovaOauth, Auth, GOOGLE_LOGIN_KEY) {

        $ionicPlatform.ready(function () {
          var self = this,
            user = Auth.$getAuth();

          if (!user) {
            $scope.signIn = function () {
              if (ionic.Platform.isAndroid()) {
                $cordovaOauth.google(GOOGLE_LOGIN_KEY, ['profile'])
                  .then(function (result) {
                    console.log("Response Object -> " + JSON.stringify(result));
                    Auth.$signInWithCredential(firebase.auth.GoogleAuthProvider.credential(result.id_token))
                      .then(function (firebaseUser) {
                        console.log("Signed in as:", firebaseUser);
                      }).catch(function (error) {
                        console.error("Authentication failed:", error);
                      });
                  }, function (error) {
                    console.log("Error -> " + error);
                  });
              } else {
                Auth.$signInWithPopup('google').then(function () { // for browser
                  // Never called because of page redirect
                }).catch(function (error) {
                  console.error("Authentication failed:", error);
                });
              }
            }
          } else {
            $state.go('tabsController.imagoMap');
          }

          Auth.$onAuthStateChanged(function (firebaseUser) {
            if (firebaseUser) {
              console.log("Signed in as:", firebaseUser.uid);
              $state.go('tabsController.imagoMap');
            } else {
              console.log("Signed out");
              $state.go('login');
            }
          }, self);

        });
      }])

    .controller('profileCtrl', ['$scope', '$stateParams', 'currentUser',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
      // You can include any angular dependencies as parameters for this function
      // TIP: Access Route Parameters for your page via $stateParams.parameterName
      function ($scope, $stateParams, currentUser) {
        $scope.user = currentUser
      }])

    .controller('aboutCtrl', ['$scope', '$stateParams', '$ionicHistory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
      // You can include any angular dependencies as parameters for this function
      // TIP: Access Route Parameters for your page via $stateParams.parameterName
      function ($scope, $stateParams, $ionicHistory) {

        $scope.goBack = function () {
          $ionicHistory.goBack();
        }


      }])


    .controller('pointsCtrl', ['currentUser', '$scope', '$stateParams', '$state', '$rootScope', 'ImagoFactory',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
      // You can include any angular dependencies as parameters for this function
      // TIP: Access Route Parameters for your page via $stateParams.parameterName
      function (currentUser, $scope, $stateParams, $state, $rootScope, ImagoFactory) {
        var currentImagoName = $stateParams.imagoName;//changes based on which imago is close to you
        $scope.points = ImagoFactory.imagoDetails[currentImagoName].points || 0;
        $scope.userHasVisitedImago = currentUser.visitedImagos.indexOf(currentImagoName) === -1 ? false : true;

        if (!$scope.userHasVisitedImago) {
          currentUser.totalPoints = parseInt(currentUser.totalPoints) + parseInt($scope.points); // update firebase user with points
          if (!currentUser.visitedImagos) {
            currentUser.visitedImagos = currentImagoName;
          } else {
            currentUser.visitedImagos = currentUser.visitedImagos + ', ' + currentImagoName;
          }
          currentUser.numOfImagos = parseInt(currentUser.numOfImagos) + 1;
          currentUser.$save().then(function () { console.log('saved') })
        }

        $scope.goToDetails = function () {
          $state.go('detail', { imagoName: currentImagoName });
        }
      }])

    .controller('rewardsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
      // You can include any angular dependencies as parameters for this function
      // TIP: Access Route Parameters for your page via $stateParams.parameterName
      function ($scope, $stateParams) {


      }])

    .controller('compassCtrl', function ($scope, $cordovaDeviceOrientation, $ionicPlatform) {

      $ionicPlatform.ready(function () {

        $cordovaDeviceOrientation.getCurrentHeading().then(function (result) {
          var magneticHeading = result.magneticHeading;
          var trueHeading = result.trueHeading;
          var accuracy = result.headingAccuracy;
          var timeStamp = result.timestamp;

          $scope.magneticHeading = "magneticHeading: " + magneticHeading;
          $scope.trueHeading = "trueheading: " + trueHeading;
          $scope.accuracy = "accuracy: " + accuracy;
          $scope.timeStamp = "timeStamp: " + timeStamp;


          var options = {
            frequency: 3000,
          }

          var watch = $cordovaDeviceOrientation.watchHeading(options).then(
            null,
            function (error) {
              // An error occurred
            },
            function (result) {   // updates constantly (depending on frequency value)
              var magneticHeading = result.magneticHeading;
              var trueHeading = result.trueHeading;
              var accuracy = result.headingAccuracy;
              var timeStamp = result.timestamp;

              $scope.magneticHeading = "magneticHeading: " + magneticHeading;
              $scope.trueHeading = "trueheading: " + trueHeading;
              $scope.accuracy = "accuracy: " + accuracy;
              $scope.timeStamp = "timeStamp: " + timeStamp;
            });

        }, function (err) {
          // An error occurred
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
      })
    })


    .controller('buildingsCtrl', ['$scope', '$stateParams', 'ImagoFactory',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
      // You can include any angular dependencies as parameters for this function
      // TIP: Access Route Parameters for your page via $stateParams.parameterName
      function ($scope, $stateParams, ImagoFactory) {


        var markers = ImagoFactory.markers;

        console.log();

        $scope.markersList = markers.map(function (marker) {

          if (marker.category === 'building') {
            return marker.imgSrc;
          }

        });

      }])

    .controller('landmarksCtrl', ['$scope', '$stateParams', 'ImagoFactory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
      // You can include any angular dependencies as parameters for this function
      // TIP: Access Route Parameters for your page via $stateParams.parameterName
      function ($scope, $stateParams, ImagoFactory) {

        var markers = ImagoFactory.markers;

        console.log();

        $scope.markersList = markers.map(function (marker) {

          if (marker.category === 'landmark') {
            return marker.imgSrc;
          }

        });


      }])

    .controller('businessesCtrl', ['$scope', '$stateParams', 'ImagoFactory',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
      // You can include any angular dependencies as parameters for this function
      // TIP: Access Route Parameters for your page via $stateParams.parameterName
      function ($scope, $stateParams, ImagoFactory) {

        var markers = ImagoFactory.markers;

        console.log();

        $scope.markersList = markers.map(function (marker) {

          if (marker.category === 'business') {
            return marker.imgSrc;
          }

        });

      }])



    .controller('detailCtrl', ['$scope', '$stateParams', 'ImagoFactory',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
      // You can include any angular dependencies as parameters for this function
      // TIP: Access Route Parameters for your page via $stateParams.parameterName
      function ($scope, $stateParams, ImagoFactory) {
        console.log($stateParams);
        var currentImago = $stateParams.imagoName;//changes based on which imago is close to you

        $scope.funFact = ImagoFactory.imagoDetails[currentImago].funFact;
        $scope.imgSrc = ImagoFactory.imagoDetails[currentImago].imgSrc;
        $scope.title = ImagoFactory.imagoDetails[currentImago].title;
        $scope.originDate = ImagoFactory.imagoDetails[currentImago].originDate;
        $scope.description = ImagoFactory.imagoDetails[currentImago].description;
        $scope.learnMore = ImagoFactory.imagoDetails[currentImago].learnMore;
        $scope.address = ImagoFactory.imagoDetails[currentImago].address;


      }]);

