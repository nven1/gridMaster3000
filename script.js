$(document).ready(function(){
        var mainGridRowCount = 30;
        var mainGridColumnCount = 30;
        var selectedElement = null;
        var mousedown=false;
        var rightClick = false;
        var list=[];
        var gridArea;
        var layer = 1;
        var layer1Occupied=[];

        createGrid()

        $( "#backColorBlack" ).click(function() {
            changeBackgroundColor(selectedElement, 'black');
        });
        $( "#backColorWhite" ).click(function() {
            changeBackgroundColor(selectedElement, 'white');
        });
        $( "#backColorGrey" ).click(function() {
            changeBackgroundColor(selectedElement, 'grey');
        });   
        $( "#layerUp" ).on('click', function(){
            layer++;
            $(".gridTile").css('z-index', layer);
            console.log(layer);
            
        }); 
        $( "#layerDown" ).on('click', function(){
            if (layer!=0) {
                
                layer--;
                $(".gridTile").css('z-index', layer);
            }    
            console.log(layer);
            
        }); 
        $( "#resetSelection").on('click',resetSelection);

            
        $("#makeDiv").click(function() {
            let rowList = [];
            let colList = [];
            // get coordinates of selected divs in list and give them to div
            for (let i=0; i<list.length; i++) {    
                if (!layer1Occupied.includes(list[i])) {
                    layer1Occupied.push(list[i]);
                }
                else {
                    console.log("it broke nigga");
                    break;
                }
                
                let coo = list[i].split("r").pop();
                let row = coo.split("c").shift();
                let col = coo.split("c").pop();
                rowList.push(row);
                colList.push(col);
            }
            // collision check
/*             for (let i=0; i<rowList.length;i++) {

            } */

            let minRow = Math.min.apply( Math, rowList );
            let maxRow = Math.max.apply( Math, rowList )+1;
            let minCol = Math.min.apply( Math, colList );
            let maxCol = Math.max.apply( Math, colList )+1;
            gridArea = minRow+'/'+minCol+'/'+maxRow+'/'+maxCol
            createDiv(gridArea);
            console.log(layer1Occupied);
        });   
        $(".main div").on('mousedown',function(){
            selectedElement = this.id;
            switch (event.which) {
                case 1:
                    mousedown = true;
                    if (list.includes(selectedElement) === false) {
                        $(this).addClass("elementSelectClass");
                        console.log("a");
                        list.push(selectedElement);
                    }
                    break;
                case 3:
                    rightClick = true;
                    if (list.includes(selectedElement) === true) {
                        $(this).removeClass("elementSelectClass");
                        list = list.filter(item => item !== selectedElement); 
                    }
                    break;
            }
        })
        $(".main div").on('mouseover',function(){
            selectedElement = this.id;
            if(mousedown) {
                if (list.includes(selectedElement) === false) {
                    $(this).addClass("elementSelectClass");
                    list.push(selectedElement);
                }
            }
            else if (rightClick) {
                console.log("eyyy");
                if (list.includes(selectedElement) === true) {
                    
                    $(this).removeClass("elementSelectClass");
                    list = list.filter(item => item !== selectedElement); 
                }
            }
        })

        $(document).on('mouseup',function(){
            switch (event.which) {
                case 1:
                    mousedown = false;
                    list.sort();
                    break;
                case 3:
                    rightClick = false;
                    list.sort();
                    console.log("eyy");
                    break;
            }

        })

        $(document).on('mousedown','.userMade',function(){
            selectedElement = this.id;
            
        })
        $(document).on('mouseup',function(){
            mousedown = false;
            list.sort();
            console.log(list);
        })

        $(".main div").disableSelection();

        function changeBackgroundColor(element, color) {
            $("#"+element).get(0).style.setProperty("background-color", color);
        }
        function Div(gridArea, z,  id) {
           this.gridArea = gridArea;
           this.id = id;
           this.z = z;
        }
        function createGrid() {
            $(".main").get(0).style.setProperty("grid-template-columns", mainGridColumnCount*"1fr ");
            $(".main").get(0).style.setProperty("grid-template-rows", mainGridRowCount*"1fr ");
            for (var r = 1; r<=mainGridRowCount; r++) {
                for (var c = 1; c<=mainGridColumnCount; c++) {
                    $(".main").append("<div id='r"+r+"c"+c+"' class='gridTile' style='background-color: #ffffff00; grid-area:"+r+"/"+c+"; border: 1px solid #00000010;'></div>")
                }
            }
        }
        function createDiv(gridArea) {
            $(".main").append("<div class='userMade' style='grid-area:"+gridArea+"; z-index:"+layer+"; background-color:#555; border-radius: 10px;'></div>")
            resetSelection();
            list=[];
            gridArea=null;
        }
        function resetSelection() {
            $(".main div").removeClass("elementSelectClass");
            list=[];
        }
});