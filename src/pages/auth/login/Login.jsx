import React, { useEffect } from 'react'
import styles from "./Login.module.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Login = () => {
  useEffect(() => {
    const container = document.querySelector(`.${styles.container}`);
    const registerBtn = document.querySelector(`.${styles.register_btn}`);
    const loginBtn = document.querySelector(`.${styles.login_btn}`);
    registerBtn.addEventListener('click',()=>{
      container.classList.add('active');
    });
    loginBtn.addEventListener('click',()=>{
      container.classList.remove('active');
    });

  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={`${styles.formBox} ${styles.login}`}>
          <form action="">
            <h1>Login</h1>
            <div className={styles.input_box}>
              <input type='text' placeholder='Username' required />
              <FaUser className={styles.i} />
            </div>
            <div className={styles.input_box}>
              <input type='password' placeholder='Password' required />
              <FaLock className={styles.i} />
            </div>
            <div className={styles.forgot_link}>
              <a href='#'>Forget Password?</a>
            </div>
            <button type='submit' className={styles.btn}>Login</button>
            <p>Or login with social platform</p>
            <div className={styles.social_icons}>
              <a href='#'><FaGoogle /></a>
              <a href='#'><FaGoogle /></a>
              <a href='#'><FaGoogle /></a>
              <a href='#'><FaGoogle /></a>
            </div>
          </form>
        </div>

        <div className={`${styles.formBox} ${styles.register}`}>
          <form action="">
            <h1>Registration</h1>
            <div className={styles.input_box}>
              <input type='text' placeholder='Username' required />
              <FaUser className={styles.i} />
            </div>
            <div className={styles.input_box}>
              <input type='email' placeholder='Email' required />
              <FaEnvelope className={styles.i} />
            </div>
            <div className={styles.input_box}>
              <input type='password' placeholder='Password' required />
              <FaLock className={styles.i} />
            </div>
            <button type='submit' className={styles.btn}>Register</button>
            <p>Or register with social platform</p>
            <div className={styles.social_icons}>
              <a href='#'><FaGoogle /></a>
              <a href='#'><FaGoogle /></a>
              <a href='#'><FaGoogle /></a>
              <a href='#'><FaGoogle /></a>
            </div>
          </form>
        </div>
        <div className={styles.toggle_box}>
          <div className={`${styles.toggle_panel} ${styles.toggle_left}`}>
            <h1>Hello, Welcome</h1>
            <p>Don't have an account?</p>
            <button className={`${styles.btn} ${styles.register_btn}`}>Register</button>
          </div>
          <div className={`${styles.toggle_panel} ${styles.toggle_right}`}>
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button className={`${styles.btn} ${styles.login_btn}`}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
