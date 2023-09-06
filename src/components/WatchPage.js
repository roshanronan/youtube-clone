import React, { useEffect } from 'react';
import {useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';

const WatchPage = () => {
    const [videoDetail] = useSearchParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(closeMenu())
    },[])
  return (
    <div className='pl-10 pt-5'>
        <iframe width="700" 
        height="380px" 
        src={"https://www.youtube.com/embed/"+videoDetail.get('v')} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen>
        </iframe>
    </div>
  )
}

export default WatchPage