$(function(){
   'use strict';

var map;

function initMap() {
   console.log('works great');
 map = new google.maps.Map($('#map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
 });//end of arguments for map
}; // end of function initMap


});//end of line
