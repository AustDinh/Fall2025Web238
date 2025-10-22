// USing Jquery i enhanced the button my adding a liner background gradient to the buttons
$(document).ready(function(){
  $('.button').css('background', 'linear-gradient(90deg, rgb(145, 145, 145) 0%, rgb(62, 112, 124) 100%)');
});
// In this one i used Jquery to add a hover effect to the buttons
$(document).ready(function(){
    $('.button').hover(
        function(){
        $(this).css('background', 'linear-gradient(90deg, rgb(180, 180, 180) 0%, rgb(100, 150, 170) 100%)');
        },
        function(){
         $(this).css('background', 'linear-gradient(90deg, rgb(145, 145, 145) 0%, rgb(62, 112, 124) 100%)');
        }  
    )
});

$(document).ready(function(){
  $('.coding li').css('background', 'linear-gradient(90deg, rgb(145, 145, 145) 0%, rgb(62, 112, 124) 100%)');
});

$(document).ready(function(){
    $('.coding li').hover(
        function(){
        $(this).css('background', 'linear-gradient(90deg, rgb(180, 180, 180) 0%, rgb(100, 150, 170) 100%)');
        },
        function(){
         $(this).css('background', 'linear-gradient(90deg, rgb(145, 145, 145) 0%, rgb(62, 112, 124) 100%)');
        }  
    )
});

//Interactive component on the buttons 

$(document).ready(function(){
  $('.projects-grid button').css('background', 'linear-gradient(90deg, rgb(145, 145, 145) 0%, rgb(62, 112, 124) 100%)');
});

$(document).ready(function(){
    $('.projects-grid button').hover(
        function(){
        $(this).css('background', 'linear-gradient(90deg, rgb(180, 180, 180) 0%, rgb(100, 150, 170) 100%)');
        },
        function(){
         $(this).css('background', 'linear-gradient(90deg, rgb(145, 145, 145) 0%, rgb(62, 112, 124) 100%)');
        }  
    )
});

//Animation Effect
$(document).ready(function(){
  $(".projects-grid > div").css({
    position: "relative",
    top: "50px",
    opacity: 0
  });

$(document).ready(function() {
  $(".projects-grid > div").css({
    position: "relative",
    top: "50px",
    opacity: 0
  });

  function animateProjects() {
    $(".projects-grid > div").each(function(index) {
      var $card = $(this);
      var cardTop = $card.offset().top;
      var cardBottom = cardTop + $card.outerHeight();
      var scrollTop = $(window).scrollTop();
      var windowBottom = scrollTop + $(window).height();

    
      if (cardBottom > scrollTop + 50 && cardTop < windowBottom - 50) {
        if (!$card.hasClass('visible')) {
          $card.addClass('visible').stop(true).delay(300 * index).animate({
            top: "0",
            opacity: 1
          }, 800);
        }
      } else {
        if ($card.hasClass('visible')) {
          $card.removeClass('visible').stop(true).css({
            top: "50px",
            opacity: 0
          });
        }
      }
    });
  }

  // Run on scroll
  $(window).on("scroll", animateProjects);

  // Run once on page load
  animateProjects();
});

  // Run on scroll
  $(window).on("scroll", animateProjects);

  // Run once on page load
  animateProjects();

});

$(document).ready(function(){
  $(".projects-grid > div").hover(
    function(){ 
      $(this).css({
        "background-color": "#e6f0ff",
        "box-shadow": "0 8px 15px rgba(0,0,0,0.2)",
        "transform": "translateY(-3px)"
      });
    },
    function(){ 
      $(this).css({
        "background-color": "#fff",
        "box-shadow": "0 4px 8px rgba(0,0,0,0.1)",
        "transform": "translateY(0)"
      });
    }
  );
});






//Lab #4

//The Image Fades In when the page loads(1)
$(document).ready(function() {
  
  $(".hero-img img").css({
    position: "relative",
    top: "50px",
    opacity: 0
  });

  function animateProjects() {
    $(".hero-img img").each(function(index) {
      var $card = $(this);
      var cardTop = $card.offset().top;
      var cardBottom = cardTop + $card.outerHeight();
      var scrollTop = $(window).scrollTop();
      var windowBottom = scrollTop + $(window).height();
      if (cardBottom > scrollTop + 50 && cardTop < windowBottom - 50) {      
        if (!$card.hasClass('visible')) {
          $card.addClass('visible').stop(true).delay(300 * index).animate({
            top: "0",
            opacity: 1
          }, 800);
        }
      } else {
        if ($card.hasClass('visible')) {
          $card.removeClass('visible').stop(true).css({
            top: "50px",
            opacity: 0
          });
        }
      }
    });
  }


  $(window).on("scroll", animateProjects);

 
  animateProjects();
});

  


//When the Image is hovered on it transformns(2)
  $(document).ready(function() {
    $(".about-section img").hover(
      function() {
        $(this).css("transform", "scale(1.1)");
      },
      function() {
        $(this).css("transform", "scale(1)");
      }
    );
  });
//The images slighty fade in (3)
$(document).ready(function() {
  
  $(".about-img img").css({
    position: "relative",
    top: "50px",
    opacity: 0
  });

  function animateProjects() {
    $(".about-img img").each(function(index) {
      var $card = $(this);
      var cardTop = $card.offset().top;
      var cardBottom = cardTop + $card.outerHeight();
      var scrollTop = $(window).scrollTop();
      var windowBottom = scrollTop + $(window).height();
      if (cardBottom > scrollTop + 50 && cardTop < windowBottom - 50) {      
        if (!$card.hasClass('visible')) {
          $card.addClass('visible').stop(true).delay(300 * index).animate({
            top: "0",
            opacity: 1
          }, 800);
        }
      } else {
        if ($card.hasClass('visible')) {
          $card.removeClass('visible').stop(true).css({
            top: "50px",
            opacity: 0
          });
        }
      }
    });
  }
  $(window).on("scroll", animateProjects);
  animateProjects();
});

$(document).ready(function() {
  
  $(".about-container").css({
    position: "relative",
    top: "50px",
    opacity: 0
  });

  //Animation the container fades in
  function animateProjects() {
    $(".about-container").each(function(index) {
      var $card = $(this);
      var cardTop = $card.offset().top;
      var cardBottom = cardTop + $card.outerHeight();
      var scrollTop = $(window).scrollTop();
      var windowBottom = scrollTop + $(window).height();
      if (cardBottom > scrollTop + 50 && cardTop < windowBottom - 50) {      
        if (!$card.hasClass('visible')) {
          $card.addClass('visible').stop(true).delay(300 * index).animate({
            top: "0",
            opacity: 1
          }, 800);
        }
      } else {
        if ($card.hasClass('visible')) {
          $card.removeClass('visible').stop(true).css({
            top: "50px",
            opacity: 0
          });
        }
      }
    });
  }
  $(window).on("scroll", animateProjects);
  animateProjects();
});

//User Interaction when a button is cliked it moves and adds a box shadow
$(document).ready(function() {
  $('.button').on('mousedown', function() {
    $(this).css({
      top: "3px",         
      boxShadow: "25px 20px 25px rgba(0,0,0,0.3)" 
    });
  });

  $('.button').on('mouseup mouseleave', function() {
    $(this).css({
      top: "0px",
      boxShadow: "none"
    });
  });
});

  

