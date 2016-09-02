angular.module('app.factories', [])

  .factory('ImagoFactory', function () {

    function configureImago(configs) {
      return function (map) {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var img = new Image();
        var latLng = new plugin.google.maps.LatLng(configs.lat, configs.lng);

        // size of marker info window
        canvas.width = 120;
        canvas.height = 120;

        img.src = configs.imgSrc;

        function getMarkerConfigs() {
          if (configs.icon) {
            return {
              position: latLng,
              title: canvas.toDataURL(),
              icon: {
                url: configs.icon.url,
                size: {
                  width: 24,
                  height: 24
                }
              }
            }
          } else {
            return {
              position: latLng,
              title: canvas.toDataURL()
            }
          }
        }

        return img.onload = function () {
          context.drawImage(img, 0, 0, 120, 90); // 120 * 90, size of imgSrc

          return map.addMarker(getMarkerConfigs());
        }
      }
    }

    var imagoDetails = {
      LIU: {
        lat: 40.6903991,
        lng: -73.9811331,
        title: 'Long Island University',
        imgSrc: 'img/thumbnails/LIU.jpg',
        icon: {
            url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description:'A branch of Long Island University in Brooklyn',
        originDate:'1926',
        address:'1 University Plaza, Brooklyn, NY 11201',
        funFact: 'LIU Brooklyn was the founding place of Imago!',
        learnMore: 'http://www.liu.edu/Brooklyn',
        points: '60',
        category: 'building'
      },
      mmuseumm: {
        lat: 40.717363200,
        lng: -74.002750400,
        title: 'Mmuseumm',
        imgSrc: 'img/thumbnails/mmuseumm.jpg',
        icon: {
            url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description:'',
        originDate:'',
        address:'4 Cortlandt Alley, New York, NY 10013',
        funFact: '',
        learnMore: '',
        points: '',
        category: 'building'
      },
      doyers: {
        lat: 40.714428,
        lng: -73.998113,
        imgSrc: 'img/thumbnails/doyers.jpg',
        icon: {
            url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description:'',
        originDate:'',
        address:'',
        funFact: '',
        learnMore: '',
        points: '',
        category: ''
      },
      flatiron: {
        lat: 40.740992800,
        lng: -73.989658700,
        title: 'Flatiron Building',
        imgSrc: 'img/thumbnails/flatironbuilding.jpg',
        icon: {
            url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description:'',
        originDate:'',
        address:'',
        funFact: '',
        learnMore: '',
        points: '',
        category: ''
      },
      fit: {
        lat: 40.746828200,
        lng: -73.993936600,
        title: 'The Museum at FIT',
        imgSrc: 'img/thumbnails/FIT.jpg',
        icon: {
            url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description:'',
        originDate:'',
        address:'',
        funFact: '',
        learnMore: '',
        points: '',
        category: ''
      },
      gilsey: {
        lat: 40.746166600,
        lng: -73.988395000,
        title: 'Gilsey House',
        imgSrc: 'img/thumbnails/GilseyHouse.jpg',
        icon: {
            url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description:'',
        originDate:'',
        address:'',
        funFact: '',
        learnMore: '',
        points: '',
        category: ''
      },
      museumPR: {
        title: 'Museum of Public Relations',
        lat: 40.740766800,
        lng: -73.982789300,
        imgSrc: 'img/thumbnails/MoPR.png',
        icon: {
            url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description:'',
        originDate:'',
        address:'',
        funFact: '',
        learnMore: '',
        points: '',
        category: ''
      },
      grandCentral: {
        lat: 40.752496100,
        lng: -73.977302200,
        title: 'Grand Central terminal',
        imgSrc: 'img/thumbnails/GrandCentral.jpg',
        icon: {
            url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description:'',
        originDate:'',
        address:'',
        funFact: '',
        learnMore: '',
        points: '',
        category: ''
      },
      thomasSt: {
        lat: 40.716551100,
        lng: -74.005794700,
        title: '33 Thomas Street',
        imgSrc: 'img/thumbnails/33thomas.jpg',
        icon: {
            url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description:'',
        originDate:'',
        address:'',
        funFact: '',
        learnMore: '',
        points: '',
        category: ''
      },
      plazaHotel: {
        lat: 40.764609500,
        lng: -73.974354700,
        title: 'The Plaza Hotel',
        imgSrc: 'img/thumbnails/PlazaHotel.JPG',
        icon: {
            url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description:'',
        originDate:'',
        address:'',
        funFact: '',
        learnMore: '',
        points: '',
        category: ''
      },
      met: {
        lat: 40.779165500,
        lng: -73.962927800,
        title: 'The Metropolitan Museum of Art',
        imgSrc: 'img/thumbnails/Met.jpg',
        icon: {
            url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description:'',
        originDate:'',
        address:'',
        funFact: '',
        learnMore: '',
        points: '',
        category: ''
      },
      museumNYC: {
        lat: 40.792567500,
        lng: -73.951999400,
        title: 'Museum of the City of New York',
        imgSrc: 'img/thumbnails/MoCityofNY.jpg',
        icon: {
            url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description:'',
        originDate:'',
        address:'',
        funFact: '',
        learnMore: '',
        points: '',
        category: ''
      },
      MoMA: {
        lat: 40.761417000,
        lng: -73.977120300,
        title: 'Museum of Modern Art',
        imgSrc: 'img/thumbnails/MOMA.jpg',
        icon: {
            url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description:'',
        originDate:'',
        address:'',
        funFact: '',
        learnMore: '',
        points: '',
        category: ''
      },
      guggenheim: {
        lat: 40.783001000,
        lng: -73.958881600,
        title: 'Guggenheim Museum',
        imgSrc: 'img/thumbnails/Guggenheim.jpg',
        icon: {
            url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description:'',
        originDate:'',
        address:'',
        funFact: '',
        learnMore: '',
        points: '',
        category: ''
      },
      waldorfAstoria: {
        lat: 40.756571200,
        lng: -73.973642100,
        title: 'Waldorf Astoria',
        imgSrc: 'img/thumbnails/WaldorfAstoria.jpg',
        icon: {
            url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description:'',
        originDate:'',
        address:'',
        funFact: '',
        learnMore: '',
        points: '',
        category: ''
      },
      rockefellerCenter: {
        lat: 40.759088400,
        lng: -73.977599500,
        title: 'Rockefeller Center',
        imgSrc: 'img/thumbnails/RockefellerCenter.jpg',
        icon: {
            url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description:'',
        originDate:'',
        address:'',
        funFact: '',
        learnMore: '',
        points: '',
        category: ''
      },
      cityHall: {
        lat: 40.712746100,
        lng: -74.005974000,
        title: 'New York City Hall',
        imgSrc: 'img/thumbnails/NYCHall.jpg',
        icon: {
            url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description:'',
        originDate:'',
        address:'',
        funFact: '',
        learnMore: '',
        points: '',
        category: ''
      },
      NYSE: {
        lat: 40.706866100,
        lng: -74.011318900,
        title: 'New York Stock Exchange',
        imgSrc: 'img/thumbnails/NYSE.jpg',
        icon: {
            url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description:'',
        originDate:'',
        address:'',
        funFact: '',
        learnMore: '',
        points: '',
        category: ''
      },
      fedHall: {
        lat: 40.707258000,
        lng: -74.010356400,
        title: 'Federal Hall',
        imgSrc: 'img/thumbnails/FederalHall.jpg',
        icon: {
            url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description:'',
        originDate:'',
        address:'',
        funFact: '',
        learnMore: '',
        points: '',
        category: ''
      },
      intrepid: {
        lat: 40.763726600,
        lng: -73.999178900,
        title: 'Intrepid Sea, Air & Space Museum',
        imgSrc: 'img/thumbnails/Intrepid.jpg',
        icon: {
            url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description:'',
        originDate:'',
        address:'',
        funFact: '',
        learnMore: '',
        points: '',
        category: ''
      },
      fedReserve: {
        lat: 40.708366300,
        lng: -74.008653000,
        title: 'Federal Reserve',
        imgSrc: 'img/thumbnails/NYCFedReserve.jpg',
        icon: {
            url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description:'',
        originDate:'',
        address:'',
        funFact: '',
        learnMore: '',
        points: '',
        category: ''
      },
      empireState: {
        lat: 40.748709700,
        lng: -73.985655600,
        title: 'Empire State Building',
        imgSrc: 'img/thumbnails/EmpireState.jpg',
        icon: {
            url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description:'',
        originDate:'',
        address:'',
        funFact: '',
        learnMore: '',
        points: '',
        category: ''
      },
      chipilo: {
        lat: 40.715154200,
        lng: -73.999525400,
        title: 'Chipilo',
        imgSrc: 'img/thumbnails/chipilo.jpg',
        redirectTmplUrl: '/#/tabs/bucketList',
        icon: {
            url: 'www/img/thumbnails/markers/gold1.png'
        },
        description:'',
        originDate:'',
        address:'',
        funFact: '',
        learnMore: '',
        points: '',
        category: ''
      },
      laBellaFerrara: {
        lat: 40.717359500,
        lng: -73.998299400,
        title: 'La Bella Ferrara',
        imgSrc: 'img/thumbnails/LaBellaFerrara.jpg',
        redirectTmplUrl: '/#/tabs/bucketList',
        icon: {
            url: 'www/img/thumbnails/markers/yellow1.png'
        },
        description:'',
        originDate:'',
        address:'',
        funFact: '',
        learnMore: '',
        points: '',
        category: ''
      },
      NFTEhq: {
        lat: 40.704299600,
        lng: -74.006329900,
        title: 'NFTEhq',
        imgSrc: 'img/thumbnails/nfte.jpg', 
        redirectTmplUrl: '/#/tabs/bucketList',
        icon: {
            url: 'www/img/thumbnails/markers/yellow1.png'
        },
        description:'',
        originDate:'',
        address:'',
        funFact: '',
        learnMore: '',
        points: '',
        category: ''
      },
      AppNexus: {
        lat: 40.741624300,
        lng: -73.990991300,
        title: 'App Nexus',
        imgSrc: 'img/thumbnails/appNexus.jpg', 
        redirectTmplUrl: '/#/tabs/bucketList',
        icon: {
            url: 'www/img/thumbnails/markers/yellow1.png'
        },
        description:'',
        originDate:'',
        address:'',
        funFact: '',
        learnMore: '',
        points: '',
        category: ''
      }
    }
        
    
    var imagosCoordinates = {
      LIU: {
        lat: 40.6903991,
        lng: -73.9811331
      },
      mmuseumm: {
        lat: 40.717363200,
        lng: -74.002750400
      },
      doyers: {
        lat: 40.714428,
        lng: -73.998113,
      },
      empirestate: {
        lat: 40.748709700,
        lng: -73.985655600
      },
      flatiron: {
        lat: 40.740992800,
        lng: -73.989658700
      },
      fit: {
        lat: 40.746828200,
        lng: -73.993936600
      },
      gilsey: {
        lat: 40.746166600,
        lng: -73.988395000
      },
      museumPR: {
        lat: 40.740766800,
        lng: -73.982789300
      },
      grandCentral: {
        lat: 40.752496100,
        lng: -73.977302200
      },
      thomasSt: {
        lat: 40.716551100,
        lng: -74.005794700
      },
      plazaHotel: {
        lat: 40.764609500,
        lng: -73.974354700
      },
      met: {
        lat: 40.779165500,
        lng: -73.962927800
      },
      museumNYC: {
        lat: 40.792567500,
        lng: -73.951999400
      },
      MoMA: {
        lat: 40.761417000,
        lng: -73.977120300
      },
      guggenheim: {
        lat: 40.783001000,
        lng: -73.958881600
      },
      waldorfAstoria: {
        lat: 40.756571200,
        lng: -73.973642100
      },
      rockefellerCenter: {
        lat: 40.759088400,
        lng: -73.977599500
      },
      cityHall: {
        lat: 40.712746100,
        lng: -74.005974000
      },
      NYSE: {
        lat: 40.706866100,
        lng: -74.011318900
      },
      fedHall: {
        lat: 40.707258000,
        lng: -74.010356400
      },
      intrepid: {
        lat: 40.763726600,
        lng: -73.999178900
      },
      fedReserve: {
        lat: 40.708366300,
        lng: -74.008653000
      },
      empireState: {
        lat: 40.748709700,
        lng: -73.985655600
      },
      chipilo: {
        lat: 40.715154200,
        lng: -73.999525400
      },
      laBellaFerrara: {
        lat: 40.717359500,
        lng: -73.998299400
      },
      NFTEhq: {
        lat: 40.704299600,
        lng: -74.006329900
      },
      AppNexus: {
        lat: 40.741624300,
        lng: -73.990991300
      }
    }
    
    var createLiu = configureImago(imagoDetails.LIU);
    var createMmuseumm = configureImago(imagoDetails.mmuseumm);
    var createDoyers = configureImago(imagoDetails.doyers);
    var createFlatironBuilding = configureImago(imagoDetails.flatiron);
    var createMuseumFIT = configureImago(imagoDetails.fit);
    var createGilseyHouse = configureImago(imagoDetails.gilsey);
    var createMuseumPR = configureImago(imagoDetails.museumPR);
    var createGrandCentralterminal = configureImago(imagoDetails.grandCentral);
    var create33ThomasST = configureImago(imagoDetails.thomasSt);
    var createTheplazaHotel = configureImago(imagoDetails.plazaHotel);
    var createTheMET = configureImago(imagoDetails.met);
    var createMuseumNYC = configureImago(imagoDetails.museumNYC);
    var createMoMa = configureImago(imagoDetails.MoMA);
    var createGuggenheimMuseum = configureImago(imagoDetails.guggenheim);
    var createWaldorfAstoria = configureImago(imagoDetails.waldorfAstoria);
    var createRockefellerCenter = configureImago(imagoDetails.rockefellerCenter);
    var createCityHall = configureImago(imagoDetails.cityHall);
    var createNYSE = configureImago(imagoDetails.NYSE);
    var createFederalHall = configureImago(imagoDetails.fedHall);
    var createIntrepid = configureImago(imagoDetails.intrepid);
    var createFederalReserve = configureImago(imagoDetails.fedReserve);
    var createEmpireState = configureImago(imagoDetails.empireState);
    var createChipilo = configureImago(imagoDetails.chipilo);
    var createLaBellaFerrara = configureImago(imagoDetails.laBellaFerrara);
    var createNFTEhq = configureImago(imagoDetails.NFTEhq);
    var createAppNexus = configureImago(imagoDetails.AppNexus);
    
    // ADD ALL IMAGO TO THIS ARRAY
    var imagos = [
        createLiu,
        createMmuseumm,
        createDoyers,
        createEmpireState,
        createFlatironBuilding,
        createMuseumFIT,
        createGilseyHouse,
        createMuseumPR,
        createGrandCentralterminal,
        create33ThomasST,
        createTheplazaHotel,
        createTheMET,
        createMuseumNYC,
        createMoMa,
        createGuggenheimMuseum,
        createWaldorfAstoria,
        createRockefellerCenter,
        createCityHall,
        createNYSE,
        createFederalHall,
        createIntrepid,
        createFederalReserve,
        createEmpireState,
        createLaBellaFerrara,
        createChipilo,
        createNFTEhq,
        createAppNexus
    ];

    return {
      imagosCoordinates: imagosCoordinates,
      getAllImagos: function (map) {
        imagos.forEach(function (initiateImagoFn) {
          return initiateImagoFn(map);
        });
      },
      imagoDetails: imagoDetails
    };
  })

  // $firebaseAuth instance
  .factory('Auth', ['$firebaseAuth', 
                    
    function ($firebaseAuth) {
        return $firebaseAuth();
    }
    
  ])




  // $firebaseUser instance
  .factory('User', ['$firebaseAuth',
                    /*
                    , '$firebaseUser',
                    */
    function ($firebaseAuth) {
        /*
        mAuthListener = new firebaseAuth.AuthStateListener() {
            @Override
            public void onAuthStateChanged(@NonNull FirebaseAuth firebaseAuth) {
                FirebaseUser user = firebaseAuth.getCurrentUser();
                if (user != null) {
                    // User is signed in
                    Log.d(TAG, "onAuthStateChanged:signed_in:" + user.getUid());
                } else {
                    // User is signed out
                    Log.d(TAG, "onAuthStateChanged:signed_out");
                }
                // ...
            }
        }
                    
        FirebaseUser user = firebaseAuth.getInstance().getCurrentUser();
            if (user != null) {
                // Name, email address, and profile photo Url
                String name = user.getDisplayName();
                String email = user.getEmail();
                Uri photoUrl = user.getPhotoUrl();

                // The user's ID, unique to the Firebase project. Do NOT use this value to
                // authenticate with your backend server, if you have one. Use
                // FirebaseUser.getToken() instead.
                String uid = user.getUid();
            }

        */

        return $firebaseAuth();
    }
    
    
  ])






  .factory('DistanceCalculationsFactory', function (ImagoFactory) {

    function getMilesBtwnCurrentLocationAndImago(currentLocation, imagoLocation) {
      var lat1 = currentLocation.latitude;
      var lat2 = imagoLocation.latitude;
      var lon1 = currentLocation.longitude;
      var lon2 = imagoLocation.longitude;

      var R = 3959; // Radius of the earth in km
      var dLat = deg2rad(lat2 - lat1);  // deg2rad below
      var dLon = deg2rad(lon2 - lon1);
      var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c; // Distance in km
      return d;
    }

    function deg2rad(deg) {
      return deg * (Math.PI / 180)
    }


    function getBearingBtwnTwoLocations(currentLocation, imagoLocation) {
      var lat1 = currentLocation.latitude;
      var lat2 = imagoLocation.latitude;
      var lon1 = currentLocation.longitude;
      var lon2 = imagoLocation.longitude;

      lat1 = lat1 * Math.PI / 180;
      lat2 = lat2 * Math.PI / 180;
      var dLon = (lon2 - lon1) * Math.PI / 180;
      var y = Math.sin(dLon) * Math.cos(lat2);
      var x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);

      var bearing = Math.atan2(y, x) * 180 / Math.PI;
      if (bearing < 0) {
        bearing = bearing + 360;
      }

      bearing = bearing.toFixed(0);
      return bearing;
    }

    function displayCamera(distanceInMiles) {
      var MIN_RADIUS_IN_MILES = 0.1;

      if (distanceInMiles <= MIN_RADIUS_IN_MILES) {
        return true;
      } else {
        return false;
      }
    }

    function isAnImagoNearby(currentLocation) {
      var distanceInMilesCache = 0;

      for (var imagoName in ImagoFactory.imagosCoordinates) {
        var coordinates = {
          latitude: ImagoFactory.imagosCoordinates[imagoName].lat,
          longitude: ImagoFactory.imagosCoordinates[imagoName].lng
        };

        var distanceInMiles = getMilesBtwnCurrentLocationAndImago(currentLocation, coordinates);
        if (!distanceInMilesCache || distanceInMiles < distanceInMilesCache) {
          distanceInMilesCache = distanceInMiles;
        }
      }

      if (distanceInMilesCache !== 0 && distanceInMilesCache <= .04734848) {
        // .04734848 miles is 250 feet
        return true;
      } else {
        return false;
      }
    }

    return {
      getMilesBtwnCurrentLocationAndImago: getMilesBtwnCurrentLocationAndImago,
      getBearingBtwnTwoLocations: getBearingBtwnTwoLocations,
      displayCamera: displayCamera,
      isAnImagoNearby: isAnImagoNearby
    }

  });

