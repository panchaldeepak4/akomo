import React,{ useState } from 'react'
import styles from "./styles.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { publicRequest, userRequest } from "../../Components/RequestMethod";
import { message } from "antd";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    let data = JSON.stringify({
      "email": username,
      "password": password
    });
  
    const handleLogin = async (e) => {
      e.preventDefault();
     await publicRequest.post("/admin/auth/login", data)
        .then((res) => {
          message.success("Logged In successfully");
          localStorage.setItem("token",JSON.stringify(res.data.token))
          navigate('/dashboard');
        })
        .catch((err) => {
          const errorMessage = err.response?.data?.message || "An error occurred";
          message.error(errorMessage);
        });
    };

  return (
    <>
    <div className={styles.home_main}>
        <div className={styles.home_sub}>
          <div className={styles.welcome_txt}>
            <img src="Images/logo.png"></img>
            <p id={styles.wel_txt1}>Welcome back</p>
            <p className={styles.wel_txt2}>
              Lorem ipsum is simply dummy text of the
            </p>
            <p className={styles.wel_txt3}>Lorem ipsum has been the industry</p>
            <div className={styles.input}>
              <input
                type="text"
                className={styles.input1}
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
              <input
                type="password"
                className={styles.input2}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
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