import React from 'react'
import styles from './styles.module.css'

const ProfileModal = ({setShowProfile}) => {
    
    const handleClick=()=>{
        setShowProfile(false);
    }

  return (
    <>
    <div className={styles.prof_container}> 
        <p onClick={()=>handleClick()}>My Profile</p>
        <p onClick={()=>handleClick()}>Change Password</p>
        <p onClick={()=>handleClick()}>Notifications</p>
    </div>
    </>
  )
}

export default ProfileModal
