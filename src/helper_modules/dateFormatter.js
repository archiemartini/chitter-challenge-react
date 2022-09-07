export default  function dateTimeFormatter(dateTimeString) {
  const date = dateTimeString.slice(0, 10)

  const monthName = (dateString) => {
    let month = dateString.slice(5, 7)
    if (month[0] === "0") {
      month = month[1]
     };

    let calendar = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    return calendar[month - 1]
  }
  
  const ordinalDate = (dateString) => {
   let dayNum = dateString.slice(8, 10)

   if (dayNum[0] === "0") {
    dayNum = dayNum[1]
   };

    let selector;

    if (dayNum <= 0) {
      selector = 4;
    } else if ((dayNum > 3 && dayNum < 21) || dayNum % 10 > 3) {
      selector = 0;
    } else {
      selector = dayNum % 10;
    }
    return dayNum + ['th', 'st', 'nd', 'rd', ''][selector];
  }
  
return `${monthName(date)} ${ordinalDate(date)}`
}