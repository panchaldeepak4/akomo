import React,{ useState,useEffect } from 'react'
import styles from "./styles.module.css"
import Search from '../../Components/Search/Search'
import MasterDataTest from '../../Components/Table/MasterDataTest'
import Modal from '../../Components/Modal/Modal'
import { userRequest } from '../../Components/RequestMethod';
import { message } from "antd";

const MasterData = () => {

    const [user ,setUser] = useState([]);
    const[showAddCategoryModal,setShowAddCategoryModal] = useState(false);
    
    const [currentPage ,setCurrentPage] = useState(1);
    
    const recordsPerPage = 4;
    const lastIndex = currentPage*recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
  
    const user1 = user.slice(firstIndex, lastIndex);
    const npage = user? Math.ceil(user.length/recordsPerPage) : 0;
    // const numbers = [...Array(npage + 1).key()].slice(1)
  
  
    const fetchData = async () => {
      await userRequest.get("/api/category/getAllCategory?page=1&limit=10&search")
        .then((response) => {
          const result = response.data.data;
          setUser(result);
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
   
    const addCategory = ()=>{
        setShowAddCategoryModal(true);
      }

  return (
    <>                  
     <div className={styles.masterData_right}>
      <Search />                   {/* Search as component used here  */}
      <div className={styles.header}>
              <div className={styles.header_left}>
              Master Data 
              <p>Category</p>
              </div>

              <div className={styles.header_right}>
                <button  onClick={()=>addCategory()}>+ Add Category</button>
              </div>
            </div>

            { showAddCategoryModal && <Modal setShowAddCategoryModal={setShowAddCategoryModal}
            fetchData={fetchData}/>} 
        

            <div className={styles.body}>
                <p>Videos</p>                     {/* Videos is hidden here  */}  
                <div className={styles.white_body}>
                    <div className={styles.table}>
                      <MasterDataTest  user1={user1} fetchData={fetchData}/>        {/*   Table as component used here */}
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

export default MasterData