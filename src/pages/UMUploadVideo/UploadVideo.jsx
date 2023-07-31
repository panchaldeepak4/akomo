import React from 'react'
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom'
import Search from '../../Components/Search/Search'
import UploadVido from '../../Components/Upload/UploadVido'
import UploadThumbnail from '../../Components/Upload/UploadThumbnail'
import DescriptionBox from '../../Components/DescriptionBox/Descriptionbox'
import RadioButton from '../../Components/RadioButton/RadioButton'
import Ion from '../../Assets/Images/ion.jpg'

const UploadVideo = () => {

  const navigate = useNavigate();

  return (
    <>
     <div className={styles.uploadVideo_right}>
      <Search />                                      {/* Search as component used here  */}
      <div className={styles.header}>
              <div className={styles.header_left}>
              <div className={styles.profPic}>
              {/* <img src={Ion}></img> */}
              </div>
              <div className={styles.macintosh}>
              <p className={styles.macintosh1}>Macintosh</p>
              <p className={styles.macintosh2}>@Macintosh</p>
              </div>
              </div>

              <div className={styles.header_right}>
              <button id={styles.btn_clear} onClick={()=>navigate('/userManagement')}>Clear</button>
              <button id={styles.btn_publish}>Publish</button>
              </div>
        </div>
         
        <div className={styles.uploadV_main}>
      <div className={styles.uploadV_body}> 
      
      
       <div className={styles.uploadV_video}>
      <UploadVido />
      <UploadThumbnail />
      <RadioButton />
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

export default UploadVideo