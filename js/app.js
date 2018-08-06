$(document).ready(function () {

  $('#first').delay('2500').fadeOut('slow');
  $('#fixed').hide().delay('2500').fadeIn('slow');

  });


var map;
function initMap() {

  map = new google.maps.Map(document.getElementById ('map')[0], {
      zoom: 8,
      center: new google.maps.LatLng(-23.5298156, -47.1374002),
      mapTypeId: 'google.maps.MapTypeId.ROADMAP'
  });
}
 