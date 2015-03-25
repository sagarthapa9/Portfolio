

$(function () {

    var curposition = 0;
    var slidewidth = 560;
    var slides = $('.slide');
    var numofslides = slides.length;

    //remove scrollbar in Js
    $("#slidecontainer").css('overflow', 'hidden');

    //wrap all .slide with #slideInner div and set css to float left to display horizantally and readjust the .slide width since we have no scroll bar  anymore
    slides.wrapAll('<div id="slideInner"></div>')

    .css({ 'float': 'left', 'width': slidewidth });


    //set #slideInner width equal to total width of all the slides
    $('#slideInner').css('width', slidewidth * numofslides);

    //insert left and right controls into DOM
    $("#slideshow")
    .prepend('<span class="control" id="leftControl">Move left</span>')
     .append('<span class="control" id="rightControl">Move right</span>');

    //calling managecontrols function as passing curposition=0 which will be first slide when page loads first time
    managecontrols(curposition);

    //create event listeners for .controls clicks
    $('.control')
    .bind('click', function () {

        //setting the new current position of the slide
        curposition = ($(this).attr('id') == 'rightControl') ? curposition + 1 : curposition - 1;


        //hide and show controls using updated position
        managecontrols(curposition);

        //finally move sliderInner using margin left property and animate() function
        $('#slideInner').animate({
            'marginLeft': slidewidth * (-curposition)
        });

      
    });

    //managing left and right arrow controls with function with hide()  and show() method
    function managecontrols(position) {

        //hide the left arrow control for first slide i.e position==0 is first slide
        if (position == 0) { $("#leftControl").hide() }
        else { $("#leftControl").show() }

        //hide right arrow control for last slide i.e position==numofslides-1
        if (position == numofslides - 1) { $("#rightControl").hide() }
        else { $("#rightControl").show() }
    }

    function autoshow() {
        //alert(‘start’)
        curposition = curposition + 1;
        if (curposition == numofslides) {
            curposition = 0;

        }
        // Hide / show controls
        managecontrols(curposition);

        // Move slideInner using margin-left
        $('#slideInner').animate({

            'marginLeft': slidewidth * (-curposition)
        });
        setTimeout(autoshow, 6000);

    }
    setTimeout(autoshow, 6000);
});