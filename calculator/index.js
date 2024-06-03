 const Display = document.getElementById("Display")

 function AppendToDisplay(input){
    Display.value += input;
 }
 function ClearDisplay(input){
    Display.value = "";
 }
 function Calculate(input){
    try{
        Display.value = eval(Display.value);
   }
   catch(e){
      Display.value = "Error";
    }
 }