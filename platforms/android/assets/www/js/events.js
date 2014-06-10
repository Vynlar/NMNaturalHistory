var loaded = false;
var eventData;
var eventHTML = "";

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
            listElement.appendTo(eventHTML);
            listElement.appendTo("#eventList");
            $("#eventList").listview("refresh");
            //Hide loader
            $("#loader").css("display", "none");
        });
}

function loadEventData () {
    $.getJSON($datURL, function(data) {
        eventData = data;
    }).done(function() {
        formatEventData(eventData);
        loaded = true;
    });
}

$('#events').on('pageshow', function(event) {
    if (loaded == true) {
        formatEventData(eventData);
    }
    console.log("page show called");
});

$('#events').on('pagecreate', function(event) {
    if (loaded == false) {
        loadEventData();
    }
    console.log("page create called");
});