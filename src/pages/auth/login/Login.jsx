import React, { useState } from 'react';
import styles from "./Login.module.css";
import { FaUser, FaLock, FaGoogle, FaEnvelope, FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

const Login = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className={styles.body}>
      <div className={`${styles.container} ${isActive ? styles.active : ''}`}>
        {/* Login Form */}
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
              <a href='#'><FaFacebookF /></a>
              <a href='#'><FaGithub /></a>
              <a href='#'><FaLinkedin /></a>
            </div>
          </form>
        </div>

        {/* Registration Form */}
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
              <a href='#'><FaFacebookF /></a>
              <a href='#'><FaGithub /></a>
              <a href='#'><FaLinkedin /></a>
            </div>
          </form>
        </div>

        {/* Toggle Panel */}
        <div className={styles.toggle_box}>
          <div className={`${styles.toggle_panel} ${styles.toggle_left}`}>
            <img src="/Bicpl_logo.png" alt="Logo" className={styles.logo} />
            <h1>Hello, Welcome</h1>

            <p>Don't have an account?</p>
            <button className={styles.btn} onClick={handleRegClick}>Register</button>
          </div>
          <div className={`${styles.toggle_panel} ${styles.toggle_right}`}>
            <img src="/Bicpl_logo.png" alt="Logo" className={styles.logo} />
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button className={styles.btn} onClick={handleLoginClick}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
