import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import dateTimeFormatter from "../helper_modules/dateFormatter";
import setHeartColour from '../helper_modules/setHeartColour'
import api from "../api/base"
import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function Peep(props) {

  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(props.likes.length)

  const nav = useNavigate()
 
  const timeFormatted = props.created_at.slice(11,16)

  const isUsersPost = props.userData.user_id === props.user.id ? true : false;

  const isLikedByUser = () => {
    let liked = props.likes.map((like) => {
      if (props.userData.user_id === like.user.id) {
        return true
      } else {
        return false
      }
    })
    if (liked.includes(true)) {
      // setIsLiked(true)
      return true
    } else {
      // setIsLiked(false)
      return false
    }
  }
  
  const handleHeartClick = async () => {
    if (props.userData.user_id === "") {
      nav("/login")
    } else if (isLiked === false) {
      setIsLiked(true)
      setLikeCount(likeCount + 1)
      console.log(props.id, props.userData.user_id, props.userData.session_key)
      
      try {
        const headers = {
          'Authorization': `Token token=${props.userData.session_key}`
        }
        const response = await api.put(`/peeps/${props.id}/likes/${props.userData.user_id}`, null ,{ headers })
        console.log(response.data)

      } catch (err) {
        console.log(`Error: ${err.message}`)
      }

    } else {

      try {
        const headers ={
          'Authorization': `Token token=${props.userData.session_key}`
        }
        const response = await api.delete(`/peeps/${props.id}/likes/${props.userData.user_id}`, { headers })
        console.log(response.data)
      } catch (err) {
        console.log(`Error: ${err.message}`)
      }
      setIsLiked(false)
      setLikeCount(likeCount -1)
    }
  }

  const handleDeleteClick = () => {
    props.deletePeep(props.id)
  }

  return (
    <div className="peep">
      <div className="peep--contents">
        <div className="peep--info">
          <span className="peep--username">@{props.user.handle} </span>
        </div>
        <div className="peep--bodytext">
          <span>{props.body} </span>
        </div>
        <div className="peep--likes">
          <FavoriteIcon
            style={isLiked ? {color: "red"} : {color: "gray"}}
            onClick={handleHeartClick}
            className="peep--delete-icon"
            fontSize="smaller"
          />
          <span className="peep--likes-count"> {likeCount}</span>
        </div>
        <div className="peep--date-time">
          <span className="peep--date">{dateTimeFormatter(props.created_at)}</span>
          <span>{timeFormatted}</span>
        </div>
        { isUsersPost &&
        <div className="peep--delete-circle" onClick={handleDeleteClick}>
          <RemoveCircleIcon fontSize="small" color="primary" className="peep--delete-circle" />
        </div>
        }

      </div>
    </div>
  )
}

// {"id":1115,"handle":"archieparchie"}
//  {"user_id":1115,"session_key":"_2a_12_xv2joPzeWLXvqubH7OEVxO"}