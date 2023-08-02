import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Checkbox } from 'antd';
import CustomToggleSwitch from '../ToggleButton/CustomToggleSwitch'


const Test = ({userPost1}) => {
//console.log(userPost1)
const columns = [
  // {
  //   title: <Checkbox />,
  //   key: 'select',
  //   render: () => <Checkbox />,
  // },
    { title: 'Video Thumbnail', dataIndex: 'column1', key: 'column1' },
    { title: 'Description', dataIndex: 'column2', key: 'column2' },
    { title: 'Place', dataIndex: 'column3', key: 'column3' },
    { title: 'Category', dataIndex: 'column4', key: 'column4' },
    { title: 'Tags', dataIndex: 'column5', key: 'column5' },
    { title: 'Actions', dataIndex: 'column6', key: 'column6' },
    { title: 'Status', dataIndex: 'column7', key: 'column7' },
  ];

  
  const data = userPost1.length > 0 ? (
    
    userPost1.map((postData)=>({
      key: postData._id,
      column1: (<div><img src={postData.url} alt='missing'/></div>),
      column2: (<div style={{width:"10rem"}}>{postData.description}</div>),
      column3: postData.location,
      column4: postData.categoryId.categoryName,
      column5: postData.tags,
      column6: (<div style={{display:"flex",gap:"0.5rem",lineHeight:"0.8rem",fontSize:"0.75rem"}}>
      <Link to='' style={{color:"#0C1C36",borderBottom:"1px solid #0C1C36"}}>Edit</Link>
      <Link to='' style={{color:"#0C1C36",borderBottom:"1px solid #0C1C36"}}>Delete</Link>
      <Link to='' style={{color:"#77e38d",borderBottom:"1px solid #77e38d"}}>View Detail</Link>
      </div>),
      column7: postData.status
      // column7: <CustomToggleSwitch />,
      // column7: <CustomToggleSwitch userId={userData._id} />,
    
    }))
    ) : (
      []
    );


  return (
    <>
     <Table columns={columns} dataSource={data} pagination={false}/>
    </>
  )
}

export default Test