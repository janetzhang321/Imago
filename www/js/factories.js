angular.module('app.factories', [])

  .factory('ImagoFactory', function () {

    function configureImago(configs) {
      return function (map) {
        var marker = new google.maps.Marker({
          position: { lat: configs.lat, lng: configs.lng },
          map: map,
          title: configs.title,
          icon: configs.icon
        });

        var contentString = '<div id="content" class="popUp">' +
          '<div id="siteNotice">' +
          '</div>' +
          '<div id="bodyContent">' +
          '<center><img class="hint" src=' + configs.imageSrc + '></center>' +
          '</div>' +
          '</div>';

        var infoWindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 200,
          maxHeight: 200,
        })

        infoWindow.Redirect = function () {
          window.location = configs.redirectTmplUrl;
        }

        marker.addListener('click', function () {
          infoWindow.open(map, marker);
        });
        marker.addListener('dblclick', function () {
          infoWindow.Redirect();
        });
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
    }

    var createLiu = configureImago({
      //LIU
      title: 'Long Island University',
      lat: imagosCoordinates.LIU.lat,
      lng: imagosCoordinates.LIU.lng,
      imageSrc: 'img/LIU.jpg',
      redirectTmplUrl: 'templates/bucketList.html',
      icon: {
        url: 'img/Imagos/Blue.png',
        'scaledSize': new google.maps.Size(30, 30)
      }
    });

    var createMmuseumm = configureImago({
      //Mmusem
      title: 'Mmuseumm',
      lat: imagosCoordinates.mmuseumm.lat,
      lng: imagosCoordinates.mmuseumm.lng,
      imageSrc: 'img/mmuseumm.jpg',
      redirectTmplUrl: 'templates/bucketList.html'
    });

    var createDoyers = configureImago({
      //Doyers
      title: 'Doyers',
      lat: imagosCoordinates.doyers.lat,
      lng: imagosCoordinates.doyers.lng,
      imageSrc: 'img/doyers.jpg',
      redirectTmplUrl: 'templates/bucketList.html'
    });

    var createEmpireState = configureImago({
      //EmpireState Original
      title: 'Empire State Building',
      lat: imagosCoordinates.empirestate.lat,
      lng: imagosCoordinates.empirestate.lng,
      imageSrc: 'img/EmpireState.jpg',
      redirectTmplUrl: 'templates/bucketList.html'
    });

    var createFlatironBuilding = configureImago({
      //Flatiron Building
      title: 'Flatiron Building',
      lat: imagosCoordinates.flatiron.lat,
      lng: imagosCoordinates.flatiron.lng,
      imageSrc: 'img/flatironbuilding.jpg',
      redirectTmplUrl: 'templates/bucketList.html'
    });
    var createMuseumFIT = configureImago({
      //The Museum at FIT
      title: 'The Museum at FIT',
      lat: imagosCoordinates.fit.lat,
      lng: imagosCoordinates.fit.lng,
      imageSrc: 'img/FIT.jpg',
      redirectTmplUrl: 'templates/bucketList.html'
    });
    var createGilseyHouse = configureImago({
      //Gilsey House
      title: 'Gilsey House',
      lat: imagosCoordinates.gilsey.lat,
      lng: imagosCoordinates.gilsey.lng,
      imageSrc: 'img/GilseyHouse.jpg',
      redirectTmplUrl: 'templates/bucketList.html'
    });

    var createMuseumPR = configureImago({
      //Museum of Public Relations
      title: 'Museum of Public Relations',
      lat: imagosCoordinates.museumPR.lat,
      lng: imagosCoordinates.museumPR.lng,
      imageSrc: 'img/MoPR.png',
      redirectTmplUrl: 'templates/bucketList.html'
    });

    var createGrandCentralterminal = configureImago({
      //Grand Central terminal
      title: 'Grand Central terminal',
      lat: imagosCoordinates.grandCentral.lat,
      lng: imagosCoordinates.grandCentral.lng,
      imageSrc: 'img/GrandCentral.jpg',
      redirectTmplUrl: 'templates/bucketList.html'
    });

    var create33ThomasST = configureImago({
      //33 thomas street
      title: '33 Thomas Street',
      lat: imagosCoordinates.thomasSt.lat,
      lng: imagosCoordinates.thomasSt.lng,
      imageSrc: 'img/33thomas.jpg',
      redirectTmplUrl: 'templates/bucketList.html'
    });

    var createTheplazaHotel = configureImago({
      //The plaza Hotel
      title: 'The Plaza Hotel',
      lat: imagosCoordinates.plazaHotel.lat,
      lng: imagosCoordinates.plazaHotel.lng,
      imageSrc: 'img/PlazaHotel.JPG',
      redirectTmplUrl: 'templates/bucketList.html'
    });

    var createTheMET = configureImago({
      //The Metropolitan Museum of Art
      title: 'The Metropolitan Museum of Art',
      lat: imagosCoordinates.met.lat,
      lng: imagosCoordinates.met.lng,
      imageSrc: 'img/Met.jpg',
      redirectTmplUrl: 'templates/bucketList.html'
    });

    var createMuseumNYC = configureImago({
      //Museum of the City of New York
      title: 'Museum of the City of New York',
      lat: imagosCoordinates.museumNYC.lat,
      lng: imagosCoordinates.museumNYC.lng,
      imageSrc: 'img/MoCityofNY.jpg',
      redirectTmplUrl: 'templates/bucketList.html'
    });

    var createMoMa = configureImago({
      //Museum of Modern Art
      title: 'Museum of Modern Art',
      lat: imagosCoordinates.MoMA.lat,
      lng: imagosCoordinates.MoMA.lng,
      imageSrc: 'img/MOMA.jpg',
      redirectTmplUrl: 'templates/bucketList.html'
    });

    var createGuggenheimMuseum = configureImago({
      //Guggenheim Museum
      title: 'Guggenheim Museum',
      lat: imagosCoordinates.guggenheim.lat,
      lng: imagosCoordinates.guggenheim.lng,
      imageSrc: 'img/Guggenheim.jpg',
      redirectTmplUrl: 'templates/bucketList.html'
    });

    var createWaldorfAstoria = configureImago({
      //Waldorf Astoria
      title: 'Waldorf Astoria',
      lat: imagosCoordinates.waldorfAstoria.lat,
      lng: imagosCoordinates.waldorfAstoria.lng,
      imageSrc: 'img/WaldorfAstoria.jpg',
      redirectTmplUrl: 'templates/bucketList.html'
    });

    var createRockefellerCenter = configureImago({
      //Rockefeller center
      title: 'Rockefeller Center',
      lat: imagosCoordinates.rockefellerCenter.lat,
      lng: imagosCoordinates.rockefellerCenter.lng,
      imageSrc: 'img/RockefellerCenter.jpg',
      redirectTmplUrl: 'templates/bucketList.html'
    });

    var createCityHall = configureImago({
      //New York City Hall
      title: 'New York City Hall',
      lat: imagosCoordinates.cityHall.lat,
      lng: imagosCoordinates.cityHall.lng,
      imageSrc: 'img/NYCHall.jpg',
      redirectTmplUrl: 'templates/bucketList.html'
    });

    var createNYSE = configureImago({
      //New York Stock Exchange
      title: 'New York Stock Exchange',
      lat: imagosCoordinates.NYSE.lat,
      lng: imagosCoordinates.NYSE.lng,
      imageSrc: 'img/NYSE.jpg',
      redirectTmplUrl: 'templates/bucketList.html'
    });

    var createFederalHall = configureImago({
      //Federal Hall
      title: 'Federal Hall',
      lat: imagosCoordinates.fedHall.lat,
      lng: imagosCoordinates.fedHall.lng,
      imageSrc: 'img/FederalHall.jpg',
      redirectTmplUrl: 'templates/bucketList.html'
    });

    var createIntrepid = configureImago({
      //Intrepid Sea, Air & Space Museum
      title: 'Intrepid Sea, Air & Space Museum',
      lat: imagosCoordinates.intrepid.lat,
      lng: imagosCoordinates.intrepid.lng,
      imageSrc: 'img/Intrepid.jpg',
      redirectTmplUrl: 'templates/bucketList.html'
    });

    var createFederalReserve = configureImago({
      //Federal Reserve
      title: 'Federal Reserve',
      lat: imagosCoordinates.fedReserve.lat,
      lng: imagosCoordinates.fedReserve.lng,
      imageSrc: 'img/NYCFedReserve.jpg',
      redirectTmplUrl: 'templates/bucketList.html'
    });

    var createEmpireState = configureImago({
      //EmpireState Original
      title: 'Empire State Building',
      lat: 40.748709700,
      lng: -73.985655600,
      imageSrc: 'img/EmpireState.jpg',
      redirectTmplUrl: 'templates/bucketList.html'
    });


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
      createEmpireState
    ]

    return {
      imagosCoordinates: imagosCoordinates,
      getAllImagos: function (map) {
        imagos.forEach(function (initiateImagoFn) {
          return initiateImagoFn(map);
        })
      }
    };
  })


















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

      if (distanceInMilesCache !== 0 && distanceInMilesCache <= .25) {
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

