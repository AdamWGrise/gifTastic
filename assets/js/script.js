var buttonSet = []; // The array of values generating the buttons.
var topics = ['Saxophone', 'Electric guitar', 'Trombone', 'Violin', 'Drum set']; // Some initial values to stick in the buttonSet array, which happens on page load.
var apiKey = 'xyrnqWXfU1VtQMLv35efwBKSnFDbth66'; // Adam's API key for Giphy dev.

///// GET & DISPLAY GIFS, APPLY ON-CLICK STATE CHANGE /////

// The main, important function that runs each time an instrument button is clicked in the bar at the top of the screen. 
var submission = function (input) {
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=" + apiKey + "&limit=10" // Simple URL with input value (i.e., text within the button clicked) and API key plugged in.
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        for (i = 0; i < 10; i++) { // 10 results, which is what's in the query URL also. So everything from here down to like line 80-something will happen for each of the 10 gifs.
            var gifBox = $('<div>'); // One big box for each gif
            gifBox.attr('class', 'gifBox'); // Giving the boxes a CSS class.
            var r = response.data[i]; // Shorthanding the response data.
            var newRating = r.rating; // Grabbing the rating (G, PG, PG-13, etc.)
            var newGif = $("<img>"); // Creating the img tag that'll get shoved into the gifBox in a bit...
            newGif.attr({ // Just assigning a bunch of attributes as an object to speed things up.
                'class': 'gifImg', // CSS class for a border and stuff.
                src: r.images.fixed_height_still.url, // Primary image - the still.
                'data-still': r.images.fixed_height_still.url, // The same 'still' image, for the state of the gif being paused.
                'data-animate': r.images.fixed_height.url, // The actual animated gif image; we will switch to this image upon click.
                'data-state': 'still', // Setting the initial 'still' state.
                'title': r.title, // Also grabbing the title for displaying later.
            });

            $("#gifDisplay").prepend(gifBox); // Sticking the gifBox onto the page...

            gifBox.append(newGif); // ...and sticking the gif itself into the box.
            
            // This will be used to make sure that '(No Title)' is displayed if there isn't a gif title already.
                var getTitle = function (input) {
                if (input === '') {
                    return '(No Title)';
                } else {
                    return input;
                };
            };
            
            // Here just establishing the width of the gif quick...
            var newWidth = parseInt(r.images.fixed_height_still.width) + 2;

            // And building the div for the rating and title.
            var gifTitle = $("<div>")
            gifTitle.attr({
                'class':'gifTitle', // Just a class assignment for background color, etc.
                'style':'width:' + newWidth + 'px', // And using our newWidth determined just up above.
            });

            // Now stringing together the new title (or 'No Title' if needed) and the rating...
            gifTitle.html(newRating.toUpperCase() + " | " + getTitle(r.title) + '<br>');
            // ...and adding them to that gifBox where the image is.
            gifBox.append(gifTitle);

            // Trying to get the download button to work, but all it does is stick the gif in a new tab with my Chrome settings. May not be able to fix this one. I noticed the link actually leads to a page with other elements on it - with some tinkering I may be able to get to *just* the gif itself, but I've run out of time here.
            var gifDownload = $("<a>")
            gifDownload.attr({
                'href': r.images.fixed_height.url,
                'title': r.images.fixed_height.url,
                'target':'_blank',
                'class':'gifTitleLink'
            });
            gifDownload.text('Right click here to download!'); // Just making a download link, instruction to right click instead...
            gifTitle.append(gifDownload); // Putting the download link up with the title in the gifBox.

            // The controller for each gif that switches on click from still, to animated, and back to still.
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

////// THE "ADD" BUTTON ALONG WITH ITS OWN EVENT LISTENER //////

var buttonAdd = function (submitInput) {
    var newButton = $("<button>").attr('value', submitInput); // Just creating a new button based on the text box input from the user.
    newButton.attr('class', 'btn btn-secondary queryButton abtn')
    newButton.text(submitInput);
    $("#buttonList").append(newButton); // Adding the button to the button list at the top of the page...
    $(".queryButton").unbind().click(function () { // Giving the new button its own event listener...
        var keyword = $(this).attr('value');
        submission(keyword); // Here's the action of the on-click event for the new button. That big function up above that's like 70 lines.
    });
}

/////////// INITIAL SUBMISSION LISTENER /////////////

// Here's the event listener for the Submit button that adds instruments to the button list...
$("#submitButton").unbind().click(function (submitInput) {
    event.preventDefault();
    submitInput = $("#instrumentInput").val().trim();
    if (submitInput === '') {
        $("#errorMsg").html("<h6>Enter an instrument before clicking 'Add'!</h6>"); // Yells at you if you left the field blank, as to avoid making an empty button.
    } else {
        $("#errorMsg").html(""); // Clears the error in the event of a good submission
        buttonAdd(submitInput); // This function creates the new button (see line 86)
        $("#instrumentInput").val(""); // Just clears the field to make new entries easier.
        submitInput = ''; // Clears the submitInput variable. Maybe for no reason.
    };
});

///////// ON PAGE LOAD //////////

$(document).ready(function () {
    for (i = 0; i < topics.length; i++) {
        buttonAdd(topics[i]); // Runs the button-adding function for each of the values in the topics array in line 2.
    };
});