$(document).ready(function () {
  $(".order-entry form").submit(function (event) {
    event.preventDefault();
    var address = $("#street").val() + ", " + $("#city").val() + ", " + $("#state").val() + " " + $("#zip").val();
    var purchase = $("#qty").val() + " x " + $("#cheese").val();
    $("#conf-name").text($("#name").val());
    $("#conf-address").text(address);
    $("#conf-purchase").text(purchase);

    $(".confirmation").show();
  });
});