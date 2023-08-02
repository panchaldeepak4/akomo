import React,{ useEffect, useState } from 'react'
import styles from "./styles.module.css"
import { useNavigate } from 'react-router-dom'
import logo from '../../Assets/Images/logo.png'
import dashboardg from '../../Assets/Images/dashboardg.png'
import dashboardb from '../../Assets/Images/dashboardb.svg'
import userMgmtg from "../../Assets/Images/user-mgmtg.png"
import userMgmtb from "../../Assets/Images/user-mgmtb.png"
import masterData from "../../Assets/Images/masterdata.png"
import masterDatab from "../../Assets/Images/masterdatab.svg"
import videoMgmt from "../../Assets/Images/video-mgmtg.png"
import videoMgmtb from "../../Assets/Images/video-squareb.svg"
import pushNotifg from "../../Assets/Images/push-notifg.png"
import pushNotifb from "../../Assets/Images/push-notifb.png"
import block from "../../Assets/Images/block.png"
import blockb from "../../Assets/Images/blockb.svg"
import logout from "../../Assets/Images/logout.png"

const Navbar = () => {
    const [selectedButton, setSelectedButton] = useState('');
    

    const navigate = useNavigate();

    const handleButtonClick =(route)=>{
        // console.log('hhhhhhhhhhhhhh',route)
        navigate(route);
        setSelectedButton(route);
    }

    const handleLogout =()=>{
        localStorage.clear();
        navigate('/')
    }


  return (
    <>
    <div className={styles.navbar}>
            <div className={styles.user_logo}>
            <img src={logo} alt='missing'></img>
            </div>

            <div className={styles.user_icons}>
            <div className={selectedButton === '/dashboard' ? styles.user_dashSelected : styles.user_dash }>
            {selectedButton === '/dashboard' ? <img src={dashboardb} alt='missing'/> : <img src={dashboardg} alt='missing'/>}
                <p onClick={()=>handleButtonClick('/dashboard')}>Dashboard</p>
            </div>

            <div className={selectedButton === '/userManagement' ? styles.user_mngmtSelected : styles.user_mngmt }>
            {selectedButton === '/userManagement' ? <img src={userMgmtb} alt='missing'/> : <img src={userMgmtg} alt='missing'/>}
                <p onClick={()=>handleButtonClick('/userManagement')}>User Management</p>
            </div>

            <div className={selectedButton === '/masterData' ? styles.master_dataSelected : styles.master_data }>
            {selectedButton === '/masterData' ? <img src={masterDatab} alt='missing'/> : <img src={masterData} alt='missing'/>}
                {/* <img src={masterData} alt='missing'></img> */}
                <p onClick={()=>handleButtonClick('/masterData')}>Master Data</p>
            </div>

            <div className={selectedButton === '/videoManagement' ? styles.video_mngmtSelected : styles.video_mngmt }>
            {selectedButton === '/videoManagement' ? <img src={videoMgmtb} alt='missing'/> : <img src={videoMgmt} alt='missing'/>}
                {/* <img src={videoMgmt} alt='missing'></img> */}
                <p onClick={()=>handleButtonClick('/videoManagement')}>Video Management</p>
            </div>

            <div className={selectedButton === '/pushNotif' ? styles.push_notifSelected : styles.push_notif }>
            {selectedButton === '/pushNotif' ? <img src={pushNotifb} alt='missing'/> : <img src={pushNotifg} alt='missing'/>}
                <p onClick={()=>handleButtonClick('/pushNotif')}>Push Notifications</p>
            </div>

            <div className={selectedButton === '/blockReport' ? styles.block_reportSelected : styles.block_report}>
            {selectedButton === '/blockReport' ? <img src={blockb} alt='missing'/> : <img src={block} alt='missing'/>}
                {/* <img src={block} alt='missing'></img> */}
                <p onClick={()=>handleButtonClick('/blockReport')}>Block & Report</p>
            </div>
            </div>

            <div className={styles.logout}>
                <img src={logout} alt='missing' ></img>
                <p onClick={()=>handleLogout}> Log out</p>
            </div>


        </div>
    </>
  )
}

export default Navbar