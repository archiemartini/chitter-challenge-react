import React from "react";

export default function Peep(props) {

  const dateFormat = props.created_at.slice(0, 10)
  const timeFormat = props.created_at.slice(11, 16)

  function dateTimeFormatter(props) {
    const date = props.created_at.slice(0, 10)
    const time = props.created_at.slice(11, 16)
  
    const monthName = (dateString) => {
      let month = dateString.slice(5, 7)
      if (month[0] === "0") {
        month = month[1]
       };

      let calendar = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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
  
  dateTimeFormatter(props)

  return (
    <div className="peep">
      <div>
        <span className="peep--username">{props.user.handle} </span>
        <span>{dateTimeFormatter(props)}</span>
      </div>
      <div>
        <span className="peep--bodytext">"{props.body}"</span>
      </div>
      <div>
        <span className="peep--likes">Likes: {props.likes.length}</span>
      </div>
    </div>
  )
}