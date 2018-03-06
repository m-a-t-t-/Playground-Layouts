$(document).ready(() => {

    var bodyWidth = document.body.clientWidth
    var bodyHeight = document.body.clientHeight;
    var randPosX = Math.floor((Math.random()*bodyWidth));
    var randPosY = Math.floor((Math.random()*bodyHeight));

    $('#rand_pos').on('mouseenter', () => {
      $('#rand_pos').css('left', randPosX);
    });
});



  // $('.rand').mouseenter(function() {
  //   $(this).css('left', randPosX);
  //   $(this).css('top', randPosY);
  // });
