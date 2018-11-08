$(document).ready(function(){

    $(".z0id0").ready(function productController() {
        var mainGridRowCount = 10;
        var mainGridColumnCount = 10;
        var selectedElement;
        createGrid()

        $( "#backColorBlack" ).click(function() {
            changeBackgroundColor(selectedElement, 'black');
        });
        $( "#backColorWhite" ).click(function() {
            changeBackgroundColor(selectedElement, 'white');
        });
        $( "#backColorGrey" ).click(function() {
            console.log(this);
            changeBackgroundColor(selectedElement, 'grey');
        });
        

        $(".z0id0 div").click(function(){
            selectedElement = this.id;
            console.log(selectedElement);
        })

        function changeBackgroundColor(element, color) {
            console.log();
            $("#"+element).get(0).style.setProperty("background-color", color);
        }
        /*
        dobiti broj r i c i dobiti element
        generirati
        */
        function createGrid() {
    
            $(".z0id0").get(0).style.setProperty("grid-template-columns", mainGridColumnCount*"1fr ");
            $(".z0id0").get(0).style.setProperty("grid-template-rows", mainGridRowCount*"1fr ");
            for (var r = 1; r<=mainGridRowCount; r++) {
                for (var c = 1; c<=mainGridColumnCount; c++) {
                    $(".z0id0").append("<div id='"+'z1id'+r+c+"' style='background-color: aqua; grid-area:"+r+"/"+c+";'>aa</div>")
                }
            }
    
        }

        
        
    });



    
});