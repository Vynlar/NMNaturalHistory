var $$ = $('.histCal');

var $datURL = "http://scripts.enx3s.com/hstry/events.json/index.php";

//Hide listview while working
$$.hide();

console.log("Starting");

//Load JSON file
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
        $e.appendTo($$);
        console.log($e);
    });
}).done(function() {
    //Refresh CSS for listview
    $$.listview("refresh");
    //Show listview
    $$.fadeIn(100);
    console.log("Done");   
}).fail(function() {
    $$.html("There was a problem loading the event calendar."); 
});