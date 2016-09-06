angular.module('app.factories', [])

  .factory('ImagoFactory', function () {
    var markers = [];

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

          return map.addMarker(getMarkerConfigs(), function (marker) {
            marker.category = configs.category;
            marker.icon = configs.icon;
            markers.push(marker);
          });
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
        description: 'A branch of Long Island University in Brooklyn',
        originDate: '1926',
        address: '1 University Plaza, Brooklyn, NY 11201',
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
        description: 'museum in an old elevator shaft',
        originDate: '2012 and 2015',
        address: '4 Cortlandt Alley, New York, NY 10013',
        funFact: 'It started as a petite pet project of a trio of friends who run a film company out of an office upstairs from this alley attraction.',
        learnMore: 'http://www.roadsideamerica.com/story/37020',
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
        description: 'Street in Chinatown',
        originDate: '1791',
        address: 'Doyers St, New York, NY 10002',
        funFact: 'Has a rare 90-degree curve called the “bloody angle” which was once home to the most murders per square foot in New York City.',
        learnMore: 'https://en.wikipedia.org/wiki/Doyers_Street',
        points: '',
        category: 'landmark'
      },
      /*
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
    */
      fit: {
        lat: 40.746828200,
        lng: -73.993936600,
        title: 'The Museum at FIT',
        imgSrc: 'img/thumbnails/FIT.jpg',
        icon: {
          url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description: 'Fashion Institute of Technology\'s Museum',
        originDate: '1969',
        address: '227 W 27th St, New York, NY 10001',
        funFact: '',
        learnMore: 'http://www.fitnyc.edu/museum/',
        points: '',
        category: 'building'
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
        description: '',
        originDate: '',
        address: '',
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
        description: '',
        originDate: '',
        address: '',
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
        description: 'Grand Central Terminal is a commuter, rapid transit railroad terminal at 42nd Street and Park Avenue in Midtown Manhattan in New York City, United States.',
        originDate: '1871',
        address: '89 E 42nd St, New York, NY 10017',
        funFact: 'A once secret basement, widely referred to as M42, lies under the Terminal, containing converters used to supply electric currents to run the trains from the Terminal.',
        learnMore: 'http://www.grandcentralterminal.com/',
        points: '',
        category: 'landmark'
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
        description: 'Building without windows',
        originDate: '1974 -- Permanently Closed',
        address: '33 Thomas St, New York, NY 10007',
        funFact: 'AT&T wanted a building that could handle anything, especially a nuclear attack. In the event that Manhattan was bombed, AT&T wanted to be sure that the phone lines would not go down. So the architect made a building that was heavy-duty. Windows would make the structure weaker. They have estimated that the building would continue to operate without interruption for about two weeks after a nuclear bomb.',
        learnMore: 'https://en.wikipedia.org/wiki/33_Thomas_Street',
        points: '',
        category: 'building'
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
        description: 'Hotel in NYC',
        originDate: '1966',
        address: '768 5th Ave, New York, NY 10019',
        funFact: 'With the opening of the new Plaza Hotel came the introduction of the city\'s first-ever taxi cabs, which lined up along the hotel\'s entrance on its first day of business.',
        learnMore: 'http://www.fairmont.com/about-us/ourhistory/',
        points: '',
        category: 'building'
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
        description: 'The Metropolitan Museum of Art, colloquially "the Met", is located in New York City and is the largest art museum in the United States, and among the most visited art museums in the world.',
        originDate: '1870',
        address: '1000 5th Ave, New York, NY 10028',
        funFact: 'The Met was founded by a group of businessmen, financiers, artists, and cultural enthusiasts.',
        learnMore: 'http://www.metmuseum.org/',
        points: '',
        category: 'building'
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
        description: '',
        originDate: '',
        address: '',
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
        description: '',
        originDate: '',
        address: '',
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
        description: 'The Solomon R. Guggenheim Museum, often referred to as The Guggenheim, is an art museum located at 1071 Fifth Avenue on the corner of East 89th Street in the Upper East Side neighborhood of Manhattan, New York City.',
        originDate: '1939',
        address: '1071 5th Ave, New York, NY 10128',
        funFact: 'The Guggenheim Museum’s design, by Frank Lloyd Wright, was inspired by a seashell and the shape of the building is a play on the ancient Mesopotamian ziggurat, which narrows as it rises. Guggenheim’s structure actually widens as it rises.',
        learnMore: 'https://www.guggenheim.org/',
        points: '',
        category: 'building'
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
        description: 'Upscale art deco hotel',
        originDate: '1893',
        address: '301 Park Ave, New York, NY 10022',
        funFact: 'In the 1930s, the hotel invented room service. In the mood for a late night snack? You can order off of a specialty menu until 5am.',
        learnMore: 'http://www.waldorfnewyork.com/',
        points: '',
        category: 'building'
      },
      /*
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
      funFact: 'Under Rockefeller center there are a network of tunnels open to the public that connect the subway, and are filled with shops. Allowing a person to never leave the complex for the moment they arrive to the the time they leave.  ',
      learnMore: '',
      points: '',
      category: 'landmark'
    },
    */
      cityHall: {
        lat: 40.712746100,
        lng: -74.005974000,
        title: 'New York City Hall',
        imgSrc: 'img/thumbnails/NYCHall.jpg',
        icon: {
          url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description: 'New York City Hall is the seat of New York City government.',
        originDate: '1811',
        address: 'City Hall Park, New York, NY 10007',
        funFact: 'The oldest City Hall in the nation that still houses its original governmental functions, New York’s City Hall is also considered one of the finest architectural achievements of its period. ',
        learnMore: 'https://en.wikipedia.org/wiki/New_York_City_Hall',
        points: '',
        category: 'building'
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
        description: '',
        originDate: '',
        address: '',
        funFact: 'The NYSE is the oldest exchange in the United States, and now money is actually kept at the exchange itself.',
        learnMore: '',
        points: '',
        category: 'landmark'
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
        description: '',
        originDate: '',
        address: '',
        funFact: '',
        learnMore: '',
        points: '',
        category: 'building'
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
        description: '',
        originDate: '',
        address: '',
        funFact: '',
        learnMore: '',
        points: '',
        category: 'landmark'
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
        description: '',
        originDate: '',
        address: '',
        funFact: '',
        learnMore: '',
        points: '',
        category: 'building'
      },
      /*
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
      */
      chipilo: {
        lat: 40.715154200,
        lng: -73.999525400,
        title: 'Chipilo',
        imgSrc: 'img/thumbnails/chipilo.jpg',
        redirectTmplUrl: '/#/tabs/bucketList',
        icon: {
          url: 'www/img/thumbnails/markers/gold1.png'
        },
        description: '',
        originDate: '',
        address: '',
        funFact: '',
        learnMore: '',
        points: '',
        category: 'business'
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
        description: '',
        originDate: '',
        address: '',
        funFact: '',
        learnMore: '',
        points: '',
        category: 'business'
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
        description: '',
        originDate: '',
        address: '',
        funFact: '',
        learnMore: '',
        points: '',
        category: 'building'
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
        description: '',
        originDate: '',
        address: '',
        funFact: '',
        learnMore: '',
        points: 100,
        category: 'building'
      },

      desserts520: {
        lat: 40.761058000,
        lng: -73.833175000,
        title: '520 Desserts',
        imgSrc: 'img/thumbnails/520Desserts.jpg',
        icon: {
          url: 'www/img/thumbnails/markers/yellow1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description: '',
        originDate: '',
        address: '133-53 37th Avenue #101, Flushing, NY 11354',
        funFact: '',
        learnMore: 'http://520desserts.com/',
        points: ' ',
        category: 'business'
      },

      aquarium123: {
        lat: 40.719423100,
        lng: -73.995634300,
        title: '123 Aquarium Inc',
        imgSrc: 'img/thumbnails/123Aquarium.jpg',
        icon: {
          url: 'www/img/thumbnails/markers/yellow1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description: 'put description here',
        originDate: ' ',
        address: '123 Elizabeth St, New York, NY 10013',
        funFact: '',
        learnMore: 'put web link here',
        points: ' ',
        category: 'business'
      },

      yayaTeaGarden: {
        lat: 40.716358300,
        lng: -73.995086500,
        title: 'Yaya Tea Garden',
        imgSrc: 'img/thumbnails/yaya.jpg',
        icon: {
          url: 'www/img/thumbnails/markers/yellow1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description: 'put description here',
        originDate: ' ',
        address: '51 Chrystie St, New York, NY 10002',
        funFact: '',
        learnMore: 'http://yayatea.com/',
        points: ' ',
        category: 'business'
      },

      culturaPizzaEVita: {
        lat: 40.719453500,
        lng: -73.996539600,
        title: 'Cultura Pizza e Vita',
        imgSrc: 'img/thumbnails/cultura.jpg',
        icon: {
          url: 'www/img/thumbnails/markers/yellow1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description: 'put description here',
        originDate: ' ',
        address: '151 Mott St, New York, NY 10013',
        funFact: '',
        learnMore: 'http://culturapizzaevita.com/',
        points: ' ',
        category: 'business'
      },

      pateaBubbleTea: {
        lat: 40.718528900,
        lng: -73.996898900,
        title: 'Patea Bubble Tea',
        imgSrc: 'img/thumbnails/patea.jpg',
        icon: {
          url: 'www/img/thumbnails/markers/yellow1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description: 'put description here',
        originDate: ' ',
        address: '135 Mott St, New York, NY 10013',
        funFact: '',
        learnMore: 'http://www.pateabubbletea.com/',
        points: ' ',
        category: 'business'
      },

      saigonVietnameseSandwichDeli: {
        lat: 40.719935300,
        lng: -73.995866200,
        title: 'Saigon Vietnamese Sandwich Deli',
        imgSrc: 'img/thumbnails/Saigon.jpeg',
        icon: {
          url: 'www/img/thumbnails/markers/yellow1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description: 'put description here',
        originDate: ' ',
        address: '369 Broome St, New York, NY 10013',
        learnMore: 'http://www.banhmi.nyc/',
        points: ' ',
        category: 'business'
      },

      stPartricksCathedral: {
        lat: 40.761667000,
        lng: -73.974913600,
        title: 'St. Partrick\'s Cathedral ',
        imgSrc: 'img/thumbnails/stPatrick.jpg',
        icon: {
          url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description: 'put description here',
        originDate: ' ',
        address: '5th Ave, New York, NY 10022',
        funFact: '',
        learnMore: 'http://saintpatrickscathedral.org/',
        points: ' ',
        category: 'building'
      },

      carnegieHall: {
        lat: 40.764938000,
        lng: -73.979897000,
        title: 'Carnegie Hall',
        imgSrc: 'img/thumbnails/carnegieHall.jpg',
        icon: {
          url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description: 'put description here',
        originDate: ' ',
        address: '881 7th Ave, New York, NY 10019',
        funFact: '',
        learnMore: 'https://www.carnegiehall.org/Information/About-the-Building/',
        points: ' ',
        category: 'building'
      },

      NYPL: {
        lat: 40.753487700,
        lng: -73.980894400,
        title: 'New York Public Library',
        imgSrc: 'img/thumbnails/NYPL.jpg',
        icon: {
          url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description: 'put description here',
        originDate: ' ',
        address: ' 5th Ave at 42nd St, New York, NY 10018',
        funFact: '',
        learnMore: 'https://www.nypl.org/locations/schwarzman',
        points: ' ',
        category: 'building'
      },

      southStreetSeaport: {
        lat: 40.707087700,
        lng: -74.003546000,
        title: 'Put name here',
        imgSrc: 'img/thumbnails/SSSP.jpg',
        icon: {
          url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description: 'put description here',
        originDate: ' ',
        address: '19 Fulton Street, New York, NY 10038',
        funFact: '',
        learnMore: 'http://www.southstreetseaport.com/',
        points: ' ',
        category: 'landmark'
      },

      woolworthBuilding: {
        lat: 40.712449100,
        lng: -74.008292500,
        title: 'Woolworth Building ',
        imgSrc: 'img/thumbnails/.jpg',
        icon: {
          url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description: 'put description here',
        originDate: ' ',
        address: '233 Broadway, New York, NY 10007',
        funFact: '',
        learnMore: 'https://en.wikipedia.org/wiki/Woolworth_Building',
        points: ' ',
        category: 'landmark'
      },

      africanBurialGround: {
        lat: 40.714722500,
        lng: -74.005142500,
        title: 'African Burial Ground National Monument',
        imgSrc: 'img/thumbnails/africanBurialGround.jpg',
        icon: {
          url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description: 'put description here',
        originDate: ' ',
        address: ' 290 Broadway, New York, NY 10007',
        funFact: '',
        learnMore: 'https://www.nps.gov/afbg/index.htm',
        points: ' ',
        category: 'landmark'
      },

      grantNationalMemorial: {
        lat: 40.812632800,
        lng: -73.963017300,
        title: 'General Ulysses S Grant National Memorial',
        imgSrc: 'img/thumbnails/grantsTomb.jpg',
        icon: {
          url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description: 'put description here',
        originDate: ' ',
        address: 'W 122nd St & Riverside Dr, New York, NY 10027',
        funFact: '',
        learnMore: 'https://www.nps.gov/gegr/index.htm',
        points: ' ',
        category: 'landmark'

      },

      queensBotanicalGarden: {
        lat: 40.751152800,
        lng: -73.827472900,
        title: 'Queens Botanical Garden',
        imgSrc: 'img/thumbnails/QueensBotanicalGarden.jpg',
        icon: {
          url: 'www/img/thumbnails/markers/blue1.png'
        },
        redirectTmplUrl: '/#/tabs/bucketList',
        description: 'put description here',
        originDate: ' ',
        address: '43-50 Main St, Flushing, NY 11355',
        funFact: 'The Queens Botanical Garden began as part of the 1939 New York World\'s Fair in Queens.',
        learnMore: 'http://www.queensbotanical.org/',
        points: ' ',
        category: 'landmark'
      }
    }



    /*
  greenWoodCemetery: {
    lat: 40.658077900,
    lng: -73.994849300,
    title: 'Green-Wood Cemetery',
    imgSrc: 'img/thumbnails/.jpg',
    icon: {
        url: 'www/img/thumbnails/markers/blue1.png'
    },
    redirectTmplUrl: '/#/tabs/bucketList',
    description:'put description here',
    originDate:' ',
    address:'500 25th St, Brooklyn, NY 11232',
    funFact: '',
    learnMore: 'http://www.green-wood.com/about-history/',
    points: ' ',
    category: 'landmark'
  },

  hamiltonGrangeNationalMemorial: {
    lat: 40.821506900,
    lng: -73.946682800,
    title: 'Hamilton Grange National Memorial',
    imgSrc: 'img/thumbnails/.jpg',
    icon: {
        url: 'www/img/thumbnails/markers/blue1.png'
    },
    redirectTmplUrl: '/#/tabs/bucketList',
    description:'put description here',
    originDate:' ',
    address:'414 W 141st St, New York, NY 10031',
    funFact: '',
    learnMore: 'https://www.nps.gov/hagr/index.htm',
    points: ' ',
    category: 'landmark'
  },



  americanIndianMuseum: {
    lat:  40.704334200,
    lng: -74.013977600,
    title: 'National Museum of the American Indian',
    imgSrc: 'img/thumbnails/.jpg',
    icon: {
        url: 'www/img/thumbnails/markers/blue1.png'
    },
    redirectTmplUrl: '/#/tabs/bucketList',
    description:'put description here',
    originDate:' ',
    address:'1 Bowling Green, New York, NY 10004',
    funFact: '',
    learnMore: 'http://nmai.si.edu/visit/newyork/',
    points: ' ',
    category: 'building'
  },

  newYorkEarthRoom: {
    lat: 40.726023200,
    lng: 73.999851300,
    title: 'New York Earth Room',
    imgSrc: 'img/thumbnails/.jpg',
    icon: {
        url: 'www/img/thumbnails/markers/blue1.png'
    },
    redirectTmplUrl: '/#/tabs/bucketList',
    description:'put description here',
    originDate:' ',
    address:'141 Wooster St, New York, NY 10012',
    funFact: '',
    learnMore: 'http://www.diaart.org/visit/visit/walter-de-maria-the-new-york-earth-room-new-york-united-states',
    points: ' ',
    category: ' '
  },

  oldStoneHouse: {
    lat: 40.675845700t,
    lng: -73.987393700,
    title: 'Old Stone House',
    imgSrc: 'img/thumbnails/.jpg',
    icon: {
        url: 'www/img/thumbnails/markers/blue1.png'
    },
    redirectTmplUrl: '/#/tabs/bucketList',
    description:'put description here',
    originDate:' ',
    address:'336 3rd St, Brooklyn, NY 11215',
    funFact: '',
    learnMore: 'http://theoldstonehouse.org/',
    points: ' ',
    category: 'landmark'
  },

  schomburgCenterResearchBlackCulture: {
    lat: 40.814479400,
    lng: -73.940943500,
    title: 'Schomburg Center Research Black Culture',
    imgSrc: 'img/thumbnails/.jpg',
    icon: {
        url: 'www/img/thumbnails/markers/blue1.png'
    },
    redirectTmplUrl: '/#/tabs/bucketList',
    description:'put description here',
    originDate:' ',
    address:'515 Malcolm X Blvd, New York, NY 10037',
    funFact: '',
    learnMore: 'https://www.nypl.org/locations/schomburg?gclid=Cj0KEQjwxqS-BRDRgPLp0q2t0IUBEiQAgfMXRKgslQdaj6rqr99NkASFNrj5T-j_SXrpt8YtwCiOk90aArnj8P8HAQ',
    points: ' ',
    category: ' '
  },

  socratesSculpturePark: {
    lat: 40.767695100,
    lng: -73.936175100,
    title: 'Socrates Sculpture Park',
    imgSrc: 'img/thumbnails/.jpg',
    icon: {
        url: 'www/img/thumbnails/markers/blue1.png'
    },
    redirectTmplUrl: '/#/tabs/bucketList',
    description:'put description here',
    originDate:' ',
    address:'32-01 Vernon Blvd, Long Island City, NY 11106',
    funFact: '',
    learnMore: 'socratessculpturepark.org',
    points: ' ',
    category: 'landmark'
  }

}
*/



    var createLiu = configureImago(imagoDetails.LIU);
    var createMmuseumm = configureImago(imagoDetails.mmuseumm);
    var createDoyers = configureImago(imagoDetails.doyers);
    //    var createFlatironBuilding = configureImago(imagoDetails.flatiron);
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
    //    var createRockefellerCenter = configureImago(imagoDetails.rockefellerCenter);
    var createCityHall = configureImago(imagoDetails.cityHall);
    var createNYSE = configureImago(imagoDetails.NYSE);
    var createFederalHall = configureImago(imagoDetails.fedHall);
    var createIntrepid = configureImago(imagoDetails.intrepid);
    var createFederalReserve = configureImago(imagoDetails.fedReserve);
    //    var createEmpireState = configureImago(imagoDetails.empireState);
    var createChipilo = configureImago(imagoDetails.chipilo);
    var createLaBellaFerrara = configureImago(imagoDetails.laBellaFerrara);
    var createNFTEhq = configureImago(imagoDetails.NFTEhq);
    var createAppNexus = configureImago(imagoDetails.AppNexus);
    var createDesserts520 = configureImago(imagoDetails.desserts520);
    var createAquarium123 = configureImago(imagoDetails.aquarium123);
    var createYayaTeaGarden = configureImago(imagoDetails.yayaTeaGarden);
    var createCulturaPizzaEVita = configureImago(imagoDetails.culturaPizzaEVita);
    var createPateaBubbleTea = configureImago(imagoDetails.pateaBubbleTea);
    var createSaigonVietnameseSandwichDeli = configureImago(imagoDetails.saigonVietnameseSandwichDeli);
    var createStPartricksCathedral = configureImago(imagoDetails.stPartricksCathedral);
    var createCarnegieHall = configureImago(imagoDetails.carnegieHall);
    var createNYPL = configureImago(imagoDetails.NYPL);
    var createSouthStreetSeaport = configureImago(imagoDetails.southStreetSeaport);
    var createWoolworthBuilding = configureImago(imagoDetails.woolworthBuilding);
    var createAfricanBurialGround = configureImago(imagoDetails.africanBurialGround);
    var createGrantNationalMemorial = configureImago(imagoDetails.grantNationalMemorial);
    var createQueensBotanicalGarden = configureImago(imagoDetails.queensBotanicalGarden);

    // ADD ALL IMAGO TO THIS ARRAY
    var imagos = [
      createLiu,
      createMmuseumm,
      createDoyers,
      //        createEmpireState,
      //        createFlatironBuilding,
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
      //        createRockefellerCenter,
      createCityHall,
      createNYSE,
      createFederalHall,
      createIntrepid,
      createFederalReserve,
      //        createEmpireState,
      createLaBellaFerrara,
      createChipilo,
      createNFTEhq,
      createAppNexus,
      createDesserts520,
      createAquarium123,
      createYayaTeaGarden,
      createCulturaPizzaEVita,
      createPateaBubbleTea,
      createSaigonVietnameseSandwichDeli,
      createStPartricksCathedral,
      createCarnegieHall,
      createNYPL,
      createSouthStreetSeaport,
      createWoolworthBuilding,
      createAfricanBurialGround,
      createGrantNationalMemorial,
      createQueensBotanicalGarden
    ];

    return {
      getAllImagos: function (map) {
        imagos.forEach(function (initiateImagoFn) {
          return initiateImagoFn(map);
        });
      },
      imagoDetails: imagoDetails,
      markers: markers
    };
  })

  // $firebaseAuth instance
  .factory('Auth', ['$firebaseAuth',


    function ($firebaseAuth) {
      return $firebaseAuth();
    }

  ])




  // $firebaseUser instance
  .factory('Users', ['Auth', '$q', '$firebaseArray', '$firebaseObject',

    function (Auth, $q, $firebaseArray, $firebaseObject) {
      var rootRef = firebase.database().ref().child('users');
      var firebaseAuthUser = Auth.$getAuth();
      var firebaseDbUsers = $firebaseArray(rootRef);
      var firebaseDbUser = $firebaseObject(rootRef.child(firebaseAuthUser.uid));

      function getCurrent() {
        var deferred = $q.defer();

        firebaseDbUser.$loaded(function () {
          if (firebaseDbUser.$value === null) {
            firebaseDbUser.uid = 'firebaseAuthUser.uid';
            firebaseDbUser.displayName = firebaseAuthUser.displayName;
            firebaseDbUser.email = firebaseAuthUser.email;
            firebaseDbUser.photoURL = firebaseAuthUser.photoURL;
            firebaseDbUser.numOfImagos = 0;
            firebaseDbUser.totalPoints = 0;

            return firebaseDbUser.$save()
              .then(function (ref) {
                deferred.resolve(firebaseDbUser);
              });
          } else {
            if (firebaseDbUser.photoURL !== firebaseAuthUser.photoURL) {
              firebaseDbUser.photoURL = firebaseAuthUser.photoURL;
              return firebaseDbUser.$save()
                .then(function (ref) {
                  deferred.resolve(firebaseDbUser);
                });
            }
            return deferred.resolve(firebaseDbUser);
          }
        });

        return deferred.promise;
      }

      function getAll() {
        var deferred = $q.defer();

        firebaseDbUsers.$loaded(function () {
          deferred.resolve(firebaseDbUsers);
        });

        return deferred.promise;
      }

      return {
        getAll: getAll,
        getCurrent: getCurrent
      }
    }

  ])

  .factory('DistanceCalculationsFactory', function (ImagoFactory) {

    function getMilesBtwnTwoLocations(coordsA, coordsB) {
      var lat1 = coordsA.latitude;
      var lat2 = coordsB.latitude;
      var lon1 = coordsA.longitude;
      var lon2 = coordsB.longitude;

      var R = 3959; // Radius of the earth in miles
      var dLat = deg2rad(lat2 - lat1);  // deg2rad below
      var dLon = deg2rad(lon2 - lon1);
      var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c; // Distance in miles
      return d;
    }

    function deg2rad(deg) {
      return deg * (Math.PI / 180)
    }

    function getStepsBtwnTwoLocations(coordsA, coordsB) {
      // rought estimate
      // actual range is 1900-25000 steps per mile, depending on height
      var STEPS_IN_A_MILE = 2200;
      var milesBtwn = getMilesBtwnTwoLocations(coordsA, coordsB);

      return milesBtwn * STEPS_IN_A_MILE;
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
      var nameOfNearestImago;

      for (var imagoName in ImagoFactory.imagoDetails) {
        var imagoCoordinates = {
          latitude: ImagoFactory.imagoDetails[imagoName].lat,
          longitude: ImagoFactory.imagoDetails[imagoName].lng
        };

        var distanceInMiles = getMilesBtwnTwoLocations(currentLocation, imagoCoordinates);
        if (!distanceInMilesCache || distanceInMiles < distanceInMilesCache) {
          distanceInMilesCache = distanceInMiles;
          nameOfNearestImago = imagoName;
        }
      }

      if (distanceInMilesCache !== 0 && distanceInMilesCache <= .04734848) { // .04734848 miles is 250 feet
        return nameOfNearestImago;
      } else {
        return false;
      }
    }

    return {
      getMilesBtwnTwoLocations: getMilesBtwnTwoLocations,
      getBearingBtwnTwoLocations: getBearingBtwnTwoLocations,
      displayCamera: displayCamera,
      isAnImagoNearby: isAnImagoNearby,
      getStepsBtwnTwoLocations: getStepsBtwnTwoLocations
    }

  })

  .factory('StepsFactory', function (DistanceCalculationsFactory, $window) {
    var steps = { total: getStepsCount() };
    var coordsCache;

    function registerSteps(coords) {
      if (!coordsCache) {
        coordsCache = coords;
        return;
      }

      var numOfCurrentSteps = $window.localStorage.getItem('imagoStepCount') ? parseInt($window.localStorage.getItem('imagoStepCount')) : 0,
        numOfNewSteps = DistanceCalculationsFactory.getStepsBtwnTwoLocations(coordsCache, coords);

      coordsCache = coords;
      steps.total = numOfCurrentSteps + numOfNewSteps;
      return $window.localStorage.setItem('imagoStepCount', steps.total);
    }

    function getStepsCount() {
      return $window.localStorage.getItem('imagoStepCount') ? parseInt($window.localStorage.getItem('imagoStepCount')) : 0;
    }

    return {
      registerSteps: registerSteps,
      getStepsCount: getStepsCount,
      steps: steps
    }
  })

  .factory('Camera', function ($cordovaCamera, $q) {
    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: false,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    function takePicture() {
      return $cordovaCamera.getPicture(options)
    }

    return {
      takePicture: takePicture
    }
  })


  .factory('Map', function () {
    var map;

    // Initialize the map view
    function initializeMap(div) {
      map = plugin.google.maps.Map.getMap(div, {
        controls: {
          compass: true,
          myLocationButton: true,
          zoom: true
        }
      });

      return map;
    }

    return {
      initializeMap: initializeMap,
      map: map
    }

  });

