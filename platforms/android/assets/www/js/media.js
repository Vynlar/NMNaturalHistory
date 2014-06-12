function genImgTable() {
    var numImgs = 40;
    var currentImg = 0;
    var currentRow = 0;
    
    while (currentImg < numImgs)
    {
        if (currentImg % 3 == 0)
        {
            currentRow++;
            
            if (currentImg == 0) //make sure that you don't close a non existent <td>
            {
                //go to next row
                $("#imgTableBody").append("<tr id='row-"+ currentRow + "'>");
            }
            else
            {
                $("#imgTableBody").append("</tr><tr id='row-"+ currentRow + "'>");
            }
        }
        
        var name = "row-" + currentRow;
        var img = "<a href='img/mediaImgs/"+ currentImg +".jpg' data-gallery><img class='tableImages' src='img/mediaImgs/"+ currentImg + ".jpg'/></a>";
        $("#" + name).append(img);
        currentImg++;
    }
}

$('#media').on('pageshow', function(event) {
    genImgTable();
});