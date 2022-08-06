import React, { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Peep from "./components/Peep"
import api from './api/base'

export default function App() {

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
      <Navbar />
      <div className="peeps-container">
        {peepList}
      </div>
      
    </>
  )
}