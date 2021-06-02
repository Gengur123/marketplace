$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#name").val();
    const addressInput = $("input#address").val();


    $(".name").text(nameInput);
    $(".address").text(addressInput);


    $("#receipt").show();
  });
});