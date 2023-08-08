import React,{ useState } from 'react';
import styles from './styles.module.css';
import { userRequest } from '../RequestMethod';
import { message } from 'antd';

const EditUserModal = ({setShowEditUserModal,editingUserData,fetchData}) => {
    

  const [firstName,setFirstName] = useState(editingUserData.fullName);
  const [lastName,setLastName] = useState(editingUserData.lastName);
  const [phone,setPhone] = useState(editingUserData.phoneNumber);
  const [email,setEmail] = useState(editingUserData.email);
  
  let newData = JSON.stringify({
    "userId": editingUserData._id,
    "fullName": firstName,
    "lastName": lastName,
    "phoneNumber": phone,
    "email": email
  });

  
  const updateUser = async(e) => {
    await userRequest.put("/admin/customer/updateUser",newData)
    .then(()=>{
        message.success("User updated successfully");
        setShowEditUserModal(false);
        // fetchData();
        window.location.reload();
    })
    .catch((err) => {
        const errorMessage = err.response?.data?.message || "An error occurred";
        message.error(errorMessage);
    })
  }

  return (
    <>
     <div className={styles.addUser_right}>
      
      <div className={styles.header}>
        <div className={styles.header_left}>
        <p id={styles.header_t1}>User Management &gt; Edit User</p>
        <p id={styles.header_t2}>Add the following details to create user</p>
        </div>

        <div className={styles.header_right}>
          <button id={styles.btn_cancel} onClick={() => setShowEditUserModal(false)}>Cancel</button>
          <button id={styles.btn_done} onClick={() => updateUser()}>Update</button>
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

export default EditUserModal