import React from 'react'
import Cell from './components/Cell'
import Data from "./Data";
import './TheBigGrid.css'
import Banner from './components/Banner'
import Navbar from '../home/components/Navbar'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../firebase';




function TheBigGrid() {
  const backgroundColor = '#151823'
  const [file,setFile] =useState()
  const [filepre,setFilepre] =useState()
  const [image,setImage]=useState([])
  const [inputs, setInputs] = useState({});

  useEffect(() =>{
    file && uploadFile(file,"file");
  },[file])


  const uploadFile = (file, fileType) => {
    const storage = getStorage(app);
    const folder = "images/"
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, folder + fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // setFilepre(Math.round(progress))
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            console.log(error);
            break;
          case "storage/canceled":
            // User canceled the upload
            break;
          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
          default:
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('DownloadURL - ', downloadURL);
          setInputs((prev) => {
            return {
              ...prev,
              [fileType]: downloadURL,
            };
          });
        });
      }
    );
  }
  // console.log({...inputs})
  

  useEffect(() => {
    axios.get('http://localhost:6969/api/fill')
    .then(res => setImage(res.data))
    .catch(err => console.log(err))
  }, [])

    console.log(image)
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = inputs.file;
      

      await axios.post(`http://localhost:6969/api/save`,{imgurl: data});
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };




  return (
    <div className="bg-black"  style={{ backgroundColor }}>
      <Navbar />
      <Banner />
      <form onSubmit={handleSubmit}>
        <input
            type="file"
            accept="image/*"
            id="img"
            onChange={(e) => setFile((prev) => e.target.files[0])}
          />
          <button type="submit">Upload</button>
      </form>
      <div className='mainContainer mt-40'>
      {
        image && image.map((img,id) => 
          
          <Cell key={id} id = {id} imgsrc={img?.imageurl} />
        )
      }
        
      </div>
    </div>
    
  )
}

export default TheBigGrid;