function generateExhibitList(data, id, isTemp)
{
    $.each(data, function(i, _data) {
        var tag = $("<li></li>");
        var linkTag = $("<a></a>");
        linkTag.attr("rel", "external");
        $("<img></img>").attr("src", _data[1]).appendTo(linkTag);
        $("<h2></h2>").html(_data[0]).appendTo(linkTag);
        $("<p></p>").html(_data[2]).appendTo(linkTag);
        var popup = $("<div></div>");
        popup.attr("data-role", "dialog");
        popup.attr("data-add-back-button", "true");
        linkTag.attr("data-transition", "pop");
        linkTag.attr("data-split-icon", "grid");
        var divId = _data[0].replace(/ /g, "-");
        popup.attr("id", divId);
        $("<p></p>").html(_data[2]).appendTo(popup);
        linkTag.attr("href", "#");
        linkTag.appendTo(tag);
        tag.append(popup);
        if(!isTemp) {
            tag.click(function() {
                showPopup(_data[3]); 
            });
        } else {
            tag.click(function() {
                showPopupLink(_data[3]); 
            });   
        }
        tag.appendTo(id);
    });
    $(id).listview("refresh");
}

function showPopup(data) {
    $("#exhibitText").html("<p>" + data + "</p>");
    $("#exhibitPopup").css('overflow-y', 'scroll'); 
    $("#exhibitPopup").popup("open");
}

function showPopupLink(link) {
    $.get("http://scripts.enx3s.com/hstry/getData.php?file=" + link, function(data) {
        $("#exhibitText").html("<p>" + data + "</p>");
        $("#exhibitPopup").css('overflow-y', 'scroll'); 
        $("#exhibitPopup").popup("open"); 
    });
}