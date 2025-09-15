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