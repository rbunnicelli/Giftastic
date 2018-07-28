$(document).ready(function() {
var topics = ["Pikachu", "Gyarados", "Mewtwo", "Dragonite", "Zapdos", "Blastoise"];

//Function that loops through the topics array and adds a button with name of each index in topics
function buttonLoop() {
    $("#buttons").empty();
    for (i = 0; i < topics.length; i++) {
        var buttonMaker = $("<button>");
        buttonMaker.html(topics[i]);
        buttonMaker.val(topics[i]);
        buttonMaker.attr("class", "buttonClass");
        buttonMaker.attr("id", topics[i]);
        buttonMaker.attr("type", "button");
        $("#buttons").append(buttonMaker);
    }
}

//when the submit button is clicked, captures user input and makes button with that value
$("#submitBtn").on("click", function(event) {
    event.preventDefault();
    var newButton = $("#userInput").val().trim();
    var upperCaseFirst = newButton.charAt(0).toUpperCase() + newButton.slice(1);
    topics.push(upperCaseFirst);
    buttonLoop();
});

buttonLoop();

$(document).on('click', ".gif", function() {
    var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
            }
});

//queryURL to access giphy api
$(document).on('click', ".buttonClass", function() {

var character = $(this).attr("id");
console.log(character);
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + character + "&api_key=3dgOSzYiKVKWV3BtmV3wUmy9tRxumPjv&limit=10";

//ajax call to create div and p for gif and rating tag
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    
        var results = response.data

        for (var i = 0; i < results.length; i++) {
            var topicsDiv = $("<div>");
            var ratingTag = $("<p>").text("Rating: " + results[i].rating);
            var topicsImage = $("<img>");
            var still = results[i].images.fixed_height_still.url;
            var animate = results[i].images.fixed_height.url;
            topicsImage.addClass("gif");
            topicsImage.attr("data-animate", animate);
            topicsImage.attr("data-still", still);
            topicsImage.attr("data-state", "still");
            topicsImage.attr("src", still);
            topicsDiv.append(ratingTag);
            topicsDiv.append(topicsImage);
            $("#gifsHere").prepend(topicsDiv);
        }
    });
});
});