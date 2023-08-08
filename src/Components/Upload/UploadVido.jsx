// import React, {useState,useEffect} from 'react'
// import styles from './styles.module.css'
// import { message, Upload } from 'antd';
// import addIcon from "../../Assets/Images/addicon.png"


// const { Dragger } = Upload;

// // Helper function to encode credentials to Base64
// const encodeCredentials = (username, password) => {
//   const credentials = `${username}:${password}`;
//   const encodedCredentials = btoa(credentials);
//   return `Basic ${encodedCredentials}`;
// };


// const Upload1 = ({videoURL,setVideoURL}) => {

//  const [isVideoUploaded, setIsVideoUploaded] = useState(false); 
//  const [fileList,setFileList] = useState([]);
//   //console.log(videoURL);
//   const props = {
//     name: 'file',
//     multiple: false,       // Allow only one file to be uploaded at a time
//     action: 'https://okomo.onrender.com/api/utils/uploadFile',    //It need to be changed with a valid backend api
//     headers:{
//       Authorization:encodeCredentials("OKOMO","QWERTYOKOMOPOIUTYMKOL")
//     },
   
    
//     beforeUpload(file){
//       if (file.type.includes('video')) {
//         console.log("video uploading");
//         setFileList((state)=>[...state,file])
//         return true; // Allow only video files
//       } else {
//         console.log("image uploading not required")
//         message.error('Please upload a video file');
//         return false; // Reject the file and don't add it to the fileList
//       }
//     },

//     onChange(info) {
     
//       const { status, type, originFileObj } = info.file;
 
//       if (status === 'done') {
//         console.log("inof",info)
//         info.fileList = fileList;
//           setVideoURL(info.file.response.url);
//           setIsVideoUploaded(true);
//           message.success(`${info.file.name} file uploaded successfully.`);
//         }    
//        else if (status === 'error') {
//         message.error(`${info.file.name} file upload failed.`);
//       }
//       // const updatedFileList = fileList.filter((file) => file.status !== 'error');
     
//     },
//     onDrop(e) {
//       console.log('Dropped files', e.dataTransfer.files);
//     },
//   };
//   // useEffect(()=>{
//   //   console.log("stater changedd to ",videoURL)
//   // },[videoURL])

//   return (
//     <>
//     <div  className={styles.Vupload}>
//     <Dragger {...props}>
//     {/* <p className="ant-upload-drag-icon">
//       <InboxOutlined />
//     </p> */}

//     {videoURL ? (
//             // <img className={styles.Vpic_icon} src={videoURL} alt="Uploaded Image" />
//             <video width="220" height="80" controls>
//        <source src={videoURL} type="video/mp4"></source>
//        </video>
//           ) : (
//     <p className="ant-upload-drag-icon">
//       <img className={styles.Vicon} src={addIcon}></img>
//       <p className="ant-upload-text"><span className={styles.text}>Choose/Upload video</span></p>
//     </p>)}

    
//     {/* <p className="ant-upload-hint">
//       Support for a single or bulk upload. Strictly prohibited from uploading company data or other
//       banned files.
//     </p> */}
//   </Dragger>
//   </div>

//     </>
//   )
// }

// export default Upload1



import React, { useState } from 'react';
import { message, Upload } from 'antd';
import addIcon from '../../Assets/Images/addicon.png';
import styles from './styles.module.css';

const { Dragger } = Upload;

const encodeCredentials = (username, password) => {
  const credentials = `${username}:${password}`;
  const encodedCredentials = btoa(credentials);
  return `Basic ${encodedCredentials}`;
};

const Upload1 = ({ videoURL, setVideoURL }) => {
  const [isVideoUploaded, setIsVideoUploaded] = useState(false);
  const [uploading, setUploading] = useState(false); 

  const props = {
    name: 'file',
    multiple: false,
    action: 'https://okomo.onrender.com/api/utils/uploadFile',
    headers: {
      Authorization: encodeCredentials('OKOMO', 'QWERTYOKOMOPOIUTYMKOL'),
    },
    // showUploadList: false,
    beforeUpload(file) {
      if (file.type.includes('video')) {
        console.log('file',file);
        return true; // Allow only video files
      } else if(file.type.includes('image')){
        console.log('image uploading not required');
        message.error('Please upload a video file');
        return false; // Reject the file and don't add it to the fileList
      }else {
        return false;
      }
    },
    onChange(info) {
      const { status } = info.file;
      if (status == 'uploading'){
        setUploading(true);
      }else if (status === 'done') {
        console.log('info', info);
        setVideoURL(info.file.response.url);
        setIsVideoUploaded(true);
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
      <div className={styles.Vupload}>
        <Dragger {...props} showUploadList={!!videoURL} loading={uploading}>
          {videoURL ? (
            <video width="220" height="80" controls>
              <source src={videoURL} type="video/mp4"></source>
            </video>
          ) : (
            <p className="ant-upload-drag-icon">
              <img className={styles.Vicon} src={addIcon} alt="Add Icon"></img>
              <p className="ant-upload-text">
                <span className={styles.text}>Choose/Upload video</span>
              </p>
            </p>
          )}
        </Dragger>
      </div>
    </>
  );
};

export default Upload1;
