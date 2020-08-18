$(document).ready(function () {
    // Accepts user input from on user's click
    $("#cocktail-search").on("click", function () {
        var cocktailValue = $("#cocktail-value").val();

        // clears input field
        $("#cocktail-search").val("");

        searchCocktail(cocktailValue);
    });
    // function to create a list here

    // AJAX call
    function searchCocktail(cocktailValue) {
        $.ajax({
            type: "GET",
            url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktailValue,
            dataType: "json",
            success: function (data) {
                console.log(data);
                console.log(data.drinks[0].strDrink)
                console.log(data.drinks[0].strGlass)

                // clear any old content
                $("#cocktail").empty();


            }
        })
    };

});