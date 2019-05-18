var buttonSet = []; // The array of values generating the buttons.
var topics = ['Saxophone', 'Electric guitar', 'Trombone', 'Violin', 'Drum set']; // Some initial values to stick in the buttonSet array, which happens on page load.
var apiKey = 'xyrnqWXfU1VtQMLv35efwBKSnFDbth66'; // Adam's API key for Giphy dev.

///// GET & DISPLAY GIFS, APPLY ON-CLICK STATE CHANGE /////

var submission = function (input) {
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=" + apiKey + "&limit=10"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        for (i = 0; i < 10; i++) {
            var gifBox = $('<div>');
            gifBox.attr('class', 'gifBox');
            var r = response.data[i];
            var newRating = r.rating;
            var newGif = $("<img>");
            newGif.attr({
                'class': 'gifImg',
                src: r.images.fixed_height_still.url,
                'data-still': r.images.fixed_height_still.url,
                'data-animate': r.images.fixed_height.url,
                'data-state': 'still',
                'title': r.title,
            });

            $("#gifDisplay").prepend(gifBox);

            gifBox.append(newGif);

            var newWidth = parseInt(r.images.fixed_height_still.width) + 2;
            var getTitle = function (input) {
                if (input === '') {
                    return '(No Title)';
                } else {
                    return input;
                };
            };

            var gifTitle = $("<div>")
            gifTitle.attr({
                'class':'gifTitle',
                'style':'width:' + newWidth + 'px',
            });
            gifTitle.html(newRating.toUpperCase() + " | " + getTitle(r.title) + '<br>');

            gifBox.append(gifTitle);

            // Trying to get the download button to work, not much success right now. https://nehalist.io/downloading-files-from-post-requests/
            var gifDownload = $("<a>")
            gifDownload.attr({
                'href': r.images.fixed_height.url, // Update this to get the substring!
                'title': r.images.fixed_height.url,
                'target':'_blank',
                'class':'gifTitleLink'
            });
            gifDownload.text('Download!');
            gifTitle.append(gifDownload);
            /////////////////////////////////////

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

////// ADD BUTTON ALONG WITH ITS OWN EVENT LISTENER //////

var buttonAdd = function (submitInput) {
    var newButton = $("<button>").attr('value', submitInput);
    newButton.attr('class', 'btn btn-secondary queryButton abtn')
    newButton.text(submitInput);
    $("#buttonList").append(newButton);
    $(".queryButton").unbind().click(function () {
        var keyword = $(this).attr('value');
        submission(keyword);
    });
}

/////////// INITIAL SUBMISSION LISTENER /////////////

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