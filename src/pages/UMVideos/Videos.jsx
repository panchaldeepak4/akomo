import React,{ useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./styles.module.css"
import Search from '../../Components/Search/Search'
import Test from '../../Components/Table/Test'
import Ion from '../../Assets/Images/ion.jpg'
import { userRequest } from '../../Components/RequestMethod'
import { message } from 'antd'


const Videos = () => {
  const navigate = useNavigate();
  const [userPost ,setUserPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 3;
  const lastIndex = currentPage*recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const userPost1 = userPost.slice(firstIndex,lastIndex);
  const npage = userPost? Math.ceil(userPost.length/recordsPerPage) : 0;

  const fetchData = async () => {
    await userRequest.get("/admin/post/getAllPost?status&search=")
      .then((response) => {
        const result = response.data.data;
        setUserPost(result);
      // message.success("data fetched successfully");
      })

      .catch((err) => {
        const errorMessage = err.response?.data?.message || "An error occurred";
        message.error(errorMessage);
      });
  };

  useEffect(()=>{
    fetchData()
},[]);

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
                   <Test userPost1={ userPost1 }/>                             {/* Table as component used here  */}
                </div>
                </div>
                
                <div className={styles.footer}>
                 <div className={styles.userBtn}>
                  <button className={styles.userPrev} onClick={prePage}>Previous</button>
                  <button className={styles.userNext} onClick={nextPage}>Next</button>
                 </div>
                 <div className={styles.pagination}>{currentPage} of {npage}</div>
                 </div>
            
            </div>
        </div>
   
    </>
  )
  function prePage(){
    if(currentPage !== 1){
        setCurrentPage(currentPage - 1);
    }
  }

  function nextPage(){
    if(currentPage !== lastIndex){
        setCurrentPage(currentPage + 1);
    }
  }
}

export default Videos