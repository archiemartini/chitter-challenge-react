import React, { useState } from "react";
import dateTimeFormatter from "../helper_modules/dateFormatter";

export default function Peep(props) {

  const [isLiked, setIsLiked] = useState(false)

  
  const setHeartColour = (boolean) => {
    if (boolean === false) {
      return {color: "gray"}
    } else {
      return {color: "red"}
    }
  }

  const handleHeartClick = () => {
    setIsLiked(!isLiked)
  }

  return (
    <div className="peep">
      <div>
        <span className="peep--username">{props.user.handle} </span>
        <span>{dateTimeFormatter(props.created_at)}</span>
      </div>
      <div>
        <span className="peep--bodytext">"{props.body}"</span>
      </div>
      <div>
      <i class="fa-solid fa-heart" style={setHeartColour(isLiked)} onClick={handleHeartClick}></i>
        <span className="peep--likes"> {props.likes.length}</span>
      </div>
    </div>
  )
}