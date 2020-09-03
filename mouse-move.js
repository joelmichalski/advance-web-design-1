$(document).ready(function (){
    $("#main").mousemove(function(e){
        handleMouseMove(e);
    });
    
    function handleMouseMove(event){
        //slow mouse co-ordinates
        var x = (event.pageX) * 0.05;
        var y = (event.pageY) * 0.05;
        // animate direction on iso-projection
        $("#mouse").animate({
            top: y + (x * 0.3),
            left: x + (y * 0.3)
        }, 1);
    }
    function writeBinary(number){
        // += to add instead of replace
        document.getElementById("binary_console").innerHTML += number;
    }
    $("body").keypress(function(){
        // 4 random 0 or 1's
        num = [1, 2, 3, 4];
        for (i = 0; i < num.length; i++){
            num[i] = Math.floor(Math.random() * 2);
        }
        //collect 4 numbers + space
        binaryString = num.join("") + " ";
    
        //write 
        writeBinary(binaryString);
    });
    
});
