
$(document).ready(() => {
  $('.login-button').on('click', () => {
  	$('.login-form').toggle(1000);
  });
});



// $(document).ready(() => {
//   const $menuButton = $('.menu-button');
//   const $navDropdown = $('#nav-dropdown');
// 	$($menuButton).on('click', () => {
//     $navDropdown.toggle();
//   });
//
//
// });

// $(document).ready(() => {
//   $('.hide-button').on('click', () => {
//     $('.first-image').hide();
//   });
//
//   $('.show-button').on('click', () => {
//     $('.first-image').show();
//   });
//
//   $('.toggle-button').on('click', () => {
//     $('.first-image').toggle();
//   });
//
//   $('.fade-out-button').on('click', () => {
//     $('.fade-image').fadeOut(500);
//   });
//
//   $('.fade-in-button').on('click', () => {
//     $('.fade-image').fadeIn(4000);
//   });
//
//   $('.fade-toggle-button').on('click', () => {
// 		$('.fade-image').fadeToggle("fast", "swing");
//   });
// });


// $('.example-class').on('mouseenter', () => {
//   $('.example-class-one').show();
// }).on('mouseleave', () => {
//   $('.example-class-one').hide();
// });

// $('.example-class').on('mouseenter', event => {
//   $(event.currentTarget).addClass('photo-active');
// });

// $(document).ready(() => {
//   $('.login-button').on('click', () => {
//     $('.login-form').show();
//   });
//
//   $('.menu-button').on('mouseenter', () => {
//     $('.nav-menu').show()
//   })
//
//   $('.nav-menu').on('mouseleave', () => {
//     $('.nav-menu').hide();
//   })
//
//   $('.product-photo').on('mouseenter', event => {
//     $(event.currentTarget).addClass('photo-active')
//   }).on('mouseleave', event => {
//     $(event.currentTarget).removeClass('photo-active')
//   })
//
// });


// css rules
// $(document).ready(() => {
//
//   $('.login-button').on('click', () => {
//     $('.login-form').toggle();
//   });
//
//   $('.menu-button').on('mouseenter', () => {
//     $('.nav-menu').show();
//     $('.menu-button').css({
//       color: '#C3FF00',
//       backgroundColor: '#535353'
//     })
//   })
//
//   $('.nav-menu').on('mouseleave', () => {
//     $('.nav-menu').hide();
//     $('.menu-button').css({
//       color: '#EFEFEF',
//       backgroundColor: '#303030'
//     })
//   })
//
// });

// lesson 4
// $(document).ready(() => {
//
//   $('.login-button').on('click', () => {
//     $('.login-form').toggle();
//   });
//
//   $('.menu-button').on('mouseenter', () => {
//     $('.nav-menu').show();
//     $('.menu-button').css({
//       color: '#C3FF00',
//       backgroundColor: '#535353'
//     })
//     $('.menu-button').animate({
//       fontSize: '24px'
//     },200);
//   })
//
//   $('.nav-menu').on('mouseleave', () => {
//     $('.nav-menu').hide();
//     $('.menu-button').css({
//       color: '#EFEFEF',
//       backgroundColor: '#303030'
//     })
//     $('.menu-button').animate({
//       fontSize: '18px'
//     },200);
//   })
//
// });

// lesson 5
// $(document).ready(() => {
//
//   $('.login-button').on('click', () => {
//     $('.login-form').toggle();
//   });
//
//   $('.menu-button').on('mouseenter', () => {
//     $('.nav-menu').show();
//     $('.menu-button').addClass('button-active');
//     $('.nav-menu').removeClass('hide');
//     $('.menu-button').animate({
//       fontSize: '24px'
//     },200);
//   })
//
//   $('.nav-menu').on('mouseleave', () => {
//     $('.nav-menu').hide();
//     $('.menu-button').css({
//       color: '#EFEFEF',
//       backgroundColor: '#303030'
//     })
//     $('.menu-button').animate({
//       fontSize: '18px'
//     },200);
//   })
//
// });

