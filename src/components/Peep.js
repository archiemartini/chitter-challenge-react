import React from "react";
import dateTimeFormatter from "../helper_modules/dateFormatter";

export default function Peep(props) {


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
        <span className="peep--likes">Likes: {props.likes.length}</span>
      </div>
    </div>
  )
}