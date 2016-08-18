angular.module('app.factories', [])
  .factory('Imagos', function () {

    function getLIU(map) {
      //LIU
      var LIUcontentString = '<div id="content" class="popUp">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<div id="bodyContent">' +
        '<center><img class="hint" src="img/LIU.jpg"></center>' +
        '</div>' +
        '</div>';

      var LIUInfoWindow = new google.maps.InfoWindow({
        content: LIUcontentString,
        maxWidth: 200,
        maxHeight: 200,
      });

      var LIULatLng = { lat: 40.6909652, lng: -73.9814591 };
      var LIU = new google.maps.Marker({
        position: LIULatLng,
        map: map,
        title: 'Long Island University'
      });

      LIU.addListener('click', function () {
        LIUInfoWindow.open(map, LIU);
      });
    }

    function getMmuseum(map) {
      var mmuseummContentString = '<div id="content" class="popUp">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<div id="bodyContent">' +
        '<center><img class="hint" src="img/mmuseumm.jpg"></center>' +
        '</div>' +
        '</div>';

      var mmuseummInfoWindow = new google.maps.InfoWindow({
        content: mmuseummContentString,
        maxWidth: 200,
        maxHeight: 200,
      });

      var mmuseummLatLng = { lat: 40.717366, lng: -74.002747 };
      var mmuseumm = new google.maps.Marker({
        position: mmuseummLatLng,
        map: map,
        title: 'Mmuseumm'
      });

      mmuseumm.addListener('click', function () {
        mmuseummInfoWindow.open(map, mmuseumm);
      });
    }

    function getDoyers(map) {
      var doyersContentString = '<div id="content" class="popUp">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<div id="bodyContent">' +
        '<center><img class="hint" src="img/doyers.jpg"></center>' +
        '</div>' +
        '</div>';

      var doyersInfoWindow = new google.maps.InfoWindow({
        content: doyersContentString,
        maxWidth: 200,
        maxHeight: 200,
      });

      var doyersLatLng = { lat: 40.714428, lng: -73.998113 };
      var doyers = new google.maps.Marker({
        position: doyersLatLng,
        map: map,
        title: 'Doyers'
      });

      doyers.addListener('click', function () {
        doyersInfoWindow.open(map, doyers);
      });
    }


    return {
      getLIU: getLIU,
      getMmuseum: getMmuseum,
      getDoyers: getDoyers
    };
  })

  .factory('DistanceCalculations', function () {

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

    return {
      getMilesBtwnCurrentLocationAndImago: getMilesBtwnCurrentLocationAndImago
    }

  });

