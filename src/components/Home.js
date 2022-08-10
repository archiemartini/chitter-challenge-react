import React, { useState, useEffect } from "react";
import Peep from "./Peep"
import api from '../api/base'

export default function Home(props) {

  const [peepData, setPeepData] = useState([])


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
    <>
      {props.loggedIn && <h1 className="header">Hey there, {props.userData.username}</h1>}
      <h2 className="header">News Feed</h2>
      <div className="main-container">
        <div className="peeps-container">
          {peepList}
        </div>
      </div>
    </>
  )
}