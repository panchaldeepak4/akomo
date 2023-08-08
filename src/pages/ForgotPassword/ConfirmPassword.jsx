import React,{ useState } from 'react'
import styles from "./styles.module.css";
import { useNavigate } from 'react-router-dom';
import { publicRequest, userRequest } from '../../Components/RequestMethod';
import { message } from 'antd';


const ForgotPassword2 = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  //console.log(newPassword)

  const navigate = useNavigate()

  const newData = JSON.stringify({
    "email" : localStorage.getItem("email"),
    "password" : confirmPassword
  });

  const updatePassword = async(e) =>{
    await publicRequest.put("/admin/auth/forgotPassword",newData)
    .then(()=>{
      message.success("Password updated successfully");
      navigate('/dashboard');
      localStorage.removeItem("email");
      window.location.reload();
    })
    .catch((err)=>{
      const errorMessage = err.response?.data?.message || "An error occured";
      message.error(errorMessage);
      // localStorage.removeItem("email")
    })
  }

  return (
    <>
    <div className={styles.home_main}>
      
      <div className={styles.home_sub}>
        
      <div className={styles.welcome_txt}>
      <img src='Images/logo.png'></img>
        <p id={styles.wel_txt1}>Forgot password?</p>
        <p className={styles.wel_txt2}>Lorem Ipsum is simply dummy text of the</p>
        <p className={styles.wel_txt3}>Lorem Ipsum has been the industry's</p>
        <div className={styles.input}>
        <input type='password'  className={styles.input1} placeholder='Set new password'
        value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}></input>
        <div className={styles.text}>Must be at least 8 characters</div>
        <input type='password' className={styles.input2} placeholder='Confirm password'
        value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}></input>
        </div>
        {/* <p className={styles.forgot_p}>Forgot password?</p> */}

        <div className={styles.btn}>
        <button onClick={updatePassword}>Confirm</button>
        </div>
      </div>

      <div className={styles.welcome_pic}>
        <p id={styles.welcome_pic_heading}>Welcome to OKOMO</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
        <p>veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea </p>
        <p>commodo consequat. Duis aute irure dolor in</p>
      </div>

      
      </div>
    </div>
    </>
  )
}

export default ForgotPassword2