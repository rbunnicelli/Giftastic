var topics = ["Mario", "Luigi", "DK", "Bowser", "Yoshi", "Toad"];

//Function that loops through the topics array and adds a button with name of each index in topics
function buttonLoop() {
    for (i = 0; i < topics.length; i++) {
        $("#buttons").append("<button>" + topics[i] + "</button>");
    }
}
buttonLoop();
$("#submitBtn").on("click", function(event) {
    event.preventDefault();
    var newButton = $("#userInput").val().trim();
    topics.push(newButton);
    $("#buttons").empty();
    buttonLoop();
});

/*$("button").on("click", function() {

var character = $(this).attr(topics[i]);

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + character + "3dgOSzYiKVKWV3BtmV3wUmy9tRxumPjv";

$.ajax({
    url: queryURL,
    method: "GET"
})

    .then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            var topicsDiv = $("<div>");
            var ratingTag = $("<p>").text("Rating: " + results[i].rating);
            var topicsImage = $("<img>");
            topicsDiv.append(ratingTag);
            topicsDiv.append(topicsImage);
        }
    });
});*/