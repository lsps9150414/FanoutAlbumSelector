/* Application Sripts */

$(function () {
  'use strict';

  var animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
      animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];

      $('button').on('click', toggleClass);

  function toggleClass(){
    //    alert(this);
    classie.has(this,"button-clicked")?
      classie.remove(this,"button-clicked"):classie.add(this,"button-clicked");
    $(this).on(animEndEventName, function(){classie.remove(this,"button-clicked")});
  }
});