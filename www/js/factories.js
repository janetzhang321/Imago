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

    var createLiu = configureImago({
      title: 'Long Island University',
      lat: 40.6909652,
      lng: -73.9814591,
      imageSrc: 'img/LIU.jpg',
      redirectTmplUrl: 'templates/addToBucketList.html'
    });

    var createMmuseum = configureImago({
      title: 'Mmuseumm',
      lat: 40.717366,
      lng: -74.002747,
      imageSrc: 'img/mmuseumm.jpg',
      redirectTmplUrl: 'templates/addToBucketList.html'
    });

    var createDoyers = configureImago({
      title: 'Doyers',
      lat: 40.714428,
      lng: -73.998113,
      imageSrc: 'img/doyers.jpg',
      redirectTmplUrl: 'templates/addToBucketList.html'
    });

    var createEmpireState = configureImago({
      title: 'Empire State Building',
      lat: 40.748709700,
      lng: -73.985655600,
      imageSrc: '', // NEEDS IMAGE
      redirectTmplUrl: 'templates/addToBucketList.html'
    });

    // ADD ALL IMAGO TO THIS ARRAY
    var imagos = [
      createLiu,
      createMmuseum,
      createDoyers,
      createEmpireState
    ]

    return {
      getAllImagos: function (map) {
        imagos.forEach(function (initiateImagoFn) {
          return initiateImagoFn(map);
        })
      }
    };
  })


















  .factory('DistanceCalculationsFactory', function () {

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

    return {
      getMilesBtwnCurrentLocationAndImago: getMilesBtwnCurrentLocationAndImago,
      getBearingBtwnTwoLocations: getBearingBtwnTwoLocations
    }

  });

