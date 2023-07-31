import React from 'react'
import styles from './styles.module.css'
import { message, Upload } from 'antd';
import addIcon from "../../Assets/Images/addicon.png"


const { Dragger } = Upload;



const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',    //It need to be changed with a valid backend api
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

const Upload1 = () => {
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