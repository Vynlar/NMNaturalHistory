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
    });
}

$('#events').on('pageshow', function(event) {
    if (eventData == null) {
        loadeventData();
        console.log("eventdata null");
    } else {
        formatEventData(eventData);
        console.log("event data already loaded");
    }
});