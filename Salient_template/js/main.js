// AOS
AOS.init({
  duration: 1000,
  once: true,
})

jQuery(document).ready(function($){
  'use strict';

  // Scrollax
  $.Scrollax();
  var templateUXAnimsition = function() {
    $(".animsition").animsition();
  };
  templateUXAnimsition();
  
  var templateUXSmoothScoll = function() {
    // Smooth scroll
    var $root = $('html, body');
    $('a.js-smoothscroll[href^="#"]').click(function () {
      $root.animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);

      return false;
    });
  };
  templateUXSmoothScoll();

  var templateUXCarousel = function() {
    $('.wide-slider').owlCarousel({
      loop:true,
      autoplay: false,
      margin:0,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      nav:true,
      autoplayHoverPause: false,
      items: 1,
      autoheight: true,
      navText : ["<span class='ion-android-arrow-dropleft'></span>","<span class='ion-android-arrow-dropright'></span>"],
      responsive:{
        0:{
          items:1,
          nav:true
        },
        600:{
          items:1,
          nav:true
        },
        1000:{
          items:1,
          nav:true
        }
      }
    });

    $('.wide-slider-testimonial').owlCarousel({
      loop:true,
      autoplay: true,
      margin:0,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      nav: false,
      autoplayHoverPause: false,
      items: 1,
      autoheight: true,
      navText : ["<span class='ion-android-arrow-dropleft'></span>","<span class='ion-android-arrow-dropright'></span>"],
      responsive:{
        0:{
          items:1,
          nav:false
        },
        600:{
          items:1,
          nav:false
        },
        1000:{
          items:1,
          nav:false
        }
      }
    });
  };
  templateUXCarousel();

  var templateUXHamburgerTrigger = function() {
    $('.templateux-toggle-menu').on('click', function(e){
      var $this = $(this);
      if ( $('body').hasClass('menu-open') ) {
        $this.removeClass('is-active');
        
          $('.templateux-menu .templateux-menu-inner > ul > li').each(function() {
            $(this).removeClass('is-show');
          });
        
        setTimeout(function() {
          $('.templateux-menu').fadeOut(400);
        }, 500);

        $('body').removeClass('menu-open');
      } else {
        $('.templateux-menu').fadeIn(400);
        $this.addClass('is-active');
        $('body').addClass('menu-open');

        setTimeout(function() {
          $('.templateux-menu .templateux-menu-inner > ul > li').each(function() {
            $(this).addClass('is-show');
          });
        }, 500);
        
      }
      e.preventDefault();
    })
  };
  templateUXHamburgerTrigger();


  var templateUXCounter = function() {
    
    $('#templateux-counter-section').waypoint( function( direction ) {

      if( direction === 'down' && !$(this.element).hasClass('templateux-animated') ) {

        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
        $('.templateux-number').each(function(){
          var $this = $(this),
            num = $this.data('number');
            console.log(num);
          $this.animateNumber(
            {
              number: num,
              numberStep: comma_separator_number_step
            }, 7000
          );
        });
        
      }

    } , { offset: '95%' } );

  };
  templateUXCounter();

  var templateUXIsotope = function() {
    var $container = $('#gallery-content-center');
    $container.isotope({itemSelector : '.grid-item'});
  };
  templateUXIsotope();


  var DateAndTimepicker = function() {
    $('.js-timepicker').timepicker();
    $('.js-datepicker').datepicker();
  };
  DateAndTimepicker();


  var templateUXScroll = function() {
    $(window).scroll(function(){
      var $w = $(this),
          st = $w.scrollTop(),
          navbar = $('.templateux-header'),
          sd = $('.js-scroll-wrap');

      if (st > 150) {
        if ( !navbar.hasClass('scrolled') ) {
          navbar.addClass('scrolled');  
        }
      } 
      if (st < 150) {
        if ( navbar.hasClass('scrolled') ) {
          navbar.removeClass('scrolled sleep');
        }
      } 
      if ( st > 350 ) {
        if ( !navbar.hasClass('awake') ) {
          navbar.addClass('awake'); 
        }
      }
      if ( st < 350 ) {
        if ( navbar.hasClass('awake') ) {
          navbar.removeClass('awake');
          navbar.addClass('sleep');
        }
      }
    });
  };

  templateUXScroll();

});