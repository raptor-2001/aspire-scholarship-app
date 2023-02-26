import React from 'react'
import SearchFilter from '../components/SearchFilter'
import ScholarshipCard from '../components/ScholarshipCard';
import { scholarshipDetails } from '../data';

const Scholarship = () => {

  const handleSearch = (query) => {
    console.log(`Searching for "${query}"`);
  };


  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Page content */}
      <main className="flex-grow">

        {/* Search Section */
        <SearchFilter onSearch={handleSearch}/>}

        {/* Scholarship Cards */}
        <main>
          <ul className='container flex flex-wrap justify-center'>
            {scholarshipDetails.map(scholarship => (

              <li className='m-4' key={scholarship.id}>
              <ScholarshipCard 
                id = {scholarship.id}
                title = {scholarship.title}
                overview = {scholarship.overview}
                detail = {scholarship}
              />
            </li>
              
            ))}
          </ul>
        <ScholarshipCard/>
        </main>
     
      </main>

      
      
    
    </div>
  );
}

export default Scholarship