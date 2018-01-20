$(document).ready(function() {
  $("#startButton").click(function() {
    $(".question#color").show();
    $("#begin").hide();
  });
  $(".question#color").submit(function(event) {
  event.preventDefault();
    var favorites = [];
    var color = $("#favoriteColor").val()
    favorites.push(color);
    console.log(favorites);
    $(".question#color").hide();
    $(".question#animal").show();

  $(".question#animal").submit(function(event) {
  event.preventDefault();
    var animal = $("#favoriteAnimal").val();
    favorites.push(animal);
    $(".question#animal").hide();
    $(".question#city").show();

  $(".question#city").submit(function(event) {
  event.preventDefault();
    var city = $("#favoriteCity").val();
    favorites.push(city);
    $(".question#city").hide();
    $(".question#food").show();

    $(".question#food").submit(function(event) {
    event.preventDefault();
      var food = $("#favoriteFood").val();
      favorites.push(food);
      console.log(favorites);
      $(".question#food").hide();
      $(".answers").show();

    $("#buttonColor").click(function() {
      console.log(favorites[0]);
      $(".showFavorites").html(favorites[0]);
    });
    $("#buttonAnimal").click(function() {
      console.log(favorites[1]);
      $(".showFavorites").html(favorites[1]);
    });
    $("#buttonCity").click(function() {
      console.log(favorites[2]);
      $(".showFavorites").html(favorites[2]);
    });
    $("#buttonFood").click(function() {
      console.log(favorites[3]);
      $(".showFavorites").html(favorites[3]);
    });

  });
  });
  });
  });
});
