var student_array=[];
function getpara1(){
    var display_array=[];
     for (var j=1; j<=6; j++){
         var nameofthestudent=document.getElementById("input_box_"+j).value;
         console.log(nameofthestudent);
         student_array.push(nameofthestudent);
     }
    }