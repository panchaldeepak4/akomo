import React,{ useState } from 'react'
import { message, Upload ,Progress} from 'antd';
import addIcon from '../../Assets/Images/addicon.png';
import styles from './styles.module.css';

const { Dragger } = Upload;

const encodeCredentials = (username, password) => {
  const credentials = `${username}:${password}`;
  const encodedCredentials = btoa(credentials);
  return `Basic ${encodedCredentials}`;
};

const MyUploadVido = ({ videoURL, setVideoURL }) => {
    // const [videoURL, setVideoURL] = useState('');
    const [isVideoUploaded, setIsVideoUploaded] = useState(false);
    const [uploading, setUploading] = useState(false); 
    const [uploadPercent, setUploadPercent] = useState(0);
    const [fileList, setFileList] = useState([]);
    
  
    const props = {
      name: 'file',
      multiple: false,
      action: 'https://okomo.onrender.com/api/utils/uploadFile',
      headers: {
        Authorization: encodeCredentials('OKOMO', 'QWERTYOKOMOPOIUTYMKOL'),
      },
      fileList: fileList,
      showUploadList: {
        showPreviewIcon: true,
        showRemoveIcon: true,
      },
      
      
      beforeUpload(file) {
        if (file.type.includes('video/mp4')) {
          // console.log('file',file);
          return true; // Allow only video files
        } else if(file.type.includes('image/jpeg')){
          console.log('image uploading not required');
          message.error('Please upload a video file');
          // console.log('file',file);
          return false; // Reject the file and don't add it to the fileList
        }else {
          return false;
        }
      },
      onChange(info) {
        const { status,percent } = info.file;
        if (status === 'uploading'){
          setUploading(true);
          setUploadPercent(Math.floor(percent));
          setFileList([info.file]);
        //   console.log('video is uploading')
        }else if (status === 'done') {
          console.log('info', info);
          setVideoURL(info.file.response.url);
          setIsVideoUploaded(true);
          message.success(`${info.file.name} file uploaded successfully.`);
          setUploading(false);
          setFileList([]); 
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
          setFileList([]);
        }else if (status === 'removed') {
            setVideoURL('');
            setIsVideoUploaded(false);
            setUploading(false);
            setFileList([]);
          }
      },
      onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
      },
    };
    //showUploadList={!!videoURL}
    //disabled={isVideoUploaded}

  return (
    <>
    <div className={styles.Vupload} >
        <Dragger {...props} showUploadList={!!videoURL} disabled={isVideoUploaded}>
        
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
          {uploading && <Progress percent={uploadPercent} />}
        </Dragger>
      </div>
    </>
  )
}

export default MyUploadVido

