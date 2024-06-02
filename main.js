var myArray = ["cat" , "computer" , "car"];
var currentIndex = 0;

function updateDisplay() {
  setText("text_area1",myArray[currentIndex]);
}
updateDisplay();

onEvent("button2", "click", function( ) {
  currentIndex++;
    if (currentIndex >= myArray.length) {
      currentIndex = 0;
      }
      
updateDisplay();
    
});
onEvent("button1", "click", function( ) {
  currentIndex--;
    if (currentIndex < 0) {
      currentIndex = myArray.length - 1;
    }
updateDisplay();
});


onEvent("button3", "click", function(){
  var newItem = getText("text_input1");
  insertItem(myArray,currentIndex,newItem);
  updateDisplay();
});

updateDisplay();

console.log(currentIndex);
