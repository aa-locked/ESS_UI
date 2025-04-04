// src/components/Login.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { loginUser, registerUser } from '../../../redux/slices/authSlice';
import styles from './Login.module.css';
import { FaUser, FaLock, FaGoogle, FaEnvelope, FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, error, loading } = useSelector((state) => state.auth);

  const [isActive, setIsActive] = useState(false);

  const handleRegClick = () => setIsActive(true);
  const handleLoginClick = () => setIsActive(false);

  const loginValidationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const registerValidationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const onLoginSubmit = async  (values) => {
    const formData = { username: values.username, password: values.password };
    await dispatch(loginUser(formData)).unwrap(); // unwrap gives you the resolved value or throws an error
      navigate("/");
  };

  const onRegSubmit = (values, { resetForm }) => {
    const formData = { username: values.username, email: values.email, password: values.password };
    dispatch(registerUser(formData));
    resetForm();
  };

  if (loading) {
    // You can add a loading spinner or something to indicate loading
    return <div>Loading...</div>;
  } 

  return (
    <div className={styles.body}>
      <div className={`${styles.container} ${isActive ? styles.active : ''}`}>
        {/* Login Form */}
        <div className={`${styles.formBox} ${styles.login}`}>
          <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={loginValidationSchema}
            onSubmit={onLoginSubmit}
          >
            <Form>
              <h1>Login</h1>
              <div className={styles.input_box}>
                <Field type="text" name="username" placeholder="Username" required />
                <FaUser className={styles.i} />
              </div>
              <div className={styles.input_box}>
                <Field type="password" name="password" placeholder="Password" required />
                <FaLock className={styles.i} />
              </div>
              <div className={styles.forgot_link}>
                <a href="#">Forget Password?</a>
              </div>
              <button type="submit" className={styles.btn}>
                Login
              </button>
              <p>Or login with social platform</p>
              <div className={styles.social_icons}>
                <a href="#">
                  <FaGoogle />
                </a>
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaGithub />
                </a>
                <a href="#">
                  <FaLinkedin />
                </a>
              </div>
            </Form>
          </Formik>
        </div>

        {/* Registration Form */}
        <div className={`${styles.formBox} ${styles.register}`}>
          <Formik
            initialValues={{ username: '', email: '', password: '' }}
            validationSchema={registerValidationSchema}
            onSubmit={onRegSubmit}
          >
            <Form>
              <h1>Registration</h1>
              <div className={styles.input_box}>
                <Field type="text" name="username" placeholder="Username" required />
                <FaUser className={styles.i} />
              </div>
              <div className={styles.input_box}>
                <Field type="email" name="email" placeholder="Email" required />
                <FaEnvelope className={styles.i} />
              </div>
              <div className={styles.input_box}>
                <Field type="password" name="password" placeholder="Password" required />
                <FaLock className={styles.i} />
              </div>
              <button type="submit" className={styles.btn}>
                Register
              </button>
              <p>Or register with social platform</p>
              {message && <div style={{ color: 'green' }}>{message}</div>}
              {error && <p style={{ color: 'red' }}>{error.description}</p>}
              <div className={styles.social_icons}>
                <a href="#">
                  <FaGoogle />
                </a>
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaGithub />
                </a>
                <a href="#">
                  <FaLinkedin />
                </a>
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
            <button className={styles.btn} onClick={handleRegClick}>
              Register
            </button>
          </div>
          <div className={`${styles.toggle_panel} ${styles.toggle_right}`}>
            <img src="/Bicpl_logo.png" alt="Logo" className={styles.logo} />
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button className={styles.btn} onClick={handleLoginClick}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
