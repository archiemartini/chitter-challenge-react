import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import Peep from "./Peep"
import api from '../api/base'
import { TextField, styled, Button } from "@mui/material";

const CustomizedTextField = styled(TextField)`
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 7.5px
`;

const CustomButton = styled(Button)`
  margin-left: auto;
  margin-right: auto;
  margin-bottom -20px;
`;


export default function Home(props) {

  const [peepData, setPeepData] = useState([])
  const [peepMessage, setPeepMessage] = useState("")

  const nav = useNavigate()

  const userData = props.userData

  const newPeep = {
    "peep": {
      "user_id": props.userData.user_id,
      "body": peepMessage
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/peeps')
        setPeepData(response.data)
        console.log("UserData", response.data)
      } catch (err) {
        console.log(`Error: ${err.message}`)
      }
    }
    fetchData()
  }, [])

  const deletePeep = async (peepId) => {
    const newPeepData = peepData.filter((peep) => peep.id !== peepId)
    setPeepData(newPeepData)
    try {
      // eslint-disable-next-line
      const response = await api.delete(`/peeps/${peepId}`, {
        headers: {
          'Authorization': `Token token=${userData.session_key}`
        }
      } )
    } catch (err) {
      console.log(`Error: ${err.message}`)
    }

  }

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (props.userData.user_id === "") {
      nav("/login")
    } else {

      try {
        const response = await api.post('/peeps', newPeep, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token token=${userData.session_key}`
          }
        })
        //dynamic adding of new post
        const newDOMPeep = response.data
        const newPeepData = [...peepData]
        newPeepData.unshift(newDOMPeep)
        setPeepData(newPeepData)
      } catch (err) {
        console.log(`Error: ${err.message}`)
      }
      setPeepMessage("")
      
    }
  }

  
  const peepList =
    peepData.map((peep) => {
      return (
        <Peep 
        key={peep.id}
        userData={userData}
        deletePeep={deletePeep}
        {...peep}
        />
      )
    })

  return (
    <div>
    {
      props.loggedIn &&

     <div>
      <span className="top-left">Hey, {userData.username}!</span>
      <div className="post-form">
      <form className="post-form">
        <CustomizedTextField 
          placeholder="What's on your mind?"
          value={peepMessage}
          onChange={e => setPeepMessage(e.target.value)}
          fullWidth
        />
        <CustomButton 
          type="submit" 
          variant="outlined" 
          onClick={handleSubmit}>Submit</CustomButton>
      </form>
      </div>  
     </div> 
    }
      <div className="main-container">
        <div className="peeps-container">
          {peepList}
        </div>
      </div>
    </div>
  )
}