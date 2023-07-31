import React from 'react'
import styles from './styles.module.css'

const ProfileModal = ({setShowProfile}) => {
    
    const handleClick=()=>{
        setShowProfile(false);
    }

  return (
    <>
    <div className={styles.prof_container}> 
        <p>My Profile</p>
        <p>Change Password</p>
        <p onClick={()=>handleClick()}>Notifications</p>
    </div>
    </>
  )
}

export default ProfileModal
