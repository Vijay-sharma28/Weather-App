import React from 'react'

const Input = ({ city, setCity, search }) => {
    return (
        <div className="bg-gray-50 flex justify-center items-center gap-3">
            <input className='border w-full px-3 py-2 text-xl rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200' placeholder='Enter City' type="text" value={city} onChange={(e) => setCity(e.target.value)} onKeyDown={(e) => e.key === "Enter" && search()} />
            <button className='border text-xl p-2 rounded hover:scale-105 transition-all hover:cursor-pointer' onClick={search}><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
    )
}

export default Input
