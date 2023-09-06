import React from 'react'
const buttons =['All',' Programming',' Gaming',' Mixes',' News',' Stocks',' Moon',' AI',' Live',' Editing',' Music',' Podcasts','History' ]

function ButtonList() {
  return (
    <div className='flex w-full shadow-[inset_-16px_0px_31px_3px_#f7fafc] '>
      {buttons.map((button)=>{
        return(
          <div className='px-3 py-2 m-2 bg-gray-100 rounded-md hover:bg-gray-200' key={button}>{button} </div>
        )
      })}
    </div>
  )
}

export default ButtonList