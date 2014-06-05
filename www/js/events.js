var $$ = $('.histCal');

var $datURL = "http://scripts.enx3s.com/hstry/events.json/index.php";

$$.hide();

$.getJSON($datURL, function(data) {
    $.each(data, function(i, event) {
        $("<li></li>").html(event.date.str).attr("data-role", "list-divider").appendTo($$);
        $e = $("<li></li>");
        $a = $("<a></a>").attr("href", event.link);
        $("<h2></h2>").html(event.title).appendTo($a);
        $("p").attr("class", "ui-li-aside").html("<strong>" + event.time.start + "</strong>").appendTo($a);
        $a.appendTo($e);
        $e.appendTo($$);
    });
}).done(function() {
    $$.listview("refresh");
    $$.fadeIn(100);
    console.log("Done");   
}).fail(function() {
    $$.html("There was a problem loading the event calendar."); 
});;