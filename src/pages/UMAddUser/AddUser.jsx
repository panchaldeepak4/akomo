import React,{ useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./styles.module.css"
import Search from '../../Components/Search/Search'
import { userRequest } from '../../Components/RequestMethod'
import { message } from 'antd'

const AddUser = () => {
  const navigate = useNavigate();

  const [firstName,setFirstName] = useState('');
  const [firstNameTouched,setFirstNameTouched] = useState(false);
  const [lastName,setLastName] = useState('');
  const [lastNameTouched,setLastNameTouched] = useState(false);
  const [phone,setPhone] = useState('');
  const [email,setEmail] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);


  ///////////////////////////////////////////////////////////////////////////////////
  const validateName = (name) => {
    const nameRegex = /^[A-Za-z]+$/;
    return nameRegex.test(name);
  };

  const phoneRegex = /^\d{10}$/; // Assuming you expect a 10-digit phone number
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
  
  if (!phoneRegex.test(phone) && phoneTouched) {
    setPhoneError('Invalid phone number');
  } else {
    setPhoneError('');
  }

  
  if (!emailRegex.test(email) && emailTouched) {
    setEmailError('Invalid email address');
  } else {
    setEmailError('');
  }
 }, [phone, email]);

 const handleFirstNameBlur = () => {
  setFirstNameTouched(true);
};
const handleLastNameBlur = () => {
  setLastNameTouched(true);
};
 const handlePhoneBlur = () => {
  setPhoneTouched(true);
};
const handleEmailBlur = () => {
  setEmailTouched(true);
};
//////////////////////////////////////////////////////////////////////////////////////////
let data = JSON.stringify({
  "fullName": firstName,
  "lastName": lastName,
  "phoneNumber": phone,
  "email": email
});

const addUser = async (e) => {
  if (
    !validateName(firstName) ||
    !validateName(lastName) ||
    !phoneRegex.test(phone) ||
    !emailRegex.test(email)
  ) {
    message.error("Please enter correct details");
    return;
  }else{
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
}};


  return (
    <>
     <div className={styles.addUser_right}>
      {/*<Search />                    Search as component used here  */}
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
          onChange={(e)=>setFirstName(e.target.value)} onBlur={handleFirstNameBlur}></input>
           {!validateName(firstName) && firstNameTouched &&(
                  <span className={styles.error_message}>First Name should contain only letters</span>
                )}
        </div>

        <div className={styles.form_element}>
          <label className={styles.form_label}>Last Name</label>
          <input type='text' className={styles.form_input} value={lastName} 
          onChange={(e)=>setLastName(e.target.value)} onBlur={handleLastNameBlur}></input>
           {!validateName(lastName) && lastNameTouched &&(
                  <span className={styles.error_message}>Last Name should contain only letters</span>
                )}
        </div>

        <div className={styles.form_element}>
          <label className={styles.form_label}>Phone Number</label>
          <input type='number' className={styles.form_input} value={phone}
          onChange={(e)=>setPhone(e.target.value)} onBlur={handlePhoneBlur}>
          </input>
          {phoneError && phoneTouched && <span className={styles.error_message}>{phoneError}</span>}
        </div>
        </div>

        <div className={styles.form_row2}>
        <div className={styles.form_element}>
          <label className={styles.form_label}>E-Mail</label>
          <input type='email' className={styles.form_input} value={email}
          onChange={(e)=>setEmail(e.target.value)} onBlur={handleEmailBlur}></input>
          {emailError && emailTouched && <span className={styles.error_message}>{emailError}</span>}
        </div>
        </div>

      </div>
      </div>
      

     </div>
    
    </>
  )
}

export default AddUser