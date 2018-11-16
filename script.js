$(document).ready(function(){
        var mainGridRowCount = 40;
        var mainGridColumnCount = 40;
        var selectedElement = null;
        var mousedown=false;
        var rightClick = false;
        var list=[];
        var gridArea;
        var layer = 1;
        var layer1Occupied=[]
        var selectedGridArea;
        var selectedGridAreaFirst;
        var selectedGridAreaLast;

        createGrid()
        $("#currentLayer").text(layer);

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
            if (layer!=9) {
                layer++;
                $(".gridTile").css('z-index', layer);
                $("#temp").css('z-index', layer);
                $("#currentLayer").text(layer);
            }
        }); 
        $( "#layerDown" ).on('click', function(){
            if (layer!=1) {
                layer--;
                $(".gridTile").css('z-index', layer);
                $("#temp").css('z-index', layer);
                $("#currentLayer").text(layer);
            }    
        }); 
        $( "#resetSelection").on('click',resetSelection);

            
        $("#makeDiv").click(function() {
/*             let rowList = [];
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
            // collision check - napra
            for (let i=0; i<rowList.length;i++) {

            }

            let minRow = Math.min.apply( Math, rowList );
            let maxRow = Math.max.apply( Math, rowList )+1;
            let minCol = Math.min.apply( Math, colList );
            let maxCol = Math.max.apply( Math, colList )+1;
            gridArea = minRow+'/'+minCol+'/'+maxRow+'/'+maxCol */
            createDiv();
            hideSelectionGrid();
            //console.log(layer1Occupied);
        });   
        $(".main div").on('mousedown',function(){
            selectedElement = this.id;
            switch (event.which) {
                case 1:
                    mousedown = true;
                    let row = Number(this.id.split("r").pop().split("c").shift());
                    let col = Number(this.id.split("r").pop().split("c").pop());
                    selectedGridAreaFirst=row+'/'+col+'/';
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
                //let coo = this.id.split("r").pop();
                let row = Number(this.id.split("r").pop().split("c").shift());
                let col = Number(this.id.split("r").pop().split("c").pop());
                if (row!=1) { row+=1; }
                if (col!=1) { col+=1; }
                showSelectionGrid(selectedGridAreaFirst+row+'/'+col);
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
            $("#elementLayer").text("Layer: "+$(this).css('z-index'))
            $("#elementBackColor").text("Background Color: "+$(this).css('background-color'))
            $("#elementColor").text("Text Color: "+$(this).css('color'))
            
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
            $(".main").get(0).style.setProperty("grid-template-columns", mainGridColumnCount*"minmax(0, 1fr) ");
            $(".main").get(0).style.setProperty("grid-template-rows", mainGridRowCount*"minmax(0, 1fr) ");
            $(".topRuler").get(0).style.setProperty("grid-template-columns", 'repeat('+mainGridColumnCount+', 1fr)');
            $(".leftRuler").get(0).style.setProperty("grid-template-rows", 'repeat('+mainGridRowCount+', 1fr)');
            
            for (var r = 1; r<=mainGridRowCount; r++) {
                $(".leftRuler").append("<span id='rulerLeft"+r+"' class='rulerLeftNumber' style='grid-area:"+r+"/1; z-index:1'>"+r+"</span>")
                for (var c = 1; c<=mainGridColumnCount; c++) {
                    $(".main").append("<div id='r"+r+"c"+c+"' class='gridTile' style='background-color: #ffffff00; grid-area:"+r+"/"+c+"; border: 1px solid #00000010; z-index:1'></div>")
                }
            }
            for (var c = 1; c<=mainGridColumnCount; c++) {
                $(".topRuler").append("<span  id='rulerTop"+c+"'  class='rulerTopNumber'  style='grid-area:1/"+c+"; z-index:1'>"+c+"</span>")            }
        }
        function createDiv() {
            $(".main").append("<div class='userMade' style='grid-area:"+selectedGridArea+"; z-index:"+layer+"; background-color:#"+layer+"aa; border-radius: 2px; color:#fff;'>"+layer+"</div>")
            
        }
        function showSelectionGrid(gridArea) {
            $("#temp").css("grid-area",gridArea);
            $("#temp").fadeIn();
            selectedGridArea = gridArea;

        }
        function hideSelectionGrid() {
            $("#temp").fadeOut();
        }
});