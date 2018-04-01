var katzDeli = [];

function takeANumber(line, newPerson){
  
  line.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${line.length + 1} in line.`

}

function nowServing(line){
  
  line.splice
  
}


function currentLine(line){
  
  if (line === []){
    return "The line is currently empty"
  }
  
  var string = "The line is currently:"
  
  for (var i = 0; i < line.length; i++){
    
    string = string + ` ${i+1}. ${line[i]}`
    if (i != line.length - 1){
      string = string + ","
    }
  }
  
}