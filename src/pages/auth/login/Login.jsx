import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from "./Login.module.css";
import { FaUser, FaLock, FaGoogle, FaEnvelope, FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isActive, setIsActive] = useState(false);
  const [message, setMessage] = useState("");
  const [errmessage, seterrMessage] = useState([]);
  const nevigate = useNavigate();
  const handleRegClick = () => setIsActive(true);
  const handleLoginClick = () => {
    setIsActive(false);
    setMessage("");
    seterrMessage([]);
  };

  const loginValidationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required")
  });

  const registerValidationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required")
  });
  const onloginSUbmit = (values) => {
    let formData = {
      userName: values.username,
      password: values.password
    };
    axios.post("https://localhost:7032/api/auth/login", formData)
      .then(res => {
        console.log(res)
        localStorage.setItem("user", JSON.stringify(res.data))
        localStorage.setItem("token", JSON.stringify(res.data.accessToken))
        nevigate("/");
      })
      .catch(err => console.log(err))

  }
  const onRegSubmit = (values) => {
    let formData = {
      username: values.username,
      email: values.email,
      password: values.password
    };
    axios.post("https://localhost:7032/api/auth/register", formData)
      .then(res => {
        console.log(res);
        setMessage(res.data.message);
      })
      .catch(err => seterrMessage(err.response.data))

  }
  return (
    <div className={styles.body}>
      <div className={`${styles.container} ${isActive ? styles.active : ''}`}>
        {/* Login Form */}
        <div className={`${styles.formBox} ${styles.login}`}>
          <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={loginValidationSchema}
            onSubmit={(values) => onloginSUbmit(values)}
          >
            <Form>
              <h1>Login</h1>
              <div className={styles.input_box}>
                <Field type='text' name='username' placeholder='Username' required />
                <FaUser className={styles.i} />
              </div>
              <div className={styles.input_box}>
                <Field type='password' name='password' placeholder='Password' required />
                <FaLock className={styles.i} />
              </div>
              <div className={styles.forgot_link}><a href='#'>Forget Password?</a></div>
              <button type='submit' className={styles.btn}>Login</button>
              <p>Or login with social platform</p>
              <div className={styles.social_icons}>
                <a href='#'><FaGoogle /></a>
                <a href='#'><FaFacebookF /></a>
                <a href='#'><FaGithub /></a>
                <a href='#'><FaLinkedin /></a>
              </div>
            </Form>
          </Formik>
        </div>

        {/* Registration Form */}
        <div className={`${styles.formBox} ${styles.register}`}>
          <Formik
            initialValues={{ username: '', email: '', password: '' }}
            validationSchema={registerValidationSchema}
            onSubmit={(values, { resetForm }) => {
              onRegSubmit(values); resetForm();
            }}
          >
            <Form>
              <h1>Registration</h1>

              <div className={styles.input_box}>
                <Field type='text' name='username' placeholder='Username' required />
                <FaUser className={styles.i} />

              </div>
              <div className={styles.input_box}>
                <Field type='email' name='email' placeholder='Email' required />
                <FaEnvelope className={styles.i} />

              </div>
              <div className={styles.input_box}>
                <Field type='password' name='password' placeholder='Password' required />
                <FaLock className={styles.i} />

              </div>
              <div className={styles.error_box}>
              </div>
              <button type='submit' className={styles.btn}>Register</button>
              <p>Or register with social platform</p>
              {message && <p style={{ color: "green" }}>{message}</p>}
              {errmessage.length > 0 && (
                <>
                  {errmessage.map((err, index) => (
                    <span style={{ color: "red" ,fontSize:"12px"}} key={index}>{err.description}</span>
                  ))}
                </>
              )}  
              <div className={styles.social_icons}>
                <a href='#'><FaGoogle /></a>
                <a href='#'><FaFacebookF /></a>
                <a href='#'><FaGithub /></a>
                <a href='#'><FaLinkedin /></a>
              </div>
            </Form>
          </Formik>
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
