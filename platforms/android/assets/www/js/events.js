var $datURL = "http://scripts.enx3s.com/hstry/events.json/index.php";

function formatEventData (data) {
    $.each(data, function(i, event) {  
            //Create date title
            var listElement = $("<li></li>");
            var linkTag = $("<a></a>");
            linkTag.append($("<p></p>").html(event.date.str));
            //Add link
            linkTag.attr("href", event.link);
            //Event title
            $("<h2></h2>").html(event.title).appendTo(linkTag);
            //Time
            $("<p></p>").attr("class", "ui-li-aside").html("<strong>" + event.time.start + "</strong>").appendTo(linkTag);
            linkTag.appendTo(listElement);
            //Append to event list
            eventHTML.append(listElement);
        });
    console.log(eventHTML);
}

function displayEventData() {
    eventHTML.attr("data-role", "listview");
    eventHTML.attr("data-inset", "true");
    eventHTML.attr("id", "eventListview");
    eventHTML.appendTo("#eventContentBox");
    $("#eventListview").listview();
    $("#loader").css("display", "none");
}

function loadEventData () {
    $.getJSON($datURL, function(data) {
        eventData = data;
    }).done(function() {
        formatEventData(eventData);
        displayEventData();
    });
}

$('#events').on('pageshow', function(event) {
    if (eventData == null) {
        loadEventData();
        console.log("eventdata null");
    } else {
        displayEventData(eventHTML);
        console.log("event data already loaded");
    }
});