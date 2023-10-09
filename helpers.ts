export function getDate(
  timestamp: { seconds: number; nanoseconds: number } | Date
) {
  if (timestamp instanceof Date) {
    // If the input is already a Date object, you can use it directly
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return timestamp.toLocaleString("en-US", options);
  } else {
    // If the input is a timestamp object, convert it to a Date object first
    const milliseconds = timestamp.seconds * 1000 + timestamp.nanoseconds / 1e6;
    const date = new Date(milliseconds);

    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    return date.toLocaleString("en-US", options);
  }
}

export function getTime(date: Date) {
  if (date.getHours() && date.getMinutes()) {
    const hours = date.getHours();
    const minutes = date.getMinutes();

    let dayHalf = "AM";
    hours >= 12 ? (dayHalf = "PM") : (dayHalf = dayHalf);

    const formattedHours = minutes < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes} ${dayHalf}`;
  } else return "";
}
