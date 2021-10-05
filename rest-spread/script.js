const randomize = ()=>{
    let columns = 0;
    let lines = 0;
    let array = "";
    do{
        columns =  prompt("How many columns the array will have? <1 to 10>");
    }while(columns < 1 || columns > 10);
    do{
        lines  =  prompt("How many lines the array will have? <1 to 10>");
    }while(lines < 1 || lines > 10);
      
    for(let l = 0; l < lines; l++){//Set line number
        for(let c = 0; c < columns; c++){//Set column number
            if(c == 0){//First number
                array += "[";
            }
            let random = (Math.random() * (10 - 0) + 0).toFixed(0);
              
            array += random;
            if(c == columns -1){
                if(l == lines){//final number in the last line
                    array += "]";
                }else{
                    array += "],";
                }     
            }else{
                array += ",";
            }
        }      
    }
    document.getElementById("generate-button").setAttribute('onclick','generateArray('+array+')');
}
  
const generateArray = (...number)=>{
    let text = "";
    for(let i = 0; i < number.length; i++){
      for(let m = 0; m < number[i].length; m++){
        if(m == 0){
            text += "<div class='line-container'>"
        }
        if(i == m && number.length*number[i].length == number.length*number.length){//primary diagonal
          text += "<span class='primary'>" + number[i][m] + "</span>";
        }else{
          text += "<span>"+number[i][m] + "</span>";
        }     
        if(m == number[i].length - 1){//last line 
          text += "</div> <br> "
        }
      }
    }
    document.getElementById("array").innerHTML = text;
  }
  
  