var katzDeli = [];

function takeANumber(line, newPerson){
  
  line.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${line.length} in line.`

}

function nowServing(line){
  
  line.splice
  
}


function currentLine(line){
  
  
  var status = "The line is currently empty."
 
 //https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
 //=== won't work between arrays, you have to compare elements or use another library. I could also loop through to check 
   if (line.length > 0){
     
    status = "The line is currently:"
    for (var i = 0; i < line.length; i++){
      
      status = status + ` ${i+1}. ${line[i]}`
      if (i != line.length - 1){
        status = status + ","
      }
    }
  }
    
  return status
  
}

