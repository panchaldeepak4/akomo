import React from 'react'
import styles from "../Home/styles.module.css";
import { useNavigate } from 'react-router-dom';


const ForgotPassword = () => {

  const navigate = useNavigate();

  return (
    <>
    <div className={styles.home_main}>
      
      <div className={styles.home_sub}>
        
      <div className={styles.welcome_txt}>
      <img src='Images/logo.png'></img>
        <p id={styles.wel_txt1}>Forgot password?</p>
        <p className={styles.wel_txt2}>Lorem ipsum is simply dummy text of the</p>
        <p className={styles.wel_txt3}>Lorem ipsum has been the industry</p>
        <div className={styles.input}>
        <input type='email'  className={styles.input1} placeholder='Email'></input>
        {/* <input type='password' className={styles.input2} placeholder='Enter Password'></input> */}
        </div>
        {/* <p className={styles.forgot_p}>Forgot password?</p> */}

        <div className={styles.btn}>
        <button  onClick={()=>navigate('/confirmPassword')}>Continue</button>
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

export default ForgotPassword