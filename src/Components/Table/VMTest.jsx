import React from 'react'
import { Table, Checkbox } from 'antd';
import { Link } from 'react-router-dom'

const columns = [
  {
    title: <Checkbox />,
    key: 'select',
    render: () => <Checkbox />,
  },
    { title: 'Video Thumbnail', dataIndex: 'column1', key: 'column1' },
    { title: 'User Name', dataIndex: 'column2', key: 'column2' },
    { title: 'Name', dataIndex: 'column3', key: 'column3' },
    { title: 'Email Id', dataIndex: 'column4', key: 'column4' },
    { title: 'Description', dataIndex: 'column5', key: 'column5' },
    { title: 'Place', dataIndex: 'column6', key: 'column6' },
    { title: 'Category', dataIndex: 'column7', key: 'column7' },
    { title: 'Tags', dataIndex: 'column8', key: 'column8' },
    { title: 'Actions', dataIndex: 'column9', key: 'column9' },
    { title: '', dataIndex: 'column10', key: 'column10' },
  ];

  const data = [
    {
      key: '1',
      column1: 'Data 1',
      column2: 'Data 2',
      column3: 'Data 3',
      column4: 'Data 4',
      column5: 'Data 5',
      column6: 'Data 6',
      column7: 'Data 7',
      column8: 'Data 8',
      column9: <Link to='/vm'>Watch</Link>,
      column10: <Link to='/vm'>Add</Link>,
    },
    // Add more data objects if you have multiple rows
  ];

const VMTest = () => {
  return (
    <>
    <Table columns={columns} dataSource={data} />;
    </>
  )
}

export default VMTest