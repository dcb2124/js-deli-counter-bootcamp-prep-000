var katzDeli = [];

function takeANumber(line, newPerson){
  
  line.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${line.length + 1} in line.`

}

function nowServing(line){
  
  line.splice
  
}


function currentLine(line){
  
  
  var status = "The line is currently empty."
 
 
   if (line != []){
    
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

console.log(currentLine([]))