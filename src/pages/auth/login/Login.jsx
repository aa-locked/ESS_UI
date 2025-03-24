import React from 'react'
import styles from "./Login.module.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
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
              <FaLock className={styles.i}/>
            </div>
            <div className={styles.forgot_link}>
              <a href='#'>Forget Password?</a>
            </div>
            <button type='submit' className={styles.btn}>Login</button>
            <p>Or login with social platform</p>
            <div className={styles.social_icon}>
              <a href='#'><FaGoogle /></a>
              <a href='#'><FaGoogle  /></a>
              <a href='#'><FaGoogle /></a>
              <a href='#'><FaGoogle /></a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
