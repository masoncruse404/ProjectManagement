function convertToHumanReadableFormat(dateString) {
    // Parse the input string into a Date object
    const dateObject = new Date(dateString);

    // Subtract 6 hours from the date
    dateObject.setHours(dateObject.getHours() - 6);
    // Format the date into a human-readable format
    const options = { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
    const formattedDate = dateObject.toLocaleDateString('en-US', options);
    
    return formattedDate;
}

export default convertToHumanReadableFormat;
