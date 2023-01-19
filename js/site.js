//Entry Point
function GetValues(){
  //Get the input string
  let inputString = document.getElementById('userString').value;

  DisplayString(ReverseString(inputString));

}

//Logic Function
function ReverseString(stringToReverse){
  let result='';

  for(let i=stringToReverse.length-1; i>=0;i--){
    result += stringToReverse[i];
  }  
  return result;
}

//View Function
function DisplayString(reversedString){
  document.getElementById('results').textContent = reversedString;
  document.getElementById('alert').classList.remove('invisible');

}