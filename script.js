

$(document).ready(function(){
  $("p").click(function(){
      $(this).hide();
  });

  $("#slider").bind('input', sliderChange);
  $("#textSlider").bind('input', sliderChange);
//slider.addEventListener('input', sliderChange);

function sliderChange() {
  $("#textSlider").val(this.value);
  $("#slider").val(this.value);
}
});