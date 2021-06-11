$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#name").val();
    const addressInput = $("input#address").val();
    const array = [nameInput, addressInput]
    array.push("asdfasdfsdfas");
    console.log(array);
    array.pop();
    console.log(array);
    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $("#receipt").show();
    $(".list").text(array)
  });
});