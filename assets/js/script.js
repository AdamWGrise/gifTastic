var buttonSet = [];
var instInput = "";
var qtyInput = 10;
var apiKey = 'xyrnqWXfU1VtQMLv35efwBKSnFDbth66';

var submission = function (input) {
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=" + apiKey + "&limit=10"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        for (i = 0; i < 10; i++) {
            var newGif = $("<img>");
            newGif.attr('src', response.data[i].images.fixed_height_still.url);
            newGif.attr('class', 'gifImg');
            newGif.attr('data-still', response.data[i].images.fixed_height_still.url);
            newGif.attr('data-animate', response.data[i].images.fixed_height.url);
            newGif.attr('data-state','still');
            $("#gifDisplay").prepend(newGif);
            newGif.click(function () {
                console.log('click');
                var state = $(this).attr('data-state');
                if (state === 'still') {
                    console.log('still click');
                    $(this).attr('data-state','animate');
                    $(this).attr('src', $(this).attr('data-animate'));
                } else if (state === 'animate') {
                    console.log('animate click');
                    $(this).attr('data-state','still');
                    $(this).attr('src', $(this).attr('data-still'));
                };
            });
        };
    });
};

////// BUTTON ADD + THEIR OWN EVENT LISTENER //////

var buttonAdd = function (submitInput) {
    var newButton = $("<button>").attr('value', submitInput);
    newButton.attr('class', 'btn btn-secondary queryButton')
    newButton.text(submitInput);
    $("#buttonList").append(newButton);
    $(".queryButton").click(function () {
        var keyword = $(this).attr('value');
        submission(keyword);
    });
}

/////////// LISTENER /////////////

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
    };
});