export const getCurrentDateTimeInAmericanFormat = () => {
    const now = new Date();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const year = now.getFullYear();
    const hours = now.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = ((hours + 11) % 12 + 1).toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
  
    return `${month}/${day}/${year} ${formattedHours}:${minutes} ${ampm}`;
}

export const getCurrentDateInAmericanFormat = (calendarInputValue) => {
    const now = new Date(calendarInputValue);
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = (now.getDate() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();

    return `${month}/${day}/${year}`;
}

//write a function to convert military time to standard time, and round to nearest 15 minutes
export const convertMilitaryTimeToStandardTime = (militaryTime) => {
  const hours = parseInt(militaryTime.split(':')[0]);
  const minutes = parseInt(militaryTime.split(':')[1]);
  const ampm = hours >= 12 ? 'PM' : 'AM';
  let formattedHours = ((hours + 11) % 12 + 1).toString().padStart(2, '0');
  let formattedMinutes = Math.ceil(minutes / 15) * 15;

  if (formattedMinutes === 60) {
    formattedHours = ((hours + 1) % 24 || 12).toString().padStart(2, '0');
    formattedMinutes = '00';
  } else if (formattedMinutes === 0 && hours === 0) {
    formattedHours = '12';
  }
  
  return `${formattedHours}:${formattedMinutes.toString().padStart(2, '0')} ${ampm}`;
}

export const convertStandardTimeToMilitaryTime = (standardTime) => {
  const hours = parseInt(standardTime.split(':')[0]);
  const minutes = parseInt(standardTime.split(':')[1].split(' ')[0]);
  const ampm = standardTime.split(':')[1].split(' ')[1];

  let militaryHours = hours;
  if (ampm === 'PM') {
    militaryHours += 12;
  }
  if (hours === 12 && ampm === 'AM') {
    militaryHours = 0;
  }

  return `${militaryHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};

export const checkIfUndefined = (object, callback) => {
  if (object === undefined) {
      return "";
  } else {
      return callback(object);
  };
};