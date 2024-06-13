// - \src\utils\removeDuplicates - removes duplicate elements from an array

function removeDuplicates(arr) { 
    let unique = [] 
    arr.forEach(element => { 
        if (!unique.includes(element)) { 
            unique.push(element) 
        } 
    }); 
    return unique; 
} 

export default removeDuplicates;