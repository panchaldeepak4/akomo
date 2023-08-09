import React,{ useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./styles.module.css"
import Search from '../../Components/Search/Search'
import { Table, Checkbox } from 'antd';
import { Link } from 'react-router-dom'
import CustomToggleSwitch from '../../Components/ToggleButton/CustomToggleSwitch'
import { userRequest } from '../../Components/RequestMethod'
import { message } from "antd";
import EditUserModal from '../../Components/EditUserModal/EditUserModal';


const UserManagement = () => {

  const [user ,setUser] = useState([]);
  const [showEditUserModal, setShowEditUserModal] = useState(false);
  const [editingUserData, setEditingUserData] = useState();
    
  //console.log(user)

  const editUser=(userData)=>{
    setShowEditUserModal(true);
    setEditingUserData(userData);
  }
 //////////////////////////////////////////////////////////////
  
 const [currentPage, setCurrentPage] = useState(1);

 const recordsPerPage = 5;
 const lastIndex = currentPage*recordsPerPage;
 const firstIndex = lastIndex - recordsPerPage;
 const user1 = user.slice(firstIndex, lastIndex);
 const npage = user? Math.ceil(user.length/recordsPerPage): 0;

 
  /////////////////////////////////////applying filter
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    fetchData(e.target.value);
    
  };
  //////////////////////////////////////////////////////////////

  const fetchData = async (searchQuery) => {
     //await userRequest.get("/admin/customer/getAllUsers?page=1&limit=5&search")
     await userRequest.get(`/admin/customer/getAllUsers?page=1&limit=20&search=${searchQuery}`)
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
     fetchData(" ")
},[]);
///////////////////////////////////////////////////////////////////////////////////////

 const navigate = useNavigate();

  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = (checked) => {
    setSelectAll(checked);
    if (checked) {
      setSelectedRows(data.map((row) => row.key));
    } else {
      setSelectedRows([]);
    }
  };

  const handleRowSelection = (e, key) => {
    // console.log("ehjahga",e,key)
    if (e.target.checked) {
      setSelectedRows((prevSelectedRows) => [...prevSelectedRows, key]);
    } else {
      setSelectedRows((prevSelectedRows) =>
        prevSelectedRows.filter((rowKey) => rowKey !== key)
      );
    }
  };

    const columns = [
      // {
      //   title: <Checkbox onChange={(e) => handleSelectAll(e.target.checked)}
      //   checked={selectAll}/>,
      //   key: 'select',
      //   render: (record,index) => {
      //     return (
      //       <Checkbox onChange={(e) => handleRowSelection(e, record.key)}
      //     checked={selectedRows.includes(record.key)}/>
      //     )
      //   } ,
      // },
        { title: <div style={{lineHeight:"0.5rem"}}>User Name</div>, dataIndex: 'column1', key: 'column1' },
        { title: 'Name', dataIndex: 'column2', key:  'column2' },
        { title: 'Email Id', dataIndex: 'column3', key: 'column3' },
        { title: 'Public Post', dataIndex: 'column4', key: 'column4' },
        { title: 'Private Post', dataIndex: 'column5', key: 'column5' },
        { title: <div style={{ textAlign: 'center' }}>Actions</div>, dataIndex: 'column6', key: 'column6' },
        { title: 'Status', dataIndex: 'column7', key: 'column7' },
        
      ];
    
      //  const data = user1.length > 0 ? (
         const data = user1.length > 0 ? (
          user1.map((userData) => ({
          key: userData._id,
          column1: <div style={{width:"5rem"}}>{userData.userName}</div>,
          column2: <div style={{width:"5rem"}}>{userData.fullName}</div>,
          column3: <div style={{width:"10rem"}}>{userData.email}</div>, // Ensure 'userData.email' exists before accessing
          column4: <div style={{marginLeft:"1.5rem"}}>{userData.postCount}</div>,
          column5: 'Data 5',
          column6: (<div style={{display:"flex",gap:"0.35rem",lineHeight:"0.8rem",fontSize:"0.75rem"}}>
          <Link to='/userManagement/videos' style={{color:"#000000",borderBottom:"1px solid black"}}>View Detail</Link>
          <Link to='/userManagement/uploadVideo' style={{color:"#000000",borderBottom:"1px solid black"}}>Upload Video</Link>
          <Link to='' style={{color:"#77e38d",borderBottom:"1px solid #77e38d"}} 
          onClick={()=>editUser(userData)}>Edit</Link>
          </div>),
          column7: <CustomToggleSwitch userId={userData._id} />,
          // column6: <Link to={`/um/videos/${userData.id}`}>View Detail</Link>,
          //column7: <Link to={`/um/uploadVideo/${userData.id}`}>Upload Video</Link>,
         
        }))
      ) : (           // If 'user' is empty, return an empty array to avoid errors
        []
      );
  

  return (
    <>
      
        <div className={styles.um_right}>
            <Search searchText={searchText} handleSearch={handleSearch} />
            <div className={styles.header}>
                <p id={styles.um_text}>User Management</p>
                <div className={styles.btn}>
                    <button id={styles.records}>No of records<img src='Images/iconright.png' alt='missing'></img></button>
                    <button id={styles.filter}><img src='Images/filter.png' alt='missing'></img>Filter</button>
                    <button id={styles.addUser} onClick={() => navigate('/userManagement/addUser')}>Add User</button>
                </div>
            </div>
            
            <div className={styles.form_main}>
            <div className={styles.form_body}> 
            <div className={styles.tab}>
            <Table columns={columns} dataSource={data} pagination={false}/>
            {showEditUserModal && <EditUserModal setShowEditUserModal={setShowEditUserModal}
            editingUserData={editingUserData} fetchData={fetchData}/>}
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

export default UserManagement