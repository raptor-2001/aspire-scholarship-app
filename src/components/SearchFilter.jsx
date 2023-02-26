import React, {useState} from 'react'

const SearchFilter = ({onSearch}) => {

  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  }
  return (
    <form className='mb-20' onSubmit={handleSubmit}>

            <div class="w-full my-5 mx-auto md:w-2/3 shadow p-5 rounded-lg bg-white">
              <div class="relative">
                
              <div class="absolute flex items-center ml-2 h-full">
                <svg class="w-4 h-4 fill-current text-primary-gray-dark" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
                </svg>
              </div>
              
              <input type="text" className='px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0' />
                </div>

              <div class="flex items-center justify-between mt-4">
                <p class="font-medium">
                Filters
                </p>

                <button class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
                Reset Filter
                </button>
              </div>

              <div>
                <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                  <option value="everyone">Everyone</option>
                </select>

                <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="">Cast</option>
                  <option value="open">Open</option>
                  <option value="obc">OBC</option>
                  <option value="st">ST</option>
                  <option value="sc">SC</option>
                  <option value="all">All</option>
                </select>

                <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="">Organisation</option>
                  <option value="mhgov">Maharashtra Government</option>
                  <option value="tata">TATA Group</option>
                  <option value="adani">Adani</option>
                  <option value="nta">NTA</option>
                </select> 
              </div>
            </div>
          </div>
        </form>
  )
}

export default SearchFilter