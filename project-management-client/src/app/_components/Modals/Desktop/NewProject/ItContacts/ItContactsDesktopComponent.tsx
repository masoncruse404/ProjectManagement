// - \src\app\_components\Modal\Desktop\NewProject\ItContacts\ItContactsDesktopComponent - It Contacts Desktop Component

// REACT
import * as React from "react";

// STYLES
import "./it-contacts.css";

// UTILS
import getBaseURL from "@/utils/getBaseURL";
import getCorsHeaders from "@/utils/getCorsHeaders";
import removeDuplicates from "@/utils/removeDuplicates";
import handleIsChecked from "@/utils/handleIsChecked";

// CONTEXT
import { useItContactsContext } from "@/app/_contexts/ItContactsComponentProviders/ItContactsComponentProviders";

interface ItContact {
  IT_Contact_ID: string;
  IT_Contact_Name: string;
}

const ItContactsComponent: React.FC = () => {
  const [checked, setChecked] = React.useState<string[]>([]);
  const [contactNames, setContactNames] = React.useState<ItContact[] | null>(null);
  const It_contacts = useItContactsContext()

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const noEmptyStrings = checked.filter((str) => str !== "");
    const noDuplicateStrings = removeDuplicates(noEmptyStrings);
    let updatedList: string[] = [...noDuplicateStrings];

    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }

    setChecked(updatedList);
  };

  const handleCheckClick = (checked_value: string) => {
    if (checked.includes(checked_value)) {
      const removed_value = checked.filter((item) => item !== checked_value);
      setChecked([...removed_value]);
      return;
    }

    let updatedList: string[] = [...checked];

    if (checked_value) {
      updatedList = [...checked, checked_value];
    } else {
      updatedList.splice(checked.indexOf(checked_value), 1);
    }

    const noDuplicateStrings = removeDuplicates(updatedList);
    setChecked(noDuplicateStrings);
  };

  React.useEffect(() => { It_contacts.updateValue(String(checked)) }, [checked]);
   
  async function getFieldData(){
    const corsHeaders = getCorsHeaders()
    const res = await fetch(`${getBaseURL()}/v1/it-contacts`, {
      method: "GET",
	    mode: "cors",
      headers: corsHeaders,
    })
    if (res.ok) {
      const result = await res.json()
      const data = result.data
      setContactNames(data)
    }

  }
 
  React.useMemo(() => { getFieldData() }, [])

  return (
    <>
      {/* It Contacts Container Start */}
      {contactNames &&
        contactNames?.map((item: ItContact, index: number) => (
          <div className="checkboxes-row" key={index}>
            {/* It Contacts Checkbox Container Start */}
            {/* It Contacts Checkbox Input Start */}
            <input
              className="contact-checkbox"
              value={item.IT_Contact_ID}
              type="checkbox"
              onChange={handleCheck}
              checked={handleIsChecked(checked, item.IT_Contact_ID)}
            />
            {/* It Contacts Checkbox Input End */}
            {/* It Contacts Checkbox Input Text Start */}
            <span
              className="checkboxes-text"
              onClick={() => handleCheckClick(String(item.IT_Contact_ID))}
            >
              {item.IT_Contact_Name}
            </span>
            {/* It Contacts Checkbox Input Text Start */}
            {/* It Contacts Checkbox Container Start */}
          </div>
        ))}
      {/* It Contacts Container End */}
    </>
  );
}

export default ItContactsComponent;
