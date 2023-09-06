import React, { useEffect, useState } from 'react'
import { YouTube_Api } from '../constant';
import Video from './Video';
import { Link } from 'react-router-dom';

function VideoContainer() {
  const [videos,setVideos]= useState([])

  useEffect(()=>{
    getVideos();
  }
  ,[]);

const getVideos = async()=>{
      let data = await fetch(YouTube_Api);
      let json = await data.json()
      setVideos(json.items) 
}

if(videos.length === 0) return null;
  return (
    <div className='flex flex-wrap'>
     {videos.map(video=>{
      return(
       <Link to={'watch?v='+video.id} key={video.id}><Video  item={video} /></Link>
      )
     })}
    </div>
  )
}

export default VideoContainer