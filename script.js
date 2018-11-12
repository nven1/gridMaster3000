$(document).ready(function(){

    $(".z0id0").ready(function productController() {
        var mainGridRowCount = 15;
        var mainGridColumnCount = 15;
        var selectedElement = null;
        var mousedown=false;
        var list=[];
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
   

/*         $(".z0id0 div").on('mouseenter',function(){
            if (selectedElement!=null) {
                $("#"+selectedElement).get(0).style.setProperty("outline", "none");
            }
            var previousItem = selectedElement;
            selectedElement = this.id;
            list.push(selectedElement);

            if (previousItem==this.id) {
                $("#"+selectedElement).get(0).style.setProperty("outline", "none");
            } else {             
                $(this).get(0).style.setProperty("outline-offset", "-2px");
                $(this).get(0).style.setProperty("outline", "2px solid black");
            }
            console.log(list);
        }) */

        $(".z0id0 div").on('mousedown',function(){
            list=[];
            mousedown = true;
            selectedElement = this.id;
            list.push(selectedElement);
            
        })
        $(".z0id0 div").on('mouseover',function(){
            if(mousedown) {
                selectedElement = this.id;
                list.push(selectedElement);
            }
        })
        $(".z0id0 div").on('mouseup',function(){
            mousedown = false;
            console.log(list);
        })
        $(".z0id0 div").disableSelection();

        

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
                    $(".z0id0").append("<div id='"+'z1id'+r+c+"' style='background-color: lightgrey; grid-area:"+r+"/"+c+"; border: 1px solid black;'>a</div>")
                }
            }
    
        }

        
        
    });



    
});