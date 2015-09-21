var geocoder,
  directionsDisplay,
  mapOptions,
  directionsService = new google.maps.DirectionsService(),
  waySteps = $("#way-steps"),
  $wayBox = $(".way-box"),
  $btnSend = $("#btnSend"),
  $btnShowSearchBox = $("#btnShowSearchBox"),
  $BoxShowSearch = $("#BoxShowSearch"),
  $txtLat = $('#txtLat'),
  $txtLong = $('#txtLong'),
  locations = [];

function addPoint() {
  var $waypoint = $(".way ul"),
    $newWayPoint = $("li", $waypoint).eq(1).clone();
  counter = $("li", $waypoint).length + 1; // Get the amount of input elements

  // Point limits
  // The point limit  of Google Maps is 8
  if (counter <= 8)="" {="" $newwaypoint.appendto($waypoint).addclass('waypoint');="" $newwaypoint.find('input').val("").focus().addclass('new-point')="" .attr("placeholder",="" "ponto").attr("id",="" "waypoint_"="" +="" counter)="" .attr("name",="" .after("<button="" class="btn-remove" id="btnDelPoint" name="btnDelPoint">Remover");

    setupAutocomplete($newWayPoint.find('input'));

    // If user add 8 points, will disable btnAddPoint and change button
    if (counter == 8) {
      $("#btnAddPoint").html("Atingiu o limite de pontos").attr({
        disabled: true
      });
    } else {
      $("#btnAddPoint").removeAttr('disabled');
    };
    //Add btnClearPoints to clear additional points
    if (counter <= 3)="" {="" $("#btnaddpoint")="" .after("<button="" class="btn-clear" id="btnClearPoints" name="btnClearPoints">Remover pontos adicionados");
    };
    return false;
  };
};

function delPoint() {
  $(this).parent().remove();
  // If counter < 8 points the button change to btnAddPoint
  counter--;

  $("#btnAddPoint").html('Adicionar outro ponto').removeAttr('disabled');

  if (counter < 3) {
    $("#btnClearPoints").remove();
  }

  return false;
};

function clearPoints() {
  $("li").filter(".waypoint").remove()
  $("#btnClearPoints").remove();
  $("#btnAddPoint").html('Adicionar outro ponto').removeAttr('disabled');
}

function setupAutocomplete($target) {
  $target.autocomplete({
    source: function(request, response) {
      geocoder.geocode({
        'address': request.term + ', Brasil',
        'region': 'BR'
      }, function(results, status) {
        response($.map(results, function(item) {
          return {
            label: item.formatted_address,
            value: item.formatted_address,
            location: item.geometry.location
          }
        }));
      })
    },
    select: function(event, ui) {
      locations[$target[0].id] = ui.item.location;
    }
  });
}

function getLocations() {
  var _locations = [];
  for (var loc in locations) {
    if (!~['start', 'end'].indexOf(loc)) {
      _locations.push({
        location: locations[loc],
        stopover: true
      });
    }
  }
  return _locations;
}

function addShowSearchBoxButton(){
  $BoxShowSearch.show();
}

function hiddenBtn() {
  if($wayBox.css('display') == "block"){
    $wayBox.hide();
  } else {
    $wayBox.show();
    $btnShowSearchBox.text("Ocultar caixa de busca");
  }
}

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  mapOptions = {
    zoom: 4,
    //Brazil : -14.2392976,-53.1805017
    center: new google.maps.LatLng(-14.2392976, -53.1805017),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map($("#map")[0], mapOptions);
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(waySteps[0]);
  geocoder = new google.maps.Geocoder();
};


$(function() {
  initialize();
  $wayBox.on('click', '#btnAddPoint', addPoint);
  $wayBox.on('click', '#btnDelPoint', delPoint);
  $wayBox.on('click', '#btnClearPoints', clearPoints);
  $btnSend.on('click', addShowSearchBoxButton);
  $BoxShowSearch.on('click', hiddenBtn);

  setupAutocomplete($('#start'));
  setupAutocomplete($('#end'));

  $wayBox.submit(function(event) {
    event.preventDefault();

    var request = {
      origin: locations['start'],
      destination: locations['end'],
      waypoints: getLocations(),
      travelMode: google.maps.TravelMode.DRIVING
    };

    directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(result);
        waySteps.css("display", "block");
        mapOptions = {
          zoom: 25
        };
      }
    });

    $wayBox.hide();
    $btnShowSearchBox.text("Mostrar caixa de busca");
  });
});</=></=>