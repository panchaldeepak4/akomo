import React,{ useState } from 'react'
import styles from "./styles.module.css"
import ProfileModal from '../ProfileModal/ProfileModal'
import search from "../../Assets/Images/search.png"
import sort from "../../Assets/Images/sort.png"
import pushNotif from "../../Assets/Images/push-notifb.png"
import userMgmt from "../../Assets/Images/user-mgmtb.png"
import dropDown from "../../Assets/Images/ddgrey.png"
import questionCircle from "../../Assets/Images/question-circle.svg"
import userIcon from "../../Assets/Images/john-doe.svg"


const Search = () => {
  const[showProfile,setShowProfile] = useState(false);

  const droppDown = ()=>{  
    setShowProfile(true);
  }

  return (
    <>
    <div className={styles.search_container}>
      <div className={styles.header_bar}>
                <img src={search} alt='missing'></img>
                <input type='text' placeholder='search'></input>
                <img src={sort} alt='missing'></img>
            </div>

    <div className={styles.header_middle}>
    <img src={questionCircle} alt='missing'></img>
    <img src={pushNotif} alt='missing'></img>
    </div>

    <div className={styles.header_right}>
      <img src={userIcon}></img>
      <p>John Doe</p>
      <img src={dropDown} id={styles.pic_right} onClick={()=>droppDown()}></img>
      </div>        
        
      { showProfile && <ProfileModal setShowProfile={setShowProfile}/>}   

    </div>
    </>
  )
}

export default Search