$(document).ready(function(){
  var slides = $('div.slide');
  var index = 1;
  var newindex = 2;
  var nextSlide = function(){
    if(index === slides.length - 1){
      newindex = 0;
    }else{
      newindex = index + 1;
    }
    $(slides[index]).css('z-index', 2).fadeOut(function(){
      $(this).css('z-index', 0);
    });
    $(slides[newindex]).css('z-index', 1).show();
    index = newindex;
  };
  var loop = function(){
    nextSlide();
    setTimeout(loop, 5000);
  };
  loop();
});