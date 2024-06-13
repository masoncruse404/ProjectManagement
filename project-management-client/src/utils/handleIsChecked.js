// - \src\utils\handleIsChecked.js - returns true if contacts is checked false if not

function handleIsChecked(var_checked, it_contact_id){
 
  if(var_checked.includes(String(it_contact_id)))
    return true;
  else
    return false;
}

export default handleIsChecked