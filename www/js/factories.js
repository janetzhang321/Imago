angular.module('app.factories', [])

  .factory('ImagoFactory', function () {

    function configureImago(configs) {
      return function (map) {
        var marker = new google.maps.Marker({
          position: { lat: configs.lat, lng: configs.lng },
          map: map,
          title: configs.title
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
		rockefellerCenter: {
			lat: 40.759088400,
			lng: -73.977599500
		}
	}

    var createLiu = configureImago({
		//LIU
      title: 'Long Island University',
      lat: 40.6909652,
      lng: -73.9814591,
      imageSrc: 'img/LIU.jpg',
      redirectTmplUrl: 'templates/addToBucketList.html'
    });

    var createMmuseum = configureImago({
		//Mmusem 
      title: 'Mmuseumm',
      lat: 40.717366,
      lng: -74.002747,
      imageSrc: 'img/mmuseumm.jpg',
      redirectTmplUrl: 'templates/addToBucketList.html'
    });

    var createDoyers = configureImago({
		//Doyers 
      title: 'Doyers',
      lat: 40.714428,
      lng: -73.998113,
      imageSrc: 'img/doyers.jpg',
      redirectTmplUrl: 'templates/addToBucketList.html'
    });

    var createEmpireState = configureImago({
		//EmpireState Original 
      title: 'Empire State Building',
      lat: 40.748709700,
      lng: -73.985655600,
      imageSrc: 'img/EmpireState.jpg', 
      redirectTmplUrl: 'templates/addToBucketList.html'
    });

	var createFlatironBuilding = configureImago({
		//Flatiron Building
      title: 'Flatiron Building',
      lat: 40.740992800,
      lng: -73.989658700,
      imageSrc: 'img/flatironbuilding.jpg', 
      redirectTmplUrl: 'templates/addToBucketList.html'
    });
	var createMuseumFIT = configureImago({
		//The Museum at FIT
      title: 'The Museum at FIT',
      lat: 40.746828200,
      lng: -73.993936600,
      imageSrc: 'img/FIT.jpg', 
      redirectTmplUrl: 'templates/addToBucketList.html'
    });
	var createGilseyHouse = configureImago({
		//Gilsey House
      title: 'Gilsey House',
      lat: 40.746166600,
      lng: -73.988395000,
      imageSrc: 'img/GilseyHouse.jpg', 
      redirectTmplUrl: 'templates/addToBucketList.html'
    });
	
	var createMuseumPR = configureImago({
		//Museum of Public Relations
      title: 'Museum of Public Relations',
      lat: 40.740766800,
      lng: -73.982789300,
      imageSrc: 'img/MoPR.png', 
      redirectTmplUrl: 'templates/addToBucketList.html'
    });
	
	var createGrandCentralterminal  = configureImago({
		//Grand Central terminal 
      title: 'Grand Central terminal',
      lat: 40.752496100,
      lng: -73.977302200,
      imageSrc: 'img/GrandCentral.jpg', 
      redirectTmplUrl: 'templates/addToBucketList.html'
    });
	
	var create33ThomasST = configureImago({
		//33 thomas street
      title: '33 Thomas Street',
      lat: 40.716551100,
      lng: -74.005794700,
      imageSrc: 'img/33thomas.jpg', 
      redirectTmplUrl: 'templates/addToBucketList.html'
    });
	
	var createTheplazaHotel = configureImago({
		//The plaza Hotel
      title: 'The Plaza Hotel',
      lat: 40.764609500,
      lng: -73.974354700,
      imageSrc: 'img/PlazaHotel.JPG',
      redirectTmplUrl: 'templates/addToBucketList.html'
    });
	
	var createTheMET = configureImago({
		//The Metropolitan Museum of Art
      title: 'The Metropolitan Museum of Art',
      lat: 40.779165500,
      lng: -73.962927800,
      imageSrc: 'img/Met.jpg',
      redirectTmplUrl: 'templates/addToBucketList.html'
    });
	
	var createMuseumNYC = configureImago({
		//Museum of the City of New York 
      title: 'Museum of the City of New York',
      lat: 40.792567500,
      lng: -73.951999400,
      imageSrc: 'img/MoCityofNY.jpg',
      redirectTmplUrl: 'templates/addToBucketList.html'
    });
	
	var createMoMa = configureImago({
		//Museum of Modern Art
      title: 'Museum of Modern Art',
      lat: 40.761417000,
      lng: -73.977120300,
      imageSrc: 'img/MOMA.jpg', 
      redirectTmplUrl: 'templates/addToBucketList.html'
    });
	
	var createGuggenheimMuseum = configureImago({
		//Guggenheim Museum 
      title: 'Guggenheim Museum',
      lat: 40.783001000,
      lng: -73.958881600,
      imageSrc: 'img/Guggenheim.jpg',
      redirectTmplUrl: 'templates/addToBucketList.html'
    });
	
	var createWaldorfAstoria = configureImago({
		//Waldorf Astoria 
      title: 'Waldorf Astoria',
      lat: 40.756571200,
      lng: -73.985655600,
      imageSrc: 'img/WaldorfAstoria.jpg',
      redirectTmplUrl: 'templates/addToBucketList.html'
    });
	
	var createRockefellerCenter  = configureImago({
		//Rockefeller center 
      title: 'Rockefeller Center',
      lat: imagosCoordinates.rockefellerCenter.lat,
      lng: imagosCoordinates.rockefellerCenter.lng,
      imageSrc: 'img/RockefellerCenter.jpg',
      redirectTmplUrl: 'templates/addToBucketList.html'
    });
	
	var createCityHall = configureImago({
		//New York City Hall 
      title: 'New York City Hall',
      lat: 40.713302700,
      lng: -74.006510000,
      imageSrc: 'img/NYCHall.jpg',
      redirectTmplUrl: 'templates/addToBucketList.html'
    });
	
	var createNYSE = configureImago({
		//New York Stock Exchange
      title: 'New York Stock Exchange',
      lat: 40.748709700,
      lng: -74.011318900,
      imageSrc: 'img/NYSE.jpg',
      redirectTmplUrl: 'templates/addToBucketList.html'
    });
	
	var createFederalHall = configureImago({
		//Federal Hall
      title: 'Federal Hall',
      lat: 40.706866100,
      lng: -74.011318900,
      imageSrc: 'img/FederalHall.jpg',
      redirectTmplUrl: 'templates/addToBucketList.html'
    });
	
	var createIntrepid = configureImago({
		//Intrepid Sea, Air & Space Museum 
      title: 'Intrepid Sea, Air & Space Museum',
      lat: 40.763726600,
      lng: -73.999178900,
      imageSrc: 'img/Intrepid.jpg',
      redirectTmplUrl: 'templates/addToBucketList.html'
    });
	
	var createFederalReserve = configureImago({
		//Federal Reserve
      title: 'Federal Reserve',
      lat: 40.708366300,
      lng:  -74.008653000,
      imageSrc: 'img/NYCFedReserve.jpg',
      redirectTmplUrl: 'templates/addToBucketList.html'
    });
	
	var createEmpireState = configureImago({
		//EmpireState Original 
      title: 'Empire State Building',
      lat: 40.748709700,
      lng: -73.985655600,
      imageSrc: 'img/EmpireState.jpg', // NEEDS IMAGE
      redirectTmplUrl: 'templates/addToBucketList.html'
    });
	
	
    // ADD ALL IMAGO TO THIS ARRAY
    var imagos = [
      createLiu,
      createMmuseum,
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
	  createRockefellerCenter	  
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
	
	function displayCamera(distanceInMiles){
		var MIN_RADIUS_IN_MILES = 0.1;
		
	    if(distanceInMiles <= MIN_RADIUS_IN_MILES) {
			return true;
		} else {
			return false;
		}
	}
	
	function isAnImagoNearby(currentLocation) {
		var distanceInMilesCache = 0;
		
		for(var imagoName in ImagoFactory.imagosCoordinates) {
			var coordinates = {
				latitude: ImagoFactory.imagosCoordinates[imagoName].lat,
				longitude: ImagoFactory.imagosCoordinates[imagoName].lng
			};
			
			var distanceInMiles = getMilesBtwnCurrentLocationAndImago(currentLocation, coordinates);
			if(!distanceInMilesCache || distanceInMiles < distanceInMilesCache) {
				distanceInMilesCache = distanceInMiles;
			}
		}
		
		if(distanceInMilesCache !== 0 && distanceInMilesCache <= .25) {
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

