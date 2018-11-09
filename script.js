$(document).ready(function(){

    $(".z0id0").ready(function productController() {
        var mainGridRowCount = 1;
        var mainGridColumnCount = 15;
        var selectedElement = null;
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
            if (selectedElement!=null) {
                $("#"+selectedElement).get(0).style.setProperty("outline", "none");
            }
            var previousItem = selectedElement;
            selectedElement = this.id;

            if (previousItem==this.id) {
                $("#"+selectedElement).get(0).style.setProperty("outline", "none");
            } else {             
                $(this).get(0).style.setProperty("outline-offset", "-2px");
                $(this).get(0).style.setProperty("outline", "2px solid black");
            }

        })

        function changeBackgroundColor(element, color) {
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
                    $(".z0id0").append("<div id='"+'z1id'+r+c+"' style='background-color: aqua; grid-area:"+r+"/"+c+"; width:100%; height:100%; min-height:100%; padding:0; min-width:100%;'>a</div>")
                    $("#z1id"+r+c).resizable();
                    //$(".z1id"+r+c).style.setProperty("resizable", "both");
                }
            }
    
        }

        
        
    });



    
});