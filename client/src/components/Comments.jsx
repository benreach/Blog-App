import React from 'react'
import Comment from "./Comment"

function Comments() {
  return (
    <div className='flex flex-col gap-8 lg:w-3/5'>
      <h1 className='text-xl text-gray-500 underline'>Comments</h1>
      <div className='flex justify-center items-center gap-4'>
        <textarea placeholder='Write a comment...' className='w-full p-4 rounded-xl outline-none'/>
        <button className='text-sm bg-blue-800 text-white rounded-xl p-2'>Send</button>
      </div>
      <Comment/>
      <Comment/>
      <Comment/>
    </div>
  )
}

export default Comments