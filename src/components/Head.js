import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../constant';

function Head() {
  const dispatch = useDispatch()
  const [searchQuery,setSearchQuery]=useState('')
  const [suggetions,setSuggetions]= useState([])
  const [showSuggetion,setShowSuggetion] = useState(false)

  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu())
  }

  useEffect(()=>{
    // console.log(searchQuery)
    // getSearchSuggetion()
    const timer = setTimeout(()=>getSearchSuggetion(),200)

    return ()=>{clearTimeout(timer)}

  },[searchQuery])

  const getSearchSuggetion = async()=>{
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery)
    const json = await data.json()
    setSuggetions(json[1])
    console.log(json[1])
  }

  return (
    <div className='grid grid-flow-col m-2 mt-0 p-1 items-center fixed  t-0 bg-white w-full'>
      <div className='flex  gap-4 col-span-1 cursor-pointer items-center'>
      <img className='h-10' onClick={()=>{toggleMenuHandler()}} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII=' alt='menu'/>

      <a href='/'><img className='h-5 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt='logo' /></a>
    </div>
      <div className='col-span-10 px-20 hidden md:flex md:flex-col' >
        <div >
        <input className='w-2/3 border p-1 border-gray-500 rounded-l-full px-4 focus:outline-none'
         type='text'
         value={searchQuery}
         onChange={(e)=>{setSearchQuery(e.target.value)}}
         placeholder='Search'
         onFocus={()=>setShowSuggetion(true)}
         onBlur={()=>{setShowSuggetion(false)}}
         />
        <button className='border border-gray-500 rounded-r-full px-3 py-1 bg-gray-200' >🔍</button>
       </div>
      {showSuggetion && suggetions.length>0 && <div className='fixed mt-9 pl-2 border border-gray-200 rounded-md bg-white '>
        <ul>
          {suggetions.map(suggetion=><li key={suggetion} className='w-[29rem]  p-1'>{suggetion}</li>)}
        </ul>
      </div>}
      </div>
      
      <div className='col-span-1'>
      <img className='h-10' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8GK7YUtkIpzjmqsZkKJL7lso-nWmjdKWg-g&usqp=CAU' alt='user' />
      </div>
    
    </div>
  )
}

export default Head