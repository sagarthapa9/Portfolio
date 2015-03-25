
//photoframe

$(function () {

    setInterval("rotateImages()", 2000);
});

function rotateImages() {

    //get current photo in variable

    var curphoto = $("#Photoslider div.current");

    var nxtphoto = curphoto.next();

    //check condition
    if (nxtphoto.length==0)
     {
        nxtphoto=$("#Photoslider div:first");
     
     }

     curphoto.removeClass('current').addClass('previous');

     nxtphoto.css({ opacity: 0.0 }).addClass('current').animate({ opacity: 1.1 }, 2000,
     function () {

         curphoto.removeClass('previous');
     });
}