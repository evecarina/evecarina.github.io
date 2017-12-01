$( document ).ready(function() {
  // Main variables
    var $aboutTitle = $('.about-myself .content h2');
    var $developmentWrapper = $('.development-wrapper');
    var developmentIsVisible = false;


  /* ####### HERO SECTION ####### */

  $('.hero .content .header').delay(500).animate({
    'opacity':'1',
    'top': '50%'
  },1000);


  $(window).scroll( function(){

    var bottom_of_window = $(window).scrollTop() + $(window).height();

    /* ##### ABOUT MYSELF SECTION #### */
    if( bottom_of_window > ($aboutTitle.offset().top + $aboutTitle.outerHeight())){
      $('.about-myself .content h2').addClass('aboutTitleVisible');
    } 
  /* ##### EXPERIENCE SECTION #### */

      // Check the location of each element hidden */
      $('.experience .content .hidden').each( function(i){

          var bottom_of_object = $(this).offset().top + $(this).outerHeight();

          /* If the object is completely visible in the window, fadeIn it */
          if( bottom_of_window > bottom_of_object ){

            $(this).animate({
              'opacity':'1',
              'margin-left': '0'
            },600);
          }
      });

  /*###### SKILLS SECTION ######*/

    var middle_of_developmentWrapper = $developmentWrapper.offset().top + $developmentWrapper.outerHeight()/2;

    if((bottom_of_window > middle_of_developmentWrapper)&& (developmentIsVisible == false)){

      $('.skills-bar-container li').each( function(){

        var $barContainer = $(this).find('.bar-container');
        var dataPercent = parseInt($barContainer.data('percent'));
        var elem = $(this).find('.progressbar');
        var percent = $(this).find('.percent');
        var width = 0;

        var id = setInterval(frame, 15);

        function frame() {
          if (width >= dataPercent) {
              clearInterval(id);
          } else {
            width++;
            elem.css("width", width+"%");
            percent.html(width+" %");
          }
        }
      });
      developmentIsVisible = true;
    }
  }); // -- End window scroll --
});

// portafolio
$(document).ready(function(){
  $('#slider').fadeIn('slow').delay(200);
  $("#sticker").sticky({topSpacing:0});
});

//https://dribbble.com/shots/3581904-HEALTHEX-Day-01

//SMOOTH SCROLL MENU
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {  
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    }
  });
});

//FIXED MENU COLORS
$(document).ready(function(){
  $(window).trigger('scroll');
  $(window).bind('scroll', function () {
    var pixels = 50; //pixeles abajo
    if ($(window).scrollTop() > pixels) {
  $('.nav').addClass('fixed');
      $('.menu a').css({"color":"#354757"});
      $('.logo').css({"color":"#354757"});
    } else {
      $('.nav').removeClass('fixed');
      $('.menu a').css({"color":"#BABCBD"});
      $('.logo').css({"color":"#BABCBD"});
    }
  }); 
}); 

/*
$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e){
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    
    //scroll con hash
    $('html, body').animate({
      'scrollTop': $target.offset().top
    }, 1000, 'swing', function(){
      window.location.hash = target;
    });
    
   /* //scroll sin hash
    $('html, body').animte({
      'scrollTop': $targer.offset().top
      }, 1000, 'swing');
  });
});*/