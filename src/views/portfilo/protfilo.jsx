
import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, TextField, Box } from '@mui/material';
import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow,CForm } from '@coreui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const steps = ['Step 1: Basic Info', 'Step 2: Additional Info'];

const validationSchema = [
  Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required')
  }),
  Yup.object({
    additionalField: Yup.string().required('This field is required')
  })
];

const StepForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      additionalField: ''
    },
    validationSchema: validationSchema[activeStep],
    validateOnChange: true,
    onSubmit: (values) => {
      if (activeStep === steps.length - 1) {
        console.log('Form Submitted', values);
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }
  });

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <CForm onSubmit={formik.handleSubmit}>
        {activeStep === 0 && (
          <Box sx={{ mt: 2 }}>
            <TextField
              label="Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
              margin="normal"
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              label="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
              margin="normal"
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Box>
        )}
        {activeStep === 1 && (
          <Box sx={{ mt: 2 }}>
            <TextField
              label="Additional Field"
              name="additionalField"
              value={formik.values.additionalField}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              fullWidth
              margin="normal"
              error={formik.touched.additionalField && Boolean(formik.errors.additionalField)}
              helperText={formik.touched.additionalField && formik.errors.additionalField}
            />
          </Box>
        )}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
          </Button>
          <Button type="submit">
            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
          </Button>
        </Box>
      </CForm>
      {activeStep === steps.length && (
        <Typography sx={{ mt: 2, mb: 1 }}>
          All steps completed - you&apos;re finished
        </Typography>
      )}
    </Box>
  );
};

export default StepForm;
