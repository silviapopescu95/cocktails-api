$(document).ready(function () {
    // Accepts user input from on user's click
    $("#cocktail-search").on("click", function () {
        // let cocktailValue = $("#cocktail-value").val();
        let cocktailValue = "margarita"
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
                // console.log(data);
                // console.log(data.drinks[0].strDrink)
                // console.log(data.drinks[0].strGlass)

                // clear any old content
                $("#cocktail").empty();

                // creates the string from the drink name db detail
                let drinkName = $("<h3>").addClass("card-title").text(data.drinks[0].strDrink);
                console.log(drinkName)
                let card = $("<div>").addClass("card");
                let cardBody = $("<div>").addClass("card-body");

                cardBody.append(drinkName);
                card.append(cardBody);
                $("#cocktail").append(card);

            }
        })
    };

});