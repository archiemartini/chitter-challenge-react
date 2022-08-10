import React, { useState, useEffect } from "react";
import Peep from "./Peep"
import api from '../api/base'

export default function Home(props) {

  const [peepData, setPeepData] = useState([])
  const [peepMessage, setPeepMessage] = useState("")
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
        console.log(response.data)
      } catch (err) {

      }
    }
    fetchData()
  }, [])

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/peeps', newPeep, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token token=${props.userData.session_key}`
        }
      })
      //dynamic adding of new post
      const newDOMPeep = {
        body: peepMessage, id: Math.floor(Math.random() * 10) + 1, 
        created_at: new Date().toISOString(), 
        likes: [],
        user: {
          id: props.userData.user_id, handle: props.userData.username
        }
      }
      const newPeepData = [...peepData]
      newPeepData.unshift(newDOMPeep)
      setPeepData(newPeepData)
    } catch (err) {
      console.log(`Error: ${err.message}`)
    }
    
  }
  
  const peepList =
    peepData.map((peep) => {
      return (
        <Peep 
        key={peep.id}
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