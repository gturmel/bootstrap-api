$(function(){
   'use strict';

var map;

window.initMap = function () {
   console.log('works great');
 map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });//end of arguments for map
}; // end of function initMap


});//end of line
