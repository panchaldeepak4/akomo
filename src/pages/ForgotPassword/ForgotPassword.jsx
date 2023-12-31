import React,{useState,useEffect} from 'react'
import styles from "../Home/styles.module.css";
import { useNavigate } from 'react-router-dom';
import { message } from "antd";


const ForgotPassword = () => {
  const [email,setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isTouchedEmail, setIsTouchedEmail] = useState(false);

  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsTouchedEmail(true);
  }

  const handleContinue =()=>{
    if (!email) {
      message.error("Please enter your registered email");
      return; // Stop execution
    }
    if(!emailError){
    navigate('/confirmPassword')
    }
  }

  useEffect(() => {
    if (isTouchedEmail) {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }}
  }, [email,isTouchedEmail]);


  useEffect(()=>{
    localStorage.setItem("email",email)
  },[email])
  

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
        <div className={styles.envelope}>
              <img src="Images/envelope.png" style={{width:"0.85rem",marginRight:"1rem",marginBottom:"1rem"}} ></img>
        <input type='email'  className={styles.input1} placeholder='Email'
        value={email} onChange={(e)=>handleEmailChange(e)}></input>
        </div>
        {emailError && <div className={styles.mail_error}>{emailError}</div>}

        {/* <input type='password' className={styles.input2} placeholder='Enter Password'></input> */}
        </div>
        {/* <p className={styles.forgot_p}>Forgot password?</p> */}

        <div className={styles.btn}>
        <button  onClick={handleContinue}>Continue</button>
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