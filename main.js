var app;
var map;

class App {
  constructor(title) {
    this.title = title;

    this.placeList = [];
  }

  initialize() {
    console.log("app initialize");

    document.title = this.title;

    this.initializePlaces();

    console.log("create the map");

    // create the map
    map = L.map("map").setView([51.508328, -0.124819], 11);
    
    // Add existing found places
    let foundPlaces = JSON.parse(window.localStorage.getItem("places") || "{}");
    this.placeList.forEach((place) => {
      if (foundPlaces[place.name]) {
        place.showOverlay();
      }
    });

    //popup clues

    function onEachFeature(feature, layer) {
      let popupContent = `<p> ${feature.properties.clue}</p>`;
      layer.on("click", function (e) {
        document.getElementById("hint").innerHTML = feature.properties.clue;
      });
    }

    //addtubelines
    var waterlooLayer = L.geoJSON(waterlooLine, {
      style(feature) {
        return feature.properties && feature.properties.style;
      },

      onEachFeature,

      pointToLayer(feature, latlng) {
        return L.circleMarker(latlng, {
          radius: 4,
          fillColor: "#95CDBA",
          color: "#000",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8,
        });
      },
    });

    var piccadillyLayer = L.geoJSON(piccadillyLine, {
      style(feature) {
        return feature.properties && feature.properties.style;
      },

      onEachFeature,

      pointToLayer(feature, latlng) {
        return L.circleMarker(latlng, {
          radius: 4,
          fillColor: "#003688",
          color: "#000",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8,
        });
      },
    });

    var northernLayer = L.geoJSON(northernLine, {
      style(feature) {
        return feature.properties && feature.properties.style;
      },

      onEachFeature,

      pointToLayer(feature, latlng) {
        return L.circleMarker(latlng, {
          radius: 4,
          fillColor: "#000",
          color: "#000",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8,
        });
      },
    });

    var metropolitanLayer = L.geoJSON(metropolitanLine, {
      style(feature) {
        return feature.properties && feature.properties.style;
      },

      onEachFeature,

      pointToLayer(feature, latlng) {
        return L.circleMarker(latlng, {
          radius: 4,
          fillColor: "#9B0056",
          color: "#000",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8,
        });
      },
    });

    var hammersmithLayer = L.geoJSON(hammersmithLine, {
      style(feature) {
        return feature.properties && feature.properties.style;
      },

      onEachFeature,

      pointToLayer(feature, latlng) {
        return L.circleMarker(latlng, {
          radius: 4,
          fillColor: "#F3A9BB",
          color: "#000",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8,
        });
      },
    });

    var districtLayer = L.geoJSON(districtLine, {
      style(feature) {
        return feature.properties && feature.properties.style;
      },

      onEachFeature,

      pointToLayer(feature, latlng) {
        return L.circleMarker(latlng, {
          radius: 4,
          fillColor: "#00782A",
          color: "#000",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8,
        });
      },
    });

    var circleLayer = L.geoJSON(circleLine, {
      style(feature) {
        return feature.properties && feature.properties.style;
      },

      onEachFeature,

      pointToLayer(feature, latlng) {
        return L.circleMarker(latlng, {
          radius: 4,
          fillColor: "#FFD300",
          color: "#000",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8,
        });
      },
    });

    var jubileeLayer = L.geoJSON(jubileeLine, {
      style(feature) {
        return feature.properties && feature.properties.style;
      },

      onEachFeature,

      pointToLayer(feature, latlng) {
        return L.circleMarker(latlng, {
          radius: 4,
          fillColor: "#868F98",
          color: "#000",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8,
        });
      },
    });

    var bakerlooLayer = L.geoJSON(bakerlooLine, {
      style(feature) {
        return feature.properties && feature.properties.style;
      },

      onEachFeature,

      pointToLayer(feature, latlng) {
        return L.circleMarker(latlng, {
          radius: 4,
          fillColor: "#B36305",
          color: "#000",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8,
        });
      },
    });

    var centralLayer = L.geoJSON(centralLine, {
      style(feature) {
        return feature.properties && feature.properties.style;
      },

      onEachFeature,

      pointToLayer(feature, latlng) {
        return L.circleMarker(latlng, {
          radius: 4,
          fillColor: "#E32017",
          color: "#000",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8,
        });
      },
    });

    var victoriaLayer = L.geoJSON(victoriaLine, {
      style(feature) {
        return feature.properties && feature.properties.style;
      },

      onEachFeature,

      pointToLayer(feature, latlng) {
        return L.circleMarker(latlng, {
          radius: 4,
          fillColor: "#0098D4",
          color: "#000",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8,
        });
      },
    });

    //layercontrol
    var cities = L.layerGroup([jubileeLayer]);
    var cities2 = L.layerGroup([victoriaLayer]);
    var cities3 = L.layerGroup([centralLayer]);
    var cities4 = L.layerGroup([bakerlooLayer]);
    var cities5 = L.layerGroup([circleLayer]);
    var cities6 = L.layerGroup([districtLayer]);
    var cities7 = L.layerGroup([hammersmithLayer]);
    var cities8 = L.layerGroup([metropolitanLayer]);
    var cities9 = L.layerGroup([northernLayer]);
    var cities10 = L.layerGroup([piccadillyLayer]);
    var cities11 = L.layerGroup([waterlooLayer]);

    var overlayMaps = {
      Jubilee: cities,
      Victoria: cities2,
      Central: cities3,
      Bakerloo: cities4,
      Circle: cities5,
      District: cities6,
      "Hammersmith & City": cities7,
      Metropolitan: cities8,
      Northern: cities9,
      Piccadilly: cities10,
      "Waterloo & City": cities11,
    };

    var layerControl = L.control.layers(overlayMaps).addTo(map);

    // add tiles
    const tiles = L.tileLayer(
      "https://api.mapbox.com/styles/v1/gmapsmania/clmf0lma401g001pecfxf21s7/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ21hcHNtYW5pYSIsImEiOiJOYnlnSFpvIn0.5f62d0cnrWCA1KioxzXtqg",
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    ).addTo(map);

    const text_a = document.getElementById("text_a");

    // (1) convert input name to upper case
    // (2) when enter key pressed enter the place name
    text_a.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        app.enterStreet();
      } else if (text_a.value) {
        text_a.value = text_a.value.toUpperCase();
      }
    });

    // show initial score
    this.displayScore();
  }
} // App

function loadPage() {
  console.log("load page");

  app = new App("TubeQuiz");
  app.initialize();
}
