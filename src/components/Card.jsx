import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({id,title, overview}) => {
  
  if(id == undefined)
    return(
      <div></div>
    )
  return (
    
        <div className="max-w-xs rounded hover:scale-150 cursor-pointer overflow-hidden shadow-lg m-4">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{overview}</p>
        </div>
      </div>
  )
}

export default Card
