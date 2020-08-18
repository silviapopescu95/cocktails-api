$(document).ready(function () {
    // Accepts user input from on user's click
    $("#cocktail-search").on("click", function () {
        let cocktailValue = $("#cocktail-value").val();
        // let cocktailValue = "gimlet"
        // clears input field
        $("#cocktail-search").val("");

        searchCocktail(cocktailValue);
        getGif(cocktailValue);
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
                console.log(drinkName);
                `               
`               // gets ingredients and their respective measurements
                let drinkIngredients1 = $("<li>").addClass("").text(data.drinks[0].strIngredient1);
                let drinkMeasure1 = $("<li>").addClass("").text(data.drinks[0].strMeasure1);
                let drinkIngredients2 = $("<li>").addClass("").text(data.drinks[0].strIngredient2);
                let drinkMeasure2 = $("<li>").addClass("").text(data.drinks[0].strMeasure2);
                let drinkIngredients3 = $("<li>").addClass("").text(data.drinks[0].strIngredient3);
                let drinkMeasure3 = $("<li>").addClass("").text(data.drinks[0].strMeasure3);
                let drinkIngredients4 = $("<li>").addClass("").text(data.drinks[0].strIngredient4);
                let drinkMeasure4 = $("<li>").addClass("").text(data.drinks[0].strMeasure4);
                let drinkIngredients5 = $("<li>").addClass("").text(data.drinks[0].strIngredient5);
                let drinkMeasure5 = $("<li>").addClass("").text(data.drinks[0].strMeasure5);

                // displays drink ingredients and measurements in 2 columns
                let card = $("<div>").addClass("card");
                let cardBody = $("<div>").addClass("card-body");
                let listRows = $("<div>").addClass("row");
                let measCol = $("<div>").addClass("col-3 text-right");
                let ingredCol = $("<div>").addClass("col-3 text-left");
                let emptyCol1 = $("<div>").addClass("col-3");
                let emptyCol2 = $("<div>").addClass("col-3");
                let ingredientList = $("<ul>").addClass("drinkClasses");
                let measureList = $("<ul>").addClass("drinkClasses measurements");
                // let ingredientList = $("<li>").addClass("");
                // let measureList = $("<li>").addClass("");



                ingredientList.append(drinkIngredients1, drinkIngredients2, drinkIngredients3, drinkIngredients4, drinkIngredients5);
                measureList.append(drinkMeasure1, drinkMeasure2, drinkMeasure3, drinkMeasure4, drinkMeasure5);
                ingredCol.append(ingredientList);
                measCol.append(measureList);
                listRows.append(emptyCol1, measCol, ingredCol, emptyCol2);
                cardBody.append(drinkName, drinkImage, listRows);

                card.append(cardBody);
                $("#cocktail").append(card);

            }
        })
    };

    function getGif(cocktailValue) {
        $.ajax({
            type: "GET",
            url: "https://api.giphy.com/v1/gifs/search?q=" +
            cocktailValue +
            "&api_key=dc6zaTOxFJmzC",
            dataType: "json",
            success: function (data) {
                console.log(cocktailValue)
                console.log(data);
                console.log(data.data[0].url);

                $("#giphy").empty();

                let drinkName = $("<h3>").addClass("card-title").text(cocktailValue + " Gallery");
                
                let drinkImage = $("<iframe height='150vh'>").attr("src", data.data[0].embed_url);
                let drinkImage2 = $("<iframe height='150vh'>").attr("src", data.data[1].embed_url);
                let drinkImage3 = $("<iframe height='150vh'>").attr("src", data.data[2].embed_url);
              

                let card = $("<div>").addClass("card");
                let cardBody = $("<div>").addClass("card-body");

                cardBody.append(drinkName, drinkImage, drinkImage2, drinkImage3,);

                card.append(cardBody);
                $("#giphy").append(card);

                
               
            }
        })
    };

});

