import React from 'react'
import styles from './styles.module.css'
import Navbar from '../../Components/Navbar/Navbar'


const Dashboard = () => {
  return (
    <>
    
                          {/* Navbar as component used here  */}
     <div className={styles.dash_right}>
       
      
      
      <div className={styles.dash_subContainer}>
        <div className={styles.dash_text}>
            <div className={styles.text_left}>Dashboard</div>
            <div className={styles.text_right}>
             <div>From</div>
             <div>To</div>
            </div>
        </div>


      </div>
     </div>
    </>
  )
}

export default Dashboard