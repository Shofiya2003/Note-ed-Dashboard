import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Video from './Video';
import Header from './Header';
import Folders from './Folders';

const apiurl="http://localhost:8000/";

export default function VideoList() {
const [videos,setVideos]=useState();


useEffect(()=>{
    console.log("here");
    console.log();
    axios.get(`${apiurl}api/v1/videos`,{
        headers:{
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlNpeWEiLCJlbWFpbCI6InNpeWFAZ21haWwuY29tIiwidXNlcl9pZCI6IjYyMzczMDhkZTlmZTZiNmJhYjYxOTU1NiIsImlhdCI6MTY0ODgyNTIyNX0.Eylls1_gGvXmuU8IrI_nTr7VZZWb2Qp4TarfCcF4ulY'
        }
    }).then(data=>{
        console.log(data);
        if(data.data.message==='success'){
            setVideos(data.data.videos);
            
        }
    }).catch(err=>{
        console.log(err);
    })
},[]);


  return (
      

    <div>
        <Header></Header>
        <main className='flex mt-16'>
            <div className='ml-8 mr-8 basis-1/4'>
                <Folders></Folders>
            </div>
            <div className='flex flex-1 flex-col'>

            {videos && videos.map(video=>{
                return <Video video={video}></Video>
            })}
            </div>
        </main>
    </div>
     
  )
}
