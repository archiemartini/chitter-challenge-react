import React, { useState } from "react";
import dateTimeFormatter from "../helper_modules/dateFormatter";
import setHeartColour from '../helper_modules/setHeartColour'

export default function Peep(props) {

  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(props.likes.length)

  const timeFormatted = props.created_at.slice(11,16)

  const handleHeartClick = () => {
    if (isLiked === false) {
      setIsLiked(true)
      setLikeCount(likeCount + 1)
    } else {
      setIsLiked(false)
      setLikeCount(likeCount - 1)
    }
  
  }

  const handleDeleteClick = () => {
    props.deletePeep(props.id)
  }

  return (
    <div className="peep">
      <div className="peep--info">
        <span className="peep--username">{props.user.handle} </span>
        <span className="peep--date">{dateTimeFormatter(props.created_at)}</span>
        <span>{timeFormatted}</span>
      </div>
      <div className="peep--bodytext">
        <span>"{props.body}" </span>
      </div>
      <div>
        <i class="fa-solid fa-heart" style={setHeartColour(isLiked)} onClick={handleHeartClick}></i>
        <span className="peep--likes"> {likeCount}</span>
      </div>
      <div className="peep--delete-circle" onClick={handleDeleteClick}>
        <div className="peep--delete-x" onClick={handleDeleteClick}>x</div>
      </div>
    </div>
  )
}

// {"id":1115,"handle":"archieparchie"}
//  {"user_id":1115,"session_key":"_2a_12_xv2joPzeWLXvqubH7OEVxO"}