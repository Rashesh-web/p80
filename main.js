name_of_the_student_array=[];
function submit(){
    var name_1= document.getElementById("name_of_the_student_1").value;
   
    name_of_the_student_array.push(name_1);
    
    console.log(name_of_the_student_array);
    var display_student_array=[];
    for (var j = 1; j<=1;j++)
{
    var name_of_the_student=document.getElementById("name_of_the_student_"+j).value;
    console.log(name_of_the_student);
    name_of_the_student_array.push(name_of_the_student);
}
console.log(name_of_the_student_array);
var length_of_name_of_students_array= name_of_the_student_array.length;
console.log(length_of_name_of_students_array);
for (var k=0; k<length_of_name_of_students_array; k++)
  {
      display_student_array.push("<h4>Name -"+ name_of_the_student_array[k]+ "<h4>");
      console.log(display_student_array);
  }  
  console.log(display_student_array);
  document.getElementById("name1").innerHTML=display_student_array;
  var remove_commas = display_student_array.join(" ");
  console.log(remove_commas);
  document.getElementById("s1").innerHTML=remove_commas;
  document.getElementById("submit_button").style.display="none";
  document.getElementById("sort_button").style.display="inline-block";
       

}
 
function sorting(){
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    document.getElementById("s1").innerHTML=name_of_the_student_array;
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    var display_sorted=[];
    var length_of_name_of_students_array = length_of_name_of_students_array.length;
    console.log(length_of_name_of_students_array);
    for (var k=0; k<length_of_name_of_students_array; k++)
    {
        display_sorted.push("<h4>Name -"+ name_of_the_student_array[k]+ "<h4>");
        console.log(display_sorted);
    }
    var remove_commas = display_sorted.join(" ");
  console.log(remove_commas);
  document.getElementById("s1").innerHTML=remove_commas;


}
function search(){
    var s = document.getElementById(s1).value;
    var found = 0;
    var j;
    for (j=0; j<name_of_the_student_array.length; j++)
    {
        if(s==name_of_the_student_array[j] ){
            found=found+1;
        }

    }
    document.getElementById("p2").innerHTML= "name found "+found+ "time/s";
    console.log("name found "+found+ "time/s")

        
    }

