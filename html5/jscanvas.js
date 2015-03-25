
  
   

function drawMap() {
    var elvPlot = document.getElementById('mymap').getContext('2d');
    var img = new Image();
    img.onload = function () {

        elvPlot.drawImage(img, 0, 0);
    }
    img.src = '_images/northridge_map.jpg';
}