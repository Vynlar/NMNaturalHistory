function generateExhibitList(data, id)
{
    $.each(data, function(i, _data) {
        var tag = $("<li></li>");
        var linkTag = $("<a></a>");
        $("<img></img>").attr("src", _data[1]).appendTo(linkTag);
        $("<h2></h2>").html(_data[0]).appendTo(linkTag);
        $("<p></p>").html(_data[2]).appendTo(linkTag);
        /*var popup = $("<div></div>");
        popup.attr("data-role", "page");
        popup.attr("data-add-back-button", "true");
        linkTag.attr("data-transition", "slide");
        linkTag.attr("data-split-icon", "grid");
        var divId = _data[0].replace(/ /g, "-");
        popup.attr("id", divId);
        $("<p></p>").html(_data[2]).appendTo(popup);*/
        linkTag.attr("href", _data[3]);
        linkTag.appendTo(tag);
        //tag.append(popup);
        tag.appendTo(id);
    });
}