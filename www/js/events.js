var $datURL = "http://scripts.enx3s.com/hstry/events.json/index.php";

console.log("Starting");

//Load Events
function loadEvents() {
    $.getJSON($datURL, function(data) {
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
            
            $("#loader").css("display", "none");
        });
    }); 
}

$('#events').on('pageshow', function(event) {
    loadEvents();
});