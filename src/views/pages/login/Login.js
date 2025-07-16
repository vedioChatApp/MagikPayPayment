import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(`Login Success!\nEmail: ${values.email}\nPassword: ${values.password}`);
      navigate("/AdminDashboard");
    },
  });

  const styles = {
    body: {
      margin: 0,
      height: "100vh",
      background: "linear-gradient(to bottom, #000000, #000531)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
    },
    glassBox: {
      background: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      padding: "20px",
      borderRadius: "10px",
      position: "relative",
      width: "100%",
      maxWidth: "430px",
    },
    background: {
      width: "100%",
      height: "520px",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",
      zIndex: 0,
      pointerEvents: "none",
    },
    shape: {
      height: "200px",
      width: "200px",
      position: "absolute",
      borderRadius: "50%",
    },
    shape1: {
      background: "linear-gradient(#1845ad, #23a2f6)",
      left: "-80px",
      top: "-80px",
      opacity: 0.2,
    },
    shape2: {
      background: "linear-gradient(to right, #ff512f, #f09819)",
      right: "-30px",
      bottom: "-80px",
      opacity: 0.2,
    },
    form: {
      backgroundColor: "rgba(255,255,255,0.13)",
      borderRadius: "10px",
      backdropFilter: "blur(10px)",
      border: "2px solid rgba(255,255,255,0.1)",
      boxShadow: "0 0 40px rgba(8,7,16,0.6)",
      padding: "50px 35px",
      maxWidth: "400px",
      margin: "auto",
      boxSizing: "border-box",
    },
    formText: {
      fontSize: "25px",
      fontWeight: 500,
      lineHeight: "42px",
      textAlign: "center",
      color: "#ffffff",
      fontFamily: "'Poppins', sans-serif",
    },
    label: {
      display: "block",
      marginTop: "30px",
      fontSize: "16px",
      fontWeight: 500,
      color: "#ffffff",
    },
    input: (hasError) => ({
      display: "block",
      height: "50px",
      width: "100%",
      backgroundColor: "rgba(255,255,255,0.07)",
      borderRadius: "3px",
      padding: "0 10px",
      marginTop: "10px",
      fontSize: "14px",
      fontWeight: 300,
      color: "#ffffff",
      boxSizing: "border-box",
      border: `1px solid ${hasError ? "#ff4d4f" : "#ffffff"}`,
      outline: "none",
    }),
    error: {
      fontSize: "12px",
      color: "#ff8080",
      marginTop: "5px",
    },
    passwordContainer: {
      position: "relative",
    },
    eyeIcon: {
      position: "absolute",
      right: "15px",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
      color: "#ffffff",
      zIndex: 2,
    },
    button: {
      marginTop: "30px",
      width: "100%",
      backgroundColor: "#ffffff",
      color: "#080710",
      padding: "15px 0",
      fontSize: "18px",
      fontWeight: 600,
      borderRadius: "5px",
      cursor: "pointer",
      border: "none",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.glassBox}>
        <div style={styles.background}>
          <div style={{ ...styles.shape, ...styles.shape1 }}></div>
          <div style={{ ...styles.shape, ...styles.shape2 }}></div>
        </div>
        <form style={styles.form} onSubmit={formik.handleSubmit}>
          <h3 style={styles.formText}>Admin Panel</h3>

          <label htmlFor="email" style={styles.label}>
            Email or Phone
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email or Phone"
            style={styles.input(
              formik.errors.email &&
                (formik.touched.email || formik.submitCount > 0)
            )}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email &&
            (formik.touched.email || formik.submitCount > 0) && (
              <div style={styles.error}>{formik.errors.email}</div>
            )}

          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <div style={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              style={styles.input(
                formik.errors.password &&
                  (formik.touched.password || formik.submitCount > 0)
              )}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <span
              style={styles.eyeIcon}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {formik.errors.password &&
            (formik.touched.password || formik.submitCount > 0) && (
              <div style={styles.error}>{formik.errors.password}</div>
            )}

          <button type="submit" style={styles.button}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;