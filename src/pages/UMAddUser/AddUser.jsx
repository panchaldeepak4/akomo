import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./styles.module.css"
import Search from '../../Components/Search/Search'
import { userRequest } from '../../Components/RequestMethod'
import { message } from 'antd'

const AddUser = () => {
  const navigate = useNavigate();

  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [phone,setPhone] = useState('');
  const [email,setEmail] = useState('');

  let data = JSON.stringify({
    "fullName": firstName,
    "lastName": lastName,
    "phoneNumber": phone,
    "email": email
  });

  const addUser = async (e) => {
      //e.preventDefault();
   await userRequest.post("/admin/customer/createUser", data)
      .then(() => {
        message.success("Category added successfully");
        navigate('/userManagement');
      })
      .catch((err) => {
        const errorMessage = err.response?.data?.message || "An error occurred";
        message.error(errorMessage);
      });
  };


  return (
    <>
     <div className={styles.addUser_right}>
      <Search />                   {/* Search as component used here  */}
      <div className={styles.header}>
        <div className={styles.header_left}>
        <p id={styles.header_t1}>User Management &gt; Add User</p>
        <p id={styles.header_t2}>Add the following details to create user</p>
        </div>

        <div className={styles.header_right}>
          <button id={styles.btn_clear} onClick={() => navigate('/userManagement')}>Cancel</button>
          <button id={styles.btn_done} onClick={() =>addUser()}>Done</button>
        </div>
      </div>
      
      <div className={styles.form_main}>
      <div className={styles.form_body}> 

        <div className={styles.form_row1}>
        <div className={styles.form_element}>
          <label className={styles.form_label}>First Name</label>
          <input type='text' className={styles.form_input} value={firstName} 
          onChange={(e)=>setFirstName(e.target.value)}></input>
        </div>

        <div className={styles.form_element}>
          <label className={styles.form_label}>Last Name</label>
          <input type='text' className={styles.form_input} value={lastName} 
          onChange={(e)=>setLastName(e.target.value)}></input>
        </div>

        <div className={styles.form_element}>
          <label className={styles.form_label}>Phone Number</label>
          <input type='text' className={styles.form_input} value={phone}
          onChange={(e)=>setPhone(e.target.value)}></input>
        </div>
        </div>

        <div className={styles.form_row2}>
        <div className={styles.form_element}>
          <label className={styles.form_label}>E-Mail</label>
          <input type='text' className={styles.form_input} value={email}
          onChange={(e)=>setEmail(e.target.value)}></input>
        </div>
        </div>

      </div>
      </div>
      

     </div>
    
    </>
  )
}

export default AddUser