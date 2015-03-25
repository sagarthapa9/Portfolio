// properties
var XML_PATH = "../work/videoinfo.xml";
var video_width;
var video_height;
var videos_array=new Array();


// init the application
function init()
{
	// call loadXML function
    loadXML();
   
}


// XML loading
function loadXML()
{
	$.ajax({
			type: "GET",
			url: XML_PATH,
			dataType: "xml",
			success: function onXMLloaded(xml) 
			{
				// set video_width and video_height
				video_width=$(xml).find("videos").attr("width");
				video_height=$(xml).find("videos").attr("height");
				
				// loop for each item
				$(xml).find('item').each(function loopingItems(value)
				{	
					// create an object
				    var obj = { 
                                // title:$(this).attr('title'),
                                  title: $(this).find("title").text(),

				                 //mp4:$(this).attr('mp4'),
				                 mp4: $(this).find("mp4").text(),

                               // ogg:$(this).attr('ogv'),
                                ogg: $(this).find("ogg").text(),

                                webm: $(this).find("webm").text(),

                                // description:$(this).attr('description')
				                description: $(this).find("description").text()
                                
                                 };
					
                    videos_array.push(obj);
					
					// append <ul> and video title
					$("#mycustomscroll").append('<ul>');
					$("#mycustomscroll").append('<a><li id="item"><strong>'+(value+1)+"</strong><br/><strong>Title: </strong>"+obj.title+'</li></a>');
				});
				
				// close </ul>
				$("#mycustomscroll").append('</ul>');
				// append video tag player
				$("#leftcolumn").append('<video width="' + video_width + '" height="' + video_height + '" controls="controls" autoplay="autoplay" tabinex="0" loop="loop"><source src="' + videos_array[0].mp4 + '" type="video/mp4" /><source src="' + videos_array[0].ogg + '" type="video/ogg" /><source src="' + videos_array[0].webm + '" type="video/webm" />Your browser does not support the video tag.</video>');
				// append description
				$("#description").append(videos_array[0].description);
				
				// call addListeners function
				addListeners();
			}
	});
}

// add <li> listener
function addListeners()
{

	$('#mycustomscroll li').each(function looping(index) 
	{
		$(this).click(function onItemClick() 
		{
		
			$("#leftcolumn").empty();
			$("#description").empty();

			$("#leftcolumn").append('<video width="' + video_width + '" height="' + video_height + '" controls="controls" ><source src="' + videos_array[index].mp4 + '" type="video/mp4" /><source src="' + videos_array[index].ogg + '" type="video/ogg" /><source src="' + videos_array[index].webm + '" type="video/webm" />Your browser does not support the video tag.</video>');
		
			$("#description").append(videos_array[index].description);
		});
	});
}