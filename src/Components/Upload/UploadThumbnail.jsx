import React from 'react'
import styles from './styles.module.css'
import addIcon from "../../Assets/Images/addicon.png"
import { message, Upload } from 'antd';

const { Dragger } = Upload;

// Helper function to encode credentials to Base64
const encodeCredentials = (username, password) => {
  const credentials = `${username}:${password}`;
  const encodedCredentials = btoa(credentials);
  return `Basic ${encodedCredentials}`;
};

const UploadThumbnail = ({thumbnailURL,setThumbnailURL}) => {

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
        //console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        setThumbnailURL(info.file.response.url)
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };


  return (
    <>
    <div  className={styles.Tupload}>
    <Dragger {...props}>
    {/* <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>  */}
      {thumbnailURL ? (
            <img className={styles.Tpic_icon} src={thumbnailURL} alt="Uploaded Image" />
          ) : (
    <p className="ant-upload-drag-icon">
      <img className={styles.Ticon} src={addIcon}></img>
      <p className="ant-upload-text"><span className={styles.text}>Choose/Upload thumbnail</span></p>
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

export default UploadThumbnail