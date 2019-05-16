var buttonSet = [];
var topics = ['saxophone', 'electric guitar', 'trombone', 'violin', 'drum set'];
var instInput = "";
var qtyInput = 10;
var apiKey = 'xyrnqWXfU1VtQMLv35efwBKSnFDbth66';

///// GET & DISPLAY GIFS, APPLY ON-CLICK STATE CHANGE /////

var submission = function (input) {
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=" + apiKey + "&limit=10"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        for (i = 0; i < 10; i++) {
            var newRating = response.data[i].rating;
            var r = response.data[i].images;
            var newGif = $("<img>");
            newGif.attr({
                'class': 'gifImg',
                src: r.fixed_height_still.url,
                'data-still': r.fixed_height_still.url,
                'data-animate': r.fixed_height.url,
                'data-state': 'still',
            });
            $("#gifDisplay").prepend(newGif);
            var newWidth = parseInt(r.fixed_height_still.width)+2;
            var newTitle = response.data[i].title;
            console.log(newWidth);

            newGif.after("<div style='background: rgba(0,0,0,0.5);color:white;width:" + (newWidth) + "px'>Rated " + newRating + " | '" + newTitle + "'</div>");


            // $("#gifDisplay").prepend("<span>Rated " + newRating + ":</span>");
            newGif.unbind().click(function () {
                var state = $(this).attr('data-state');
                if (state === 'still') {
                    $(this).attr('data-state', 'animate');
                    $(this).attr('src', $(this).attr('data-animate'));
                } else if (state === 'animate') {
                    $(this).attr('data-state', 'still');
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
    $(".queryButton").unbind().click(function () {
        var keyword = $(this).attr('value');
        submission(keyword);
    });
}

/////////// LISTENER /////////////

$("#submitButton").unbind().click(function (submitInput) {
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

///////// ON PAGE LOAD //////////

$(document).ready(function () {
    for (i = 0; i < topics.length; i++) {
        buttonAdd(topics[i]);
    };
});