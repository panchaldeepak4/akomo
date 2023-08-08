import React,{ useState, useEffect } from 'react'
import styles from "./styles.module.css";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { publicRequest, userRequest } from "../../Components/RequestMethod";
import { message } from "antd";

const Login = () => {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isTouchedEmail, setIsTouchedEmail] = useState(false);
    const [isTouchedPassword, setIsTouchedPassword] = useState(false);
  
    let data = JSON.stringify({
      "email": email,
      "password": password
    });
  
    const handleLogin = async (e) => {

      if (!email.trim() || !password.trim()) {
        setEmailError(!email.trim() ? 'Please enter your email.' : '');
        setPasswordError(!password.trim() ? 'Please enter your password.' : '');
        return; // Return early to avoid making the API call
      }else if(!emailError && !passwordError){
       
     await publicRequest.post("/admin/auth/login", data)
        .then((res) => {
          message.success("Logged In successfully");
          localStorage.setItem("token",JSON.stringify(res.data.token))
          navigate('/dashboard');
          window.location.reload()
        })
        .catch((err) => {
          const errorMessage = err.response?.data?.message || "An error occurred";
          message.error(errorMessage);
        });
      }
    };

    useEffect(() => {
      if (isTouchedEmail) {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        setEmailError('Invalid email address');
      } else {
        setEmailError('');
      }}
      
       else if(isTouchedPassword){
      if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/.test(password)) {
        setPasswordError('Password should be at least 8 characters long.');
      } else {
        setPasswordError('');
      }}
    }, [email,password,isTouchedEmail,isTouchedPassword]);

  return (
    <>
    <div className={styles.home_main}>
        <div className={styles.home_sub}>
          <div className={styles.welcome_txt}>
            <img src="Images/logo.png"></img>
            <p id={styles.wel_txt1}>Welcome back</p>
            <p className={styles.wel_txt2}>
              Lorem Ipsum is simply dummy text of the
            </p>
            <p className={styles.wel_txt3}>Lorem Ipsum has been the industry's</p>
            <div className={styles.input}>
              <div className={styles.envelope}>
              <img src="Images/envelope.png" style={{width:"0.85rem",marginRight:"1rem",marginBottom:"1rem"}} ></img>
              <input
                type="email"
                className={styles.input1}
                placeholder="Email"
                value={email}
                onChange={(e) => {setEmail(e.target.value);
                  setIsTouchedEmail(true); }}

              ></input>
              </div>
              {emailError && <div className={styles.mail_error}>{emailError}</div>}

              <input
                type="password"
                className={styles.input2}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => {setPassword(e.target.value);
                  setIsTouchedPassword(true); }}
              ></input>
              {passwordError && <div className={styles.pass_error}>{passwordError}</div>}
            </div>
            <p className={styles.forgot_p} onClick={()=>navigate('/forgotPassword')}>Forgot password?</p>

            <div className={styles.btn}>
              <button onClick={handleLogin}>Login</button>
            </div>
          </div>

          <div className={styles.welcome_pic}>
            <p id={styles.welcome_pic_heading}>Welcome to OKOMO</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
            <p>
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim{" "}
            </p>
            <p>
              veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip
              ex ea{" "}
            </p>
            <p>commodo consequat. Duis aute irure dolor in</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login