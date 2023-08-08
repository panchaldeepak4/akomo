import React,{ useState } from 'react'
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
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [fileList, setFileList] = useState([]);


const props = {
    name: 'file',
    multiple: false,
    action: 'https://okomo.onrender.com/api/utils/uploadFile',    //It need to be changed with a valid backend api
    headers:{
      Authorization:encodeCredentials("OKOMO","QWERTYOKOMOPOIUTYMKOL")
    },
    fileList: fileList,
    
    beforeUpload(file) {
      if (file.type.includes('image/jpeg')) {
        // console.log('file',file);
        return true; // Allow only video files
      } else if(file.type.includes('video/mp4')){
        console.log('video uploading not required');
        message.error('Please upload a image file');
        // console.log('file',file);
      //   setFileList([]);
        return false; // Reject the file and don't add it to the fileList
      }else {
        return false;
      }
    },
    onChange(info) {
      const { status } = info.file;
      if (status === 'uploading') {
        //console.log(info.file, info.fileList);
        setFileList([info.file]);
      }
      if (status === 'done') {
        console.log('info', info);
        setThumbnailURL(info.file.response.url)
        setIsImageUploaded(true);
        message.success(`${info.file.name} file uploaded successfully.`);
        setFileList([]); 
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
        setFileList([]);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };


  return (
    <>
    <div  className={styles.Tupload}>
    <Dragger {...props} disabled={isImageUploaded}>
    
      {thumbnailURL ? (
            <img className={styles.Tpic_icon} src={thumbnailURL} alt="Uploaded Image" />
          ) : (
    <p className="ant-upload-drag-icon">
      <img className={styles.Ticon} src={addIcon}></img>
      <p className="ant-upload-text"><span className={styles.text}>Choose/Upload thumbnail</span></p>
    </p>)}


  </Dragger>
  </div>
    </>
  )
}

export default UploadThumbnail