$(document).ready(function () {
    // Accepts user input from on user's click
    $("#cocktail-search").on("click", function () {
        var cocktailValue = $("#cocktail-value").val();

        // clears input field
        $("#cocktail-search").val("");

        searchCocktail(searchValue);
    });


});