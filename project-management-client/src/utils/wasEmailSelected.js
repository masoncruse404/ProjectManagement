// - /src/util/wasEmailSelected - returns true if email was selected

function wasEmailSelected(var_array, index){
    if(!var_array) return;

    if(var_array.includes(index)){
      return true;
    } else{
      return false;
    } 
    
}

export default wasEmailSelected