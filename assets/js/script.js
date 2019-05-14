var buttonSet = [];
var instInput = "";

var submission = function (input) {
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=xyrnqWXfU1VtQMLv35efwBKSnFDbth66&limit=10"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
};

var buttonAdd = function (submitInput) {
    var newButton = $("<button>").attr('value',submitInput);
    newButton.attr('class','queryButton');
    newButton.text(submitInput);
    $("#buttonList").append(newButton);
    $(".queryButton").click(function(){
        var keyword = $(this).attr('value');
        submission(keyword);
    });
}

$("#submitButton").click(function (submitInput) {
    event.preventDefault();
    submitInput = $("#instrumentInput").val().trim();
    if (submitInput === '') {
        $("#errorMsg").html("<h6>Enter an instrument before clicking 'Add'!</h6>");
    } else {
        $("#errorMsg").html("");
        buttonAdd(submitInput);
        $("#instrumentInput").val("");
        submitInput = '';
    }
});
