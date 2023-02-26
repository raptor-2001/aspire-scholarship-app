import React from 'react'
import { sourcesDetails } from '../data';
import Card from '../components/Card';
const Sources = () => {
  return (
    <main>
          <ul className='container flex flex-wrap justify-center'>
            {sourcesDetails.map(source => (

              <li className='m-4' key={source.id}>
              <Card 
                id = {source.id}
                title = {source.title}
                overview = {source.overview}
                detail = {source}
              />
            </li>
              
            ))}
          </ul>
        <Card/>
        </main>
  )
}

export default Sources