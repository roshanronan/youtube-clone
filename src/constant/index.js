import {
    home,
    watchLater,
    like,
    
    library,
    
    subscription,
    video
} from "../assests"

const Youtube_API_Key='AIzaSyDAOgmIIvEN-KPDcTCh_TAb7tluX25HtBg'

const YouTube_Api = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key='+Youtube_API_Key

export const YOUTUBE_SEARCH_API ="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

const mainServices= [
    {
        icon:home,
        title:'Home'
    },
    {
        icon:video,
        title:'Shorts'
    },
    {
        icon:subscription,
        title:'Subscriptions'
    }
]

const subServices = [
    {
        icon:library,
        title:'Library'
    },
    {
        icon:watchLater,
        title:'History'
    },
    {
        icon:video,
        title:'Your Videos'
    },
    {
        icon:watchLater,
        title:'Water Later'
    }, {
        icon:like,
        title:'Like Videos'
    }, 
]

export{mainServices,subServices,YouTube_Api}
