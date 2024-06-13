// - /src/util/parseDate- parses date string

function parseDate(var_date){
    const str_var_date = String(var_date)
    if(str_var_date){
        if(str_var_date.includes("T")){
            const date = str_var_date.split("T")[0]
            return date;
        }
    }
} 

export default parseDate;