import React,{ useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
import Navbar from '../../Components/Navbar/Navbar'
import Search from '../../Components/Search/Search'
import VMTest from '../../Components/Table/VMTest'
import { message } from 'antd'
import { userRequest } from '../../Components/RequestMethod'

const VideoManagement = () => {
    const navigate = useNavigate();

    const [vuser ,setVuser] = useState([]);
     //console.log(vuser)
    const fetchData = async (searchQuery) => {
      await userRequest.get('/admin/post/getAllPost?status&search=')
       .then((response) => {
         const result = response.data.data;
         setVuser(result);
       // message.success("data fetched successfully");
       })
 
       .catch((err) => {
         const errorMessage = err.response?.data?.message || "An error occurred";
         message.error(errorMessage);
       });
   };
 
   useEffect(()=>{
      fetchData(" ")
 },[]);
 //////////////////////////////////////////////////////////////////
 const [currentPage, setCurrentPage] = useState(1);

 const recordsPerPage = 3;
 const lastIndex = currentPage*recordsPerPage;
 const firstIndex = lastIndex - recordsPerPage;
 const vuser1 = vuser.slice(firstIndex, lastIndex);
 const npage = vuser? Math.ceil(vuser.length/recordsPerPage): 0;

 ////////////////////////////////////////////////////////////////////////////////
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
                    <VMTest vuser1={vuser1}/>       {/* VMTest Table as component used here*/}
                    </div>   
                </div>
            
            {npage > 1 ? (
               
               <div className={styles.footer}>
                   <div className={styles.userBtn}>
                     <button className={styles.userPrev} onClick={prePage}>Previous</button>
                     <button className={styles.userNext} onClick={nextPage}>Next</button>
                   </div>
   
                    <div className={styles.pagination}>{currentPage} of {npage}</div>
               </div> 
                ) : null
                } 


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
    if(currentPage !== npage){
        setCurrentPage(currentPage + 1);
    }
  }
}

export default VideoManagement