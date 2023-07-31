import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Search from '../../Components/Search/Search'
import styles from './styles.module.css'
import UploadVido from '../../Components/Upload/UploadVido'
import UploadThumbnail from '../../Components/Upload/UploadThumbnail'
import DescriptionBox from '../../Components/DescriptionBox/Descriptionbox' 


const VMUploadVideo = () => {
    const navigate = useNavigate();

  return (
    <>
    
                           {/* Navbar as component used here  */}
     <div className={styles.vmuv_right}>
      <Search />                   {/* Search as component used here  */}

      <div className={styles.header}>
              <div className={styles.header_left}>
              Video Management &gt; upload video
              </div>

              <div className={styles.header_right}>
              <button id={styles.btn_back} onClick={()=>navigate('/videoManagement')}>Back</button>
              <button id={styles.btn_publish}>Publish</button>
              </div>
        </div>
         
        <div className={styles.uploadV_main}>
      <div className={styles.uploadV_body}> 
      
      
       <div className={styles.uploadV_video}>
      <UploadVido />
      <UploadThumbnail />
      
      </div>

       <DescriptionBox />

       <div className={styles.form_row1}>
       <div className={styles.form_element}>
          <label className={styles.form_label}>Places</label>
          <input type='text' className={styles.form_input} ></input>
        </div>

        <div className={styles.form_element}>
          <label className={styles.form_label}>Category</label>
          <input type='text' className={styles.form_input} ></input>
        </div>

        <div className={styles.form_element}>
          <label className={styles.form_label}>Tags</label>
          <input type='text' className={styles.form_input} ></input>
        </div>
        </div>

        

      </div>
      </div>


      
     </div>
    
    </>
  )
}

export default VMUploadVideo