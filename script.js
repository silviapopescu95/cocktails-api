$(document).ready(function () {
    // Accepts user input from on user's click
    $("#cocktail-search").on("click", function () {
        // let cocktailValue = $("#cocktail-value").val();
        let cocktailValue = "gimlet"
        // clears input field
        $("#cocktail-search").val("");

        searchCocktail(cocktailValue);
        searchSong();
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
                // console.log(data.drinks[0].strDrink)
                // console.log(data.drinks[0].strGlass)

                // clear any old content
                $("#cocktail").empty();

                // creates the string from the drink name db details
                let drinkName = $("<h3>").addClass("card-title").text(data.drinks[0].strDrink);
                let drinkGlass = $("<h4>").addClass("card-subtitle").text(data.drinks[0].strGlass);
                let drinkImage = $("<img height='150vh'>").attr("src", data.drinks[0].strDrinkThumb);
                console.log(drinkName)

                let drinkIngredients = $("<li>").addClass("").text(data.drinks[0].strIngredient1);
                let drinkMeasure = $("<li>").addClass("").text(data.drinks[0].strMeasure1);

                let card = $("<div>").addClass("card");
                let cardBody = $("<div>").addClass("card-body");
                let ingredientList = $("<ul>").addClass("");
                let measureList = $("<ul>").addClass("");
                // let ingredientList = $("<li>").addClass("");
                // let measureList = $("<li>").addClass("");

                ingredientList.append(drinkIngredients);
                measureList.append(drinkMeasure);
                cardBody.append(drinkName, drinkGlass, drinkImage, ingredientList, measureList);

                card.append(cardBody);
                $("#cocktail").append(card);

            }
        })
    };

    // function searchSong(cocktailValue) {
    //     $.ajax({
    //         type: "GET",
    //         url: "https://api.audiomack.com/search_autosuggest",
    //         dataType: "json",
    //         success: function (data) {
    //             console.log(data);



    //         }
    //     })
    // };

});

