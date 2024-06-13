// - \src\app\_components\Modals\Desktop\EditProject\ItContactsEdit\ItContactsEdit - It Contacts Edit Component

// REACT
import React, { useEffect, useMemo } from 'react';

// STYLES
import "./it-contacts-edit.css";

// UTILS
import removeDuplicates from '@/utils/removeDuplicates';
import handleIsChecked from '@/utils/handleIsChecked';

// CONTEXT
import { useItContactsContext } from '@/app/_contexts/ItContactsComponentProviders/ItContactsComponentProviders';
import { useSelectedProjectContext } from '@/app/_contexts/SelectedProjectProviders/SelectedProjectProviders';

// AXIOS
import axiosInstance from '@/axiosConfig';

interface ItContactsEditComponentProps {}

const ItContactsEditComponent: React.FC<ItContactsEditComponentProps> = () => {
  const It_contacts = useItContactsContext()
  const selected_project_context = useSelectedProjectContext()
  const [checked, setChecked] = React.useState<string[]>([])
  const [contactNames, setContactNames] = React.useState<any>(null)

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const noEmptyStrings = checked.filter((str) => str !== '')
    const noDuplicateStrings = removeDuplicates(noEmptyStrings)
    let updatedList: string[] = [...noDuplicateStrings]

    if (event.target.checked) {
      updatedList = [...checked, event.target.value]
    } else {
      updatedList = updatedList.filter((id) => id !== event.target.value)
    }

    setChecked(updatedList)
  };

  const handleCheckClick = (checked_value: string) => {
    if (checked.includes(checked_value)) {
      const removed_value = checked.filter((item) => item !== checked_value)
      setChecked([...removed_value])
      return;
    }

    let updatedList: string[] = [...checked]

    if (checked_value) {
      updatedList = [...checked, checked_value]
    } 

    const noDuplicateStrings = removeDuplicates(updatedList)
    setChecked(noDuplicateStrings)
  };

  useEffect(() => {
    It_contacts.updateValue(String(checked.filter((str) => str !== "")))
  }, [checked])

const fetchData = async (endpoint: string, setState: any) => {
  try {
    const response = await axiosInstance.get(endpoint);
    if ( response.status === 200 ) {
      setState(response.data)
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
  useMemo(() => { fetchData("v1/it-contacts", setContactNames) }, []);

  useEffect(() => {

    if (!selected_project_context.value?.IT_Contact_ID) return;

    if (typeof selected_project_context.value.IT_Contact_ID !== "undefined") {
      const parsed_string = selected_project_context.value.IT_Contact_ID.split(`,`).map(str => str)
      setChecked(parsed_string)
    }
  }, [selected_project_context.value])

  return (
    <>
      {/* It Contacts Edit Container Start */}
      {contactNames && contactNames.data?.map((item: any, index: number) => (
        <div className='checkboxes-row-edit' key={index}>
          {/* It Contacts Edit Container Checkboxes Row Start */}
          {/* It Contacts Edit Container Checkboxes input Start */}
          <input
            className='contact-checkbox-edit'
            value={item.IT_Contact_ID ? item.IT_Contact_ID : 0}
            type="checkbox"
            onChange={handleCheck}
           
            checked={handleIsChecked(checked, item.IT_Contact_ID)}
          />
          {/* It Contacts Edit Container Checkboxes input End */}
          {/* It Contacts Edit Container Checkboxes text Start */}
          <span
            className='checkboxes-text-edit'
            onClick={(event) => {handleCheckClick(String(item.IT_Contact_ID))}}
          >
            {item.IT_Contact_Name}
          </span>
          {/* It Contacts Edit Container Checkboxes text Start */}
          {/* It Contacts Edit Container Checkboxes Row End */}
        </div>
      ))}
      {/* It Contacts Edit Container End */}
    </>
  );
};

export default ItContactsEditComponent;


