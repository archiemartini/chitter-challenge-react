import React, { useState, useEffect } from "react";
import Peep from "./Peep"
import api from '../api/base'

export default function Home(props) {

  const [peepData, setPeepData] = useState([])
  const [peepMessage, setPeepMessage] = useState("")

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
      {props.loggedIn && <h1 className="header">Hey there, {props.userData.username}</h1>}
      <h2 className="header">News Feed</h2>
      <form className="post-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="text"
          placeholder="What's on your mind?"
          value={peepMessage}
          onChange={e => setPeepMessage(e.target.value)}
        />
        <input 
          type='submit' 
          value='Submit' 
        />
      </form>
      <div className="main-container">
        <div className="peeps-container">
          {peepList}
        </div>
      </div>
    </div>
  )
}