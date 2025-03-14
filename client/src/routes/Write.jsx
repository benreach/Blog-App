import { useUser } from '@clerk/clerk-react'
import React from 'react'
import "react-quill-new/dist/quill.snow.css"
import ReactQuill from 'react-quill-new';


function Write() {
  const {isLoaded,isSignedIn} = useUser();

  if(!isLoaded){
    return <div>Loading...</div>
  }
  if(isLoaded && !isSignedIn){
    return <div>Please login!</div>
  }
  return (
    <div className='h-[calc(100vh-80px)] md:h-[calc(100vh-64px)] flex flex-col gap-6'>
      <h1 className='text-cl font-light'>Create a New Post</h1>
      <form className='flex flex-col gap-5 flex-1 mb-6' >
        <button className='w-max shadow-md rounded-xl text-sm text-gray-500 bg-white p-2 '>Add cover image</button>
        <input type="text" placeholder='My Awesome Story'  className='outline-none text-4xl font-semibold bg-transparent'/>
        <div className='flex items-center gap-4'>
          <label htmlFor="" className='text-sm'>Choose a category:</label>
          <select name='cat' className='p-2 rounded-xl bg-white shadow-md'>
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="database">Database</option>
            <option value="seo">Search Engine</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea className='bg-white p-4 rounded-xl outline-none' name='desc' placeholder='A short description'></textarea>
        <ReactQuill theme='snow' className='flex-1 bg-white rounded-xl outline-none'/>
        <button className='bg-blue-800 rounded-xl w-36 font-medium text-white p-1'>Post</button>
      </form>
    </div>
  )
}

export default Write