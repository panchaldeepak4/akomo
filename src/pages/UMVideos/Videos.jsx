import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./styles.module.css"
import Navbar from '../../Components/Navbar/Navbar'
import Search from '../../Components/Search/Search'
import Test from '../../Components/Table/Test'
import Ion from '../../Assets/Images/ion.jpg'




const Videos = () => {

  const navigate = useNavigate();

  return (
    <>
    
        <div className={styles.user_right}>

            <Search />                      {/* Search as component used here  */}

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
                <button onClick={()=>navigate('/userManagement/uploadVideo')}>Upload Videos</button>
              </div>
              </div>
            
            
            <div className={styles.mainbody}>
            <div className={styles.body}>
              
                <p className={styles.userInfoText}>User Info</p>
                <div className={styles.userInfo}>
                <div className={styles.userPhone}>
                  <p>Phone Number</p>
                  <p className={styles.userDet}>456789234</p>
                </div>
                <div className={styles.userEmail}>
                  <p>E-Mail</p>
                  <p className={styles.userDet}>info@company.com</p>
                </div>
                </div>
                <p className={styles.userVideoText}>Videos</p>

                <div className={styles.userTable}>
                  <Test />                                  {/* Table as component used here  */}
                </div>
                </div>

                 <div className={styles.userBtn}>
                  <button className={styles.userPrev}>Previous</button>
                  <button className={styles.userNext}>Next</button>
                 </div>

            
            
            </div>
        </div>
   
    </>
  )
}

export default Videos