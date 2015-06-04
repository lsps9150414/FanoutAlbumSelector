/* Application Sripts */

$(function () {
  'use strict';

  var curentSelectedAlbum = 1;
  var currentRotateDeg = 0;

  function rotateLeft(){
//    var rotateDeg = curentSelectedAlbum *(-20);
    currentRotateDeg = parseInt(currentRotateDeg) + 20;
    var rotateSting = 'rotate(' + currentRotateDeg + 'deg)';
    $('.rotator').css('transform', rotateSting);

    curentSelectedAlbum = ( 
      curentSelectedAlbum == 1 ? 
      18 : (curentSelectedAlbum - 1)%18
    );

    var querySelectedAlbum = '.album:nth-child(' + curentSelectedAlbum + ')';

    $('.album').removeClass('selected');
    $(querySelectedAlbum).addClass('selected');
  }
  function rotateRight(){
//    var rotateDeg = curentSelectedAlbum *(-20);
    currentRotateDeg = parseInt(currentRotateDeg) - 20;
    var rotateSting = 'rotate(' + currentRotateDeg + 'deg)';
    $('.rotator').css('transform', rotateSting);

    curentSelectedAlbum = ( 
      curentSelectedAlbum == 17 ? 
      18 : (curentSelectedAlbum + 1)%18
    );

    var querySelectedAlbum = '.album:nth-child(' + curentSelectedAlbum + ')';

    $('.album').removeClass('selected');
    $(querySelectedAlbum).addClass('selected');
  }
  
  $('.rotateLeft').on('click', rotateLeft);
  $('.rotateRight').on('click', rotateRight);

});
