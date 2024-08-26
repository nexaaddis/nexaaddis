import React, { useState } from 'react';
import { Grid, Typography, Box, Container, TextField, Alert, Button } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { MuiTelInput } from 'mui-tel-input';
import './contact.css';

import { contactBg2 } from '../../assets';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  companyName: '',
  phone: '',
  projectDescription: '',
};

const ContactUsSection = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const internationalPhoneRegex = /^\+2519\d{8}$/;

    if (!values.firstName) {
      errors.firstName = 'First name is required!';
    }
    if (!values.lastName) {
      errors.lastName = 'Last name is required!';
    }
    if (!values.companyName) {
      errors.companyName = 'Company name is required!';
    }
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!emailRegex.test(values.email)) {
      errors.email = 'Invalid email format!';
    }
    if (!values.phone) {
      errors.phone = 'Phone number is required!';
    } else if (!internationalPhoneRegex.test(values.phone)) {
      errors.phone = 'Invalid phone number format (+251)';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    if (formErrors[name]) formErrors[name] = '';
  };

  const handlePhoneChange = (value) => {
    const sanitizedValue = value.replace(/\s+/g, '');
    setFormValues({ ...formValues, phone: sanitizedValue });
    if (formErrors.phone) formErrors.phone = '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate(formValues);
    if (isValid) {
      console.log("Form submitted successfully", formValues);
    } else {
      console.log("Validation failed", formErrors);
    }
  };

  return (
    <Box id="contact" sx={{ backgroundColor: '#fff', p: "8rem 0", position: 'relative' }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={12}>
            {/* Left Image Section */}
            <Box
              position="absolute"
              top="20%"
              right="45%"
              component="img"
              src={contactBg2}
              alt="Contact Us"
              sx={{
                width: '30%',
                height: 'auto',
                display: { xs: 'none', md: 'block' },
                filter: 'grayscale(100%)',
              }}
            />
            <Box sx={{ textAlign: { xs: 'center', md: 'left' }, mb: 4 }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: '700', color: '#666' }}
              >
                REACH OUT TO US
              </Typography>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{ fontWeight: '800', color: '#1c2229' }}
              >
                Let's get <span style={{ color: '#fb8122' }}>in touch!</span>
              </Typography>
            </Box>
            <Grid container spacing={3} component="form" onSubmit={handleSubmit}>
              <Grid item xs={12}>
                <TextField
                  label="First Name"
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formValues.firstName}
                  onChange={handleChange}
                  size="small"
                  fullWidth
                  InputLabelProps={{ sx: { color: '#3a3f45' } }}
                  InputProps={{
                    sx: {
                      '&::placeholder': { color: '#a0a0a0' },
                      '&.Mui-focused fieldset': { borderColor: '#fb8122' },
                    },
                  }}
                />
                {formErrors.firstName && (
                  <Alert severity="error" sx={{ mt: 1, p: 0, backgroundColor: 'transparent', color: '#f44336' }}>
                    {formErrors.firstName}
                  </Alert>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Last Name"
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formValues.lastName}
                  onChange={handleChange}
                  size="small"
                  fullWidth
                  InputLabelProps={{ sx: { color: '#3a3f45' } }}
                  InputProps={{
                    sx: {
                      '&::placeholder': { color: '#a0a0a0' },
                      '&.Mui-focused fieldset': { borderColor: '#fb8122' },
                    },
                  }}
                />
                {formErrors.lastName && (
                  <Alert severity="error" sx={{ mt: 1, p: 0, backgroundColor: 'transparent', color: '#f44336' }}>
                    {formErrors.lastName}
                  </Alert>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Business Email"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  value={formValues.email}
                  onChange={handleChange}
                  size="small"
                  fullWidth
                  InputLabelProps={{ sx: { color: '#3a3f45' } }}
                  InputProps={{
                    sx: {
                      '&::placeholder': { color: '#a0a0a0' },
                      '&.Mui-focused fieldset': { borderColor: '#fb8122' },
                    },
                  }}
                />
                {formErrors.email && (
                  <Alert severity="error" sx={{ mt: 1, p: 0, backgroundColor: 'transparent', color: '#f44336' }}>
                    {formErrors.email}
                  </Alert>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Company Name"
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={formValues.companyName}
                  onChange={handleChange}
                  size="small"
                  fullWidth
                  InputLabelProps={{ sx: { color: '#3a3f45' } }}
                  InputProps={{
                    sx: {
                      '&::placeholder': { color: '#a0a0a0' },
                      '&.Mui-focused fieldset': { borderColor: '#fb8122' },
                    },
                  }}
                />
                {formErrors.companyName && (
                  <Alert severity="error" sx={{ mt: 1, p: 0, backgroundColor: 'transparent', color: '#f44336' }}>
                    {formErrors.companyName}
                  </Alert>
                )}
              </Grid>

              <Grid item xs={12}>
                <MuiTelInput
                  label="Phone Number"
                  id="phone"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formValues.phone}
                  onChange={handlePhoneChange}
                  defaultCountry="ET"
                  InputProps={{
                    sx: {
                      '&::placeholder': { color: '#a0a0a0' },
                      '& .MuiTextField-root': {
                        '& fieldset': {
                          borderColor: formErrors.phone ? '#f44336 !important' : 'default',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: formErrors.phone ? '#f44336' : '#fb8122',
                        },
                      },
                    },
                  }}
                  fullWidth
                />
                {formErrors.phone && (
                  <Alert severity="error" sx={{ mt: 1, p: 0, backgroundColor: 'transparent', color: '#f44336' }}>
                    {formErrors.phone}
                  </Alert>
                )}
              </Grid>


              <Grid item xs={12}>
                <TextareaAutosize
                  id="projectDescription"
                  name="projectDescription"
                  minRows={4}
                  placeholder="Describe your project..."
                  className="textarea-autosize"
                  value={formValues.projectDescription}
                  onChange={(e) => setFormValues({ ...formValues, projectDescription: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '4px',
                    borderColor: '#c4c4c4',
                    outlineColor: '#fb8122',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '14px',
                  }}
                />
              </Grid>

              <Grid item xs={12} textAlign="left">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 2,
                    py: 1,
                    px: 4,
                    backgroundColor: '#fb8122',
                    '&:hover': { backgroundColor: '#f77b2e' },
                    borderRadius: '25px',
                    textTransform: 'none',
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUsSection;
