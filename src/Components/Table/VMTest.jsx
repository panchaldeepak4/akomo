import React from 'react'
import { Table, Checkbox } from 'antd';
import { Link } from 'react-router-dom'

const VMTest = ({vuser1}) => {
   //console.log(vuser);
   
const columns = [

    { title: 'Video Thumbnail', dataIndex: 'column1', key: 'column1' },
    { title: 'User Name', dataIndex: 'column2', key: 'column2' },
    { title: 'Name', dataIndex: 'column3', key: 'column3' },
    { title: 'Email Id', dataIndex: 'column4', key: 'column4' },
    { title: 'Description', dataIndex: 'column5', key: 'column5' },
    { title: 'Place', dataIndex: 'column6', key: 'column6' },
    { title: 'Category', dataIndex: 'column7', key: 'column7' },
    { title: 'Tags', dataIndex: 'column8', key: 'column8' },
    { title: <div style={{ textAlign: 'center' }}>Actions</div>, dataIndex: 'column9', key: 'column9' },
    
  ];

  
  const data = vuser1.length > 0 ? (
    vuser1.map((vuserData) => ({
    
    key: vuserData._id,
    column1: <div style={{width:"5rem"}}><img src={vuserData.url} alt='missing' width='30'></img></div>,
    column2: <div style={{width:"5rem",fontSize:"0.75rem"}}>{vuserData.userId.userName}</div>,
    column3: <div style={{width:"2.5rem",fontSize:"0.75rem"}}>{vuserData.userId.fullName}</div>, // Ensure 'userData.email' exists before accessing
    column4: <div style={{width:"9rem",fontSize:"0.75rem"}}>{vuserData.userId.email}</div>,
    column5: <div style={{width:"5rem",fontSize:"0.75rem"}}>{vuserData.description}</div>,
    column6: <div style={{width:"2.5rem",fontSize:"0.75rem"}}>{vuserData.location}</div>,
    
    column7: <div style={{width:"3rem",fontSize:"0.75rem"}}>{vuserData.categoryId.categoryName}</div>,
    column8: <div style={{width:"2.5rem",fontSize:"0.75rem"}}>{vuserData.tags}</div>,
    column9: (<div style={{width:"9rem",display:"flex",gap:"0.45rem",lineHeight:"0.8rem",fontSize:"0.60rem"}}>
    <Link to='/userManagement/videos' style={{color:"#000000",borderBottom:"1px solid black"}}>Watch</Link>
    <Link to='/userManagement/uploadVideo' style={{color:"#000000",borderBottom:"1px solid black"}}>Delete</Link>
    <Link to='' style={{color:"#77e38d",borderBottom:"1px solid #77e38d"}} >Download Video</Link>
    </div>),
   
  }))
) : (           // If 'user' is empty, return an empty array to avoid errors
  []
);


  return (
    <>
    <Table columns={columns} dataSource={data} pagination={false}/>
    </>
  )
}

export default VMTest