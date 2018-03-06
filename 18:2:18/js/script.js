$(document).ready(() => {
  $('.bar').on('click', event => {
    $(event.currentTarget).addClass('ninety-height');
  });

});
// .on('mouseleave', event => {
//   $(event.currentTarget).toggle('right');
// });
