// - \src\utils\isVariableDefined.tsx - returns true is variable is defined false is variable is undefined

function isVariableDefined(value: number | undefined | Date){
    if (typeof(value) !== "undefined" && value != null) {
      return true;
    } else {
      return false;
    }
 }

 export default isVariableDefined