var $$ = $('#exhibits');

var $datURL = "http://scripts.enx3s.com/hstry/exhibits.json/index.php";

//Hide listview while working
$$.hide();

//Load JSON file
$.getJSON($datURL, function(data) {
    /* $.each(data, function(i, exhibit) {
        //Create exhibit
        $e = $("<li></li>");
        //Add link
        $a = $("<a></a>").attr("href", exhibit[3]);
        //Exhibit image
        $img = $("<img />").attr("src", exhibit[1]).appendTo($a);
        //Exhibit title
        console.log(exhibit[0]);
        $("<h2></h2>").html(exhibit[0]).appendTo($a);
        //Exhibit description
        $("<p></p>").html(exhibit[2]).appendTo($a);
        $a.appendTo($e);
        //Append to exhibit list
        $e.appendTo($$);
    }); */
    generateExhibitList(data, "#exhibits");
}).done(function() {
    //Refresh CSS for listview
    $$.listview("refresh");
    //Show listview
    $$.fadeIn(100);
    console.log("Done");   
}).fail(function() {
    $$.html("There was a problem loading the temporary exhibits."); 
});