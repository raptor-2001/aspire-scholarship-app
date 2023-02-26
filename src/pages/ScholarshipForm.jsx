import React from 'react'
import Footer from '../components/Footer'

const ScholarshipForm = (scholarshipDetails) => {


  return (
    <>
        <div className="max-w-md my-10 mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create Scholarship Application</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium">
            Scholarship Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className=" bg-blue-100 gw-full border-gray-300 rounded-md shadow-sm px-4 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className=" bg-blue-100  w-full border-gray-300 rounded-md shadow-sm px-4 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className=" bg-blue-100  w-full border-gray-300 rounded-md shadow-sm px-4 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="address" className="block font-medium">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2  bg-blue-100 "
            required
          />
        </div>
        <div>
          <label htmlFor="gpa" className="block font-medium">
            GPA
          </label>
          <input
            type="number"
            name="gpa"
            id="gpa"
            className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2  bg-blue-100 "
            min="0"
            max="4"
            step="0.01"
            required
          />
        </div>
        <div>
          <label htmlFor="major" className="block font-medium">
            Major
          </label>
          <select
            name="major"
            id="major"
            className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2"
            required
          >
            <option value="">Choose a major</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Engineering">Engineering</option>
          </select>
        </div>
        <div>
          <label htmlFor="residency" className="block font-medium">
            Residency
          </label>
          <select
            name="residency"
            id="residency"
            className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2"
            required
          >
            <option value="">Choose a residency</option>
            <option value="US">US</option>
          </select>
        </div>
        <div>
          <label htmlFor="additionalCriteria" className="block font-medium ">
            Additional Criteria
          </label>
          <textarea
            name="additionalCriteria"
            id="additionalCriteria"
            rows="3"
            className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2  bg-blue-100 "
            required
          />
        </div>
        <div>
          <label htmlFor="transcripts" className="block font-medium">
            Transcripts
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="applicationLink">
            Application Link
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="applicationLink" type="text" placeholder="https://example.com/apply" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="applicationMaterials">
            Application Materials
          </label>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" value="Transcripts" />
              <span className="ml-2 text-gray-700">Transcripts</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" value="Resume" />
              <span className="ml-2 text-gray-700">Resume</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" value="Personal Statement" />
              <span className="ml-2 text-gray-700">Personal Statement</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" value="Letters of Recommendation" />
              <span className="ml-2 text-gray-700">Letters of Recommendation</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="applicationDeadline">
            Application Deadline
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="applicationDeadline" type="date" />
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
        <h1 className="block text-lg text-gray-700 font-bold mb-2">
            Contact 
          </h1>
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="appearance-none block w-full  bg-blue-100  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="name"
            type="text"
            name="name"
            placeholder="Jane Doe"
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none block w-full  bg-blue-100  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="email"
            type="email"
            name="email"
            placeholder="janedoe@example.com"
            required
          />
         </div>
        </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            className="appearance-none block w-full  bg-blue-100  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="phone"
            type="tel"
            name="phone"
            placeholder="555-123-4567"
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="address">
            Address
          </label>
          <textarea
            className="no-resize appearance-none block w-full  bg-blue-100  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="address"
            name="address"
            placeholder="123 Main St, Anytown USA 12345"
            required
          ></textarea>
         </div>
        </div>
        <div className="flex justify-center">
          <button
            className="btn btn-block mx-10 w-full  px-4 py-2 my-5 text-center text-white bg-purple-600 rounded-md shadow hover:bg-purple-400 cursor-pointer"
            
          >
          Add Scholarship
        </button>
        </div>
      </form>
    </div>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default ScholarshipForm