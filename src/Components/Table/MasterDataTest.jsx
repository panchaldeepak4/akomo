import React,{ useState } from 'react'
import { Table, Checkbox } from 'antd';
import { Link } from 'react-router-dom'
import EditCategoryModal from '../EditCategoryModal/EditCategoryModal';
import { message } from 'antd';
import { userRequest } from '../RequestMethod';



const MasterDataTest = ({ user1,fetchData}) => {



///////////////////////////////////////////////////////////////////////////////////////////
const[showEditCategoryModal,setShowEditCategoryModal] = useState(false);
const [editingData, setEditingData] = useState('');
    
const editCategory = (userData)=>{
    setShowEditCategoryModal(true);
    setEditingData(userData);
  }
///////////////////////////////////////////////////////////////////////////////////////////



const deleteCategory = async (userData) => {
   
  await userRequest.put('/api/category/updateCategory',{categoryId:userData._id,deleted:true})
    .then(() => {
      message.success("Category deleted successfully"); 
      fetchData();
    })
    .catch((err) => {
      const errorMessage = err.response?.data?.message || "An error occurred";
      message.error(errorMessage);
    });
};


  ////////////////////////////////////////////////////////////////////////////////////////

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
  //   render: (record) => <Checkbox onChange={(e) => handleRowSelection(e, record.key)}
  //   checked={selectedRows.includes(record.key)}/>,
  // },
    { title: 'Category ID', dataIndex: 'column1', key: 'column1' },
    { title: 'Category name', dataIndex: 'column2', key: 'column2' },
    { title: 'Add date', dataIndex: 'column3', key: 'column3' },
    { title: 'Actions', dataIndex: 'column4', key: 'column4' },
    
  ];
 

  const data = user1.length > 0 ? (
    user1.map((userData) => ({
      key: userData._id,
      column1: userData._id,
      column2: userData.categoryName,
      column3: userData.createdAt, 
      column4:   (<div style={{display:"flex",alignItems:"center",gap:"0.5rem",lineHeight:"0.8rem",fontSize:"0.75rem"}}>
      <Link to='' style={{color:"#77e38d",borderBottom:"1px solid #77e38d"}}
      onClick={()=>editCategory(userData)}>Edit category name</Link>
      <p style={{color:"#D20815",borderBottom:"1px solid #D20815",cursor:"pointer" }}
      onClick={()=>deleteCategory(userData)}>Delete</p>
    </div>
  )
      
    }))
  ) : (           // If 'user' is empty, return an empty array to avoid errors
    []
  );

  
  return (
    <>
    <Table columns={columns} dataSource={data} pagination={false} />
    { showEditCategoryModal && <EditCategoryModal setShowEditCategoryModal={setShowEditCategoryModal} 
    editingData={editingData} fetchData={fetchData}/>} 
    
    </>
  )

}

export default MasterDataTest

