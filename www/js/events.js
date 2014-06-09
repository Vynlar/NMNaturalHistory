var $$ = $('.histCal');

var $datURL = "http://scripts.enx3s.com/hstry/events.json/index.php";

//Hide listview while working
$$.hide();

console.log("Starting");

var eventHTML = "";

//Load Events
function loadEvents() {
    $.getJSON($datURL, function(data) {
        $.each(data, function(i, event) {
            //Create date title
            $("<li></li>").html(event.date.str).attr("data-role", "list-divider").appendTo($$);
            $e = $("<li></li>");
            //Add link
            $a = $("<a></a>").attr("href", event.link);
            //Event title
            $("<h2></h2>").html(event.title).appendTo($a);
            //Time
            $("p").attr("class", "ui-li-aside").html("<strong>" + event.time.start + "</strong>").appendTo($a);
            $a.appendTo($e);
            //Append to event list
            eventHTML += $e;
            
        });
    }).done(function() {
        console.log("Done");   
    }).fail(function() {
        eventHTML = "<p>There was a problem loading the event calendar</p>";
    });   
}

var events = {
    display: function() {
        document.write(eventHTML);   
    }
}

loadEvents();