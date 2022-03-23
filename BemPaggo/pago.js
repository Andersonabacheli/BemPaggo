$(document).ready(function() {
  //desabilita o input de nivel
  $("#level").prop("disabled", true);
  var nivel = 0;
  $(".more").on('click', function() {
    nivel++;
    $("#level").val(nivel);
  });

  $(".less").on('click', function() {
    nivel--;
    $("#level").val(nivel);
  });

});
