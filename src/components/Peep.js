import React from "react";

export default function Peep(props) {
  return (
    <div className="peep">
      <span className="peep--username">{props.user.handle}: </span>
      <span>{props.body}</span>
    </div>
  )
}