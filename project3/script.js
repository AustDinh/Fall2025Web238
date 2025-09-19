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

  
  function animateProjects() {
    $(".projects-grid > div").each(function(index){
      var cardTop = $(this).offset().top;
      var scrollBottom = $(window).scrollTop() + $(window).height();

      if(scrollBottom > cardTop + 50){ 
        $(this).delay(300 * index).animate({
          top: "0",
          opacity: 1
        }, 800);
      }
    });
  }


  $(window).on("scroll", animateProjects);

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



