$(document).ready(function(){

    $(".product").ready(function productController() {
        var mainGridRowCount = 3;
        var mainGridColumnCount = 3;

        $( "#backColorBlack" ).click(function() {
            changeBackgroundColor('black');
        });
        $( "#backColorWhite" ).click(function() {
            changeBackgroundColor('white');
        });
        $( "#backColorGrey" ).click(function() {
            changeBackgroundColor('grey');
        });

        createGrid()
        
    });
    //$("#backColorBlack").clicked(changeBackgroundColor('white'));

    function changeBackgroundColor(color) {
        $(".ly0id0").get(0).style.setProperty("--backColor", color);
    }

    function createGrid() {
        $(".ly0id0").get(0).style.setProperty("grid-template-columns", "1fr 1fr 1fr");
        $(".ly0id0").get(0).style.setProperty("grid-template-rows", "1fr 1fr 1fr");
        for (var r = 1; r<=3; r++) {
            for (var c = 1; c<=3; c++) {
                $(".ly0id0").append("<div id='"+r+c+"' style='background-color: aqua; grid-area:"+r+"/"+c+";'>aa</div>")
            }
        }

    }

    
});