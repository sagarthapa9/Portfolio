

var XML_path = "../videoinfo.xml";
var video_width;
var video_height;
var video_array = new Array();

function init() {

    loadxml();

}

function loadxml() {

    $.ajax({

        type: 'GET',
        url: XML_path,
        dataType: 'xml',
        success: function onXMLloaded(xml) {

            video_width = $(xml).find('videos').attr('width');
            video_height = $(xml).find('videos').attr('height');


            $(xml).find('item').each(


              function loopingitems(value) {

                  var obj = {
                      title: $(this).find("title").text(),
                      mp4: $(this).find("mp4").text(),
                      ogv: $(this).find("ogg").text(),
                      webm:$(this).find("webm").text(),
                      description: $(this).find("description").text()

                  };

                  video_array.push(obj);


                  $('#mycustomscroll').append('<ul>');
                  $('#mycustomscroll').append('<a><li id="item"><strong>' + (value + 1) + "</strong></br><strong>Title: </strong>" + obj.title + '<li><a>');

              });

            //close </ul>

            $('#mycustomscroll').append('</ul>');

            //add video tag player

            $('#leftcolumn').append('<video width"' + video_width + '" height="' + video_height + '"  controls="controls"><source src="' + video_array[0].mp4 + '" type="video/mp4" /><source src="' + video_array[0].ogv + '" type="video/ogg" /><source src="' + video_array[0].webm + '" type="video/webm" />your browser does not support video tag </video>');

            //add description

            $('#description').append(video_array[0].description);

            //call add listner

            addlisteners();

        }

    });

}

// add <li> listener
function addlisteners() {
    // loop for each list item
    $('#mycustomscroll li').each(function looping(index) {
        // onclick...
        $(this).click(function onItemClick() {
            // empty left column and description
            $("#leftcolumn").empty();
            $("#description").empty();
            // append video tag
            $("#leftcolumn").append('<video width="' + video_width + '" height="' + video_height + '"   controls="controls"><source src="' + video_array[index].mp4 + '" type="video/mp4" /><source src="' + video_array[index].ogv + '" type="video/ogg" /><source src="' + video_array[index].webm + '" type="video/webm" />Your browser does not support the video tag.</video>');
            // append description
            $("#description").append(video_array[index].description);
        });
    });
}