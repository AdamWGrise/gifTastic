var buttonSet = [];
var instInput = "";
var queryURL = "";

var submission = function () {
    instInput = $("#instrumentInput").val().trim();
    queryURL = "https://api.giphy.com/v1/gifs/search?q=" + instInput + "&api_key=xyrnqWXfU1VtQMLv35efwBKSnFDbth66&limit=10"

    console.log(instInput);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
};

$("#submitButton").click(function (input) {
    event.preventDefault();
    input = $("#instrumentInput").val().trim();
    if (input === '') {
        $("#errorMsg").html("<h6>Enter an instrument before clicking 'Add'!</h6>");
    } else {
        $("#errorMsg").html("");
        submission();
        $("#instrumentInput").val("");
        input = '';
    }
});