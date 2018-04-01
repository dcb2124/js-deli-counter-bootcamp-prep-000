var katzDeli = [];

function takeANumber(line, newPerson){
  
  line.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${line.length + 1} in line.`

}

function nowServing(line){
  
  line.splice
  
}


function currentLine(line){
  
  string = "The line is currently:"
  
  for (var i = 1; i < line.length; i++){
    
    string = string + ` ${i+1}. ${line[i]}`
    if (i != line.length - 1){
      string = string + ","
    }
  }
  
}