import React, {useState,useEffect} from 'react'
import styles from './styles.module.css'
import { message, Upload } from 'antd';
import addIcon from "../../Assets/Images/addicon.png"


const { Dragger } = Upload;

// Helper function to encode credentials to Base64
const encodeCredentials = (username, password) => {
  const credentials = `${username}:${password}`;
  const encodedCredentials = btoa(credentials);
  return `Basic ${encodedCredentials}`;
};


const Upload1 = ({videoURL,setVideoURL}) => {
 
  //console.log(videoURL);
  const props = {
    name: 'file',
    multiple: false,       // Allow only one file to be uploaded at a time
    action: 'https://okomo.onrender.com/api/utils/uploadFile',    //It need to be changed with a valid backend api
    headers:{
      Authorization:encodeCredentials("OKOMO","QWERTYOKOMOPOIUTYMKOL")
    },
    
    

    onChange(info) {
      const { status, type, originFileObj } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        if(type.includes('image')){
          // setImageURL(info.file.response.url);
          message.error("Please upload video")
        }else if(type.includes('video') && originFileObj instanceof File){
          setVideoURL(info.file.response.url);
          message.success(`${info.file.name} file uploaded successfully.`);
        }
        //console.log("completed hjfd",info.file.response.url);
        
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  // useEffect(()=>{
  //   console.log("stater changedd to ",videoURL)
  // },[videoURL])

  return (
    <>
    <div  className={styles.Vupload}>
    <Dragger {...props}>
    {/* <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p> */}

    {videoURL ? (
            // <img className={styles.Vpic_icon} src={videoURL} alt="Uploaded Image" />
            <video width="220" height="80" controls>
       <source src={videoURL} type="video/mp4"></source>
       </video>
          ) : (
    <p className="ant-upload-drag-icon">
      <img className={styles.Vicon} src={addIcon}></img>
      <p className="ant-upload-text"><span className={styles.text}>Choose/Upload video</span></p>
    </p>)}

    
    {/* <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibited from uploading company data or other
      banned files.
    </p> */}
  </Dragger>
  </div>

    </>
  )
}

export default Upload1