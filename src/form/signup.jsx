import React from 'react';
import { CButton, CRow, CCol, CForm, CFormInput, CFormSelect, CFormCheck, CImage } from '@coreui/react';
import { bulb } from 'pic/pic'; // Adjust the import according to your project structure
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Ambaniphot } from 'Photo/Photo';
const Signup = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = React.useState(true);

  const formik = useFormik({
    initialValues: {
      branch: '',
      email: '',
      password: '',
      keepMeLoggedIn: false,
      
    },
    validationSchema: Yup.object({
      branch: Yup.string().required('Branch is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    }),
    onSubmit: (values) => {
      if (isSignup) {
        // Fetch existing users from localStorage
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the email already exists
        const userExists = existingUsers.find(user => user.email === values.email);
        if (userExists) {
          alert('User already exists with this email');
          return;
        }

        // Add the new user to the users array
        const updatedUsers = [...existingUsers, values];

        // Save the updated users array to localStorage
        localStorage.setItem('users', JSON.stringify(updatedUsers));

        // Simulate form submission
        console.log('User signed up:', values);
        alert('User signed up successfully');

        // Navigate to another component after successful signup
        navigate('/dashboard');
      } else {
        // Fetch existing users from localStorage
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the entered credentials match any user
        const user = existingUsers.find(user =>
          user.email === values.email &&
          user.password === values.password &&
          user.branch === values.branch
        );

        if (user) {
          // Simulate successful login
          console.log('User logged in:', values);
          alert('Login successful');

          // Navigate to another component after successful login
          navigate('/dashboard');
        } else {
          alert('Invalid credentials');
        }
      }
    },
  });

  return (
    <div>
      <CRow>
        <CCol style={{ marginLeft: "220px", marginTop: "60px" }}>
          <CForm onSubmit={formik.handleSubmit}>
            <h1>{isSignup ? 'Branch Signup' : 'Branch Login'}</h1>
            <h6>{isSignup ? 'Enter your details to sign up!' : 'Enter your email and password to login!'}</h6>
            <hr />
            <CCol md={6} className='mt-4'>
              <CFormSelect
                id="branch"
                name="branch"
                value={formik.values.branch}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                invalid={formik.touched.branch && !!formik.errors.branch}
              >
                <option value="">Select your branch...</option>
                <option value="Indore">Indore</option>
                <option value="Bhopal">Bhopal</option>
                <option value="Balaghat">Balaghat</option>
              </CFormSelect>
              {formik.touched.branch && formik.errors.branch ? (
                <div className="error">{formik.errors.branch}</div>
              ) : null}
            </CCol>
            <CCol md={6} className='mt-4'>
              <CFormInput
                type="email"
                id="email"
                name="email"
                label="Email"
                placeholder="name@example.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                invalid={formik.touched.email && !!formik.errors.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </CCol>
            <CCol md={6} className='mt-3'>
              <CFormInput
                type="password"
                id="password"
                name="password"
                label="Password"
                placeholder="Enter password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                invalid={formik.touched.password && !!formik.errors.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
            </CCol>
            <CCol className='mt-3'>
              <CFormCheck
                id="keepMeLoggedIn"
                name="keepMeLoggedIn"
                label="Keep me logged in!"
                checked={formik.values.keepMeLoggedIn}
                onChange={formik.handleChange}
              />
            </CCol>
            <CCol className='mt-3'>
              <CButton type="submit" color="primary">{isSignup ? 'Sign Up' : 'Login'}</CButton>
            </CCol>
            <CCol className='mt-3'>
              <CButton
                type="button"
                color="link"
                onClick={() => setIsSignup(!isSignup)}
              >
                {isSignup ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}
              </CButton>
            </CCol>
          </CForm>
        </CCol>
        <CCol style={{ background: "cornflowerblue", height: "100vh", borderRadius: "1px 0px 0px 121px" }}>
          <CImage
            src={bulb}
            height={140}
            width={140}
            style={{ marginTop: "170px", marginLeft: "170px" }}
          />
          <h1 style={{ color: 'white', marginLeft: "121px", marginTop: '19px' }}>NEABILLING</h1>
        </CCol>
      </CRow>
    </div>
  );
};

export default Signup;

