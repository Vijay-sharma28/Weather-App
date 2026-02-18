import React from 'react'

const Response = ({weather}) => {
    return (
        <div>
            {weather ? (
                <>
                    <div className="main flex justify-center font-sans">
                        <div className="border border-gray-400 bg-gray-50 w-full text-center p-3 my-5 rounded-xl animate">
                            <h1 className='font-semibold text-2xl text-gray-800 m-5 font-serif'>{weather.name}, {weather.sys.country}</h1>
                            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} className='mx-auto' alt="" />
                            <h2 className='font-semibold text-2xl text-gray-500 m-5 capitalize'>{weather.weather[0].description}</h2>
                            <div className="figures lg:flex justify-between">
                                <h2 className='font-semibold text-xl m-5'>Temperature : {Math.floor(weather.main.temp)}°C</h2>
                                <h2 className='font-semibold text-xl m-5'>Wind Speed : {weather.wind.speed} Km/h</h2>
                            </div>
                        </div>
                    </div>
                </>
            )
                :
                <>
                    <div className="text-center text-gray-500 mt-10">
                        <h2 className="text-2xl font-semibold"> Search a City</h2>
                        <p className="mt-2">Enter a city name to see the weather details</p>
                    </div>
                </>
            }
        </div>
    )
}

export default Response