// lesson 6
// $(document).ready(() => {
//
//   $('.login-button').on('click', () => {
//     $('.login-form').toggle();
//   });
//
//   $('.menu-button').on('mouseenter', () => {
//     $('.nav-menu').show();
//     $('.menu-button').addClass('button-active');
//     $('.nav-menu').removeClass('hide');
//     $('.menu-button').animate({
//       fontSize: '24px'
//     },200);
//   })
//
//   $('.nav-menu').on('mouseleave', () => {
//     $('.nav-menu').hide();
//     $('.menu-button').css({
//       color: '#EFEFEF',
//       backgroundColor: '#303030'
//     })
//     $('.menu-button').animate({
//       fontSize: '18px'
//     },200);
//   })
//
// });

// 6/3/18 - codecademy - jquery
// Lesson 1
// $(document).ready(() => {
//
//   $('.shoe-details').show();
//
//   $('.more-details-button').on('click', event => {
//
//   });
//
//   $('.shoe-details li').on('click', event => {
//     $(event.currentTarget).addClass('active');
//     $('.shoe-details').children().removeClass('disabled');
//     $(event.currentTarget).siblings().removeClass('active')
//
//
//   });



  ///////////////////////////////////////////
//   $('.login-button').on('click', () => {
//     $('.login-form').toggle();
//     $('.login-button').toggleClass('button-active');
//   });
//
//   $('.product-photo').on('mouseenter', () => {
//     $(this).addClass('photo-active');
//   }).on('mouseleave', function() {
//     $(this).removeClass('photo-active');
//   });
//
//   $('.menu-button').on('click', () => {
//     $('.menu-button').toggleClass('button-active');
//     $('.nav-menu').toggleClass('hide');
//   });
// })
// LESSON - .next()
// $(document).ready(() => {

  // $('.shoe-details').show();
  //
  // $('.more-details-button').on('click', event => {
  //  	$(event.currentTarget).closest('.product-details').next().toggle();
  // });
  //
  // $('.shoe-details li').on('click', event => {
  //   $(event.currentTarget).addClass('active');
  //   $(event.currentTarget).siblings().removeClass('active');
  //   $(event.currentTarget).closest('.shoe-details').children().removeClass('disabled');
  // });



  ///////////////////////////////////////////
//   $('.login-button').on('click', () => {
//     $('.login-form').toggle();
//     $('.login-button').toggleClass('button-active');
//   });
//
//   $('.product-photo').on('mouseenter', () => {
//     $(this).addClass('photo-active');
//   }).on('mouseleave', function() {
//     $(this).removeClass('photo-active');
//   });
//
//   $('.menu-button').on('click', () => {
//     $('.menu-button').toggleClass('button-active');
//     $('.nav-menu').toggleClass('hide');
//   });
// })

//LESSON 6 - .find()
// $(document).ready(() => {
//
//   $('.more-details-button').on('click', event => {
//     $(event.currentTarget).closest('.product-details').next().toggle()
//     $(event.currentTarget).find('img').toggleClass('rotate')
//   });
//
//   $('.shoe-details li').on('click', event => {
//     $(event.currentTarget).addClass('active');
//
//     $(event.currentTarget).siblings().removeClass('active')
//
//     $(event.currentTarget).closest('.shoe-details').children().removeClass('disabled')
//
//
//   });



  ///////////////////////////////////////////
//   $('.login-button').on('click', () => {
//     $('.login-form').toggle();
//     $('.login-button').toggleClass('button-active');
//   });
//
//   $('.product-photo').on('mouseenter', () => {
//     $(this).addClass('photo-active');
//   }).on('mouseleave', function() {
//     $(this).removeClass('photo-active');
//   });
//
//   $('.menu-button').on('click', () => {
//     $('.menu-button').toggleClass('button-active');
//     $('.nav-menu').toggleClass('hide');
//   });
// })
