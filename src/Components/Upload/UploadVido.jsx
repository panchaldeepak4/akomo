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




const Upload1 = ({setVideoURL}) => {
  
  const props = {
    name: 'file',
    multiple: true,
    action: 'https://okomo.onrender.com/api/utils/uploadFile',    //It need to be changed with a valid backend api
    headers:{
      Authorization:encodeCredentials("OKOMO","QWERTYOKOMOPOIUTYMKOL")
    },
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        setVideoURL(info.file.response.url)
        //console.log("completed hjfd",info.file.response.url);
        message.success(`${info.file.name} file uploaded successfully.`);
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
    <p className="ant-upload-drag-icon">
      <img className={styles.icon} src={addIcon}></img>
    </p>

    <p className="ant-upload-text"><span className={styles.text}>Choose/Upload video</span></p>
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