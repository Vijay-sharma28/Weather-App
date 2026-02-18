import React from 'react'
import Input from './Input'
import { useState } from 'react'
import axios from 'axios'
import Response from './Response'

const Heading = () => {

  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(undefined)

  const API = import.meta.env.VITE_API_KEY

  const search = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`)
      setWeather(response.data)
      console.log(response.data);
      
      setCity("")

    } catch (error) {
      console.log("Error fetching weather data", error);
      alert("City not found")
    }
  }


  return (
    <div className='w-100 lg:w-200 min-h-150 px-8 lg:px-20 py-10  rounded-2xl shadow-xl shadow-gray-600/50'>

      <h1 className='text-3xl font-semibold text-gray-800 text-center mb-10'>Weather App</h1>

      <Input city={city} setCity={setCity} search={search} />
      
      <Response weather={weather} />

    </div>
  )
}

export default Heading
