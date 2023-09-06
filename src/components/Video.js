import React from 'react'

const Video = ({item}) => {
    const {snippet,statistics} = item
    const {thumbnails,channelTitle,title} = snippet

  return (
    <div className='p-2 my-2 w-[310px]'>
        <img className='rounded-xl w-' alt={item?.id} src={thumbnails?.medium.url} />
        <ul className='w-[310px] break-words'>
        <p className='font-bold'>{title}</p>
        <p>{channelTitle}</p>
        <p> {statistics.viewCount} views </ p>
        </ul>
    </div>
  )
}

export default Video