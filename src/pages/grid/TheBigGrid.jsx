import React from 'react'
import Cell from './components/Cell'
import Data from "./Data";
import './TheBigGrid.css'
import Banner from './components/Banner'
import Navbar from '../home/components/Navbar'
import { useState, useEffect } from 'react';
import axios from 'axios';


function TheBigGrid() {
  const backgroundColor = '#151823'
  const [file,setFile] =useState()
  const [image,setImage]=useState([])
  
  const handleUpload=(e) =>{
    const formdata = new FormData()
    formdata.append('file',file)
    console.log(file);
    axios.post('https://vercel.com/ayush-eth/zanime-backend/api/save',formdata)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    axios.get('https://vercel.com/ayush-eth/zanime-backend/api/fill')
    .then(res => setImage(res.data))
    .catch(err => console.log(err))
  }, [])




  return (
    <div className="bg-black"  style={{ backgroundColor }}>
      <Navbar />
      <Banner />
      <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
      <button onClick={handleUpload}>Upload</button>
      <div className='mainContainer mt-40'>
      {
        image && image.map((img,id) => 
          
          <Cell key={id} id = {id} imgsrc={img?.image} />
        )
      }
        
      </div>
    </div>
    
  )
}

export default TheBigGrid