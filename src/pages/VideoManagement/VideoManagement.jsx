import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
import Navbar from '../../Components/Navbar/Navbar'
import Search from '../../Components/Search/Search'
import VMTest from '../../Components/Table/VMTest'

const VideoManagement = () => {
    const navigate = useNavigate();
  return (
    <>
    
     <div className={styles.vm_right}>
      <Search />                   {/* Search as component used here  */}


      <div className={styles.header}>
              <div className={styles.header_top}>
                <p className={styles.vm_txt}>Video Management</p>
                <div className={styles.btn}>
                <button onClick={()=>navigate('/videoManagement/uploadVideo')}>Upload Videos</button>
                </div>
              </div>

              <div className={styles.header_bottom}>
                <button id={styles.req_video}>Requested Video</button>
                <button>Accepted Video</button>
                <button>Rejected Videos</button>
              </div>
             
            </div>

            <div className={styles.body}>
                <p>Videos</p>
                <div className={styles.white_body}>
                    <div className={styles.table}>
                    <VMTest /> 
                    </div>   
                </div>
            </div>


      
     </div>
   
    </>
  )
}

export default VideoManagement