import React, { useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { MuiTelInput } from 'mui-tel-input';
import './contact.css';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  companyName: '',
  phone: '',
  projectDescription: '',
};

const ContactUsForm = () => {
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
    return Object.keys.formErrors === 0;
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
    <div className="contact-form-container" id='contact'>
      <Box sx={{ mb: 4, textAlign: { xs: "center", md: "left" } }}>
        <Typography
          variant="body1"
          fontWeight="bold"
          letterSpacing="1.5"
          textAlign="left"
          sx={{
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
            mb: '0.5rem',
            color: 'var(--primary-color)',
            textTransform: 'uppercase',
          }}
        >
          Reach out to us
        </Typography>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          align="left"
          sx={{ fontWeight: '800', color: '#1c2229' }}
        >
          Let's get in touch!
        </Typography>
      </Box>
      <Grid container spacing={3} component="form" onSubmit={handleSubmit}>
        <Grid item xs={12} md={6}>
          <TextField
            label="First Name"
            id="firstName"
            name="firstName"
            type="text"
            value={formValues.firstName}
            onChange={handleChange}
            required
            size="small"
            fullWidth
          />
          {formErrors.firstName && (
            <Alert className='p__error' severity="error">
              {formErrors.firstName}
            </Alert>
          )}
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="Last Name"
            id="lastName"
            name="lastName"
            type="text"
            value={formValues.lastName}
            onChange={handleChange}
            required
            size="small"
            fullWidth
          />
          {formErrors.lastName && (
            <Alert className='p__error' severity="error">
              {formErrors.lastName}
            </Alert>
          )}
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="Business Email"
            id="email"
            name="email"
            type="email"
            placeholder="example@gmail.com"
            value={formValues.email}
            onChange={handleChange}
            required
            size="small"
            fullWidth
          />
          {formErrors.email && (
            <Alert className='p__error' severity="error">
              {formErrors.email}
            </Alert>
          )}
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="Company Name"
            id="companyName"
            name="companyName"
            type="text"
            value={formValues.companyName}
            onChange={handleChange}
            size="small"
            fullWidth
          />
          {formErrors.companyName && (
            <Alert className='p__error' severity="error">
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
          />
          {formErrors.phone && (
            <Alert className='p__error' severity="error">
              {formErrors.phone}
            </Alert>
          )}
        </Grid>

        <Grid item xs={12}>
          <TextareaAutosize
            id="projectDescription"
            name="projectDescription"
            minRows={4}
            placeholder="Describe your project (optional)"
            className="textarea-autosize"
            value={formValues.projectDescription}
            onChange={(e) => setFormValues({ ...formValues, projectDescription: e.target.value })}
          />
        </Grid>

        <Grid item xs={12}>
          <button type="submit" className="submit-button">Submit</button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactUsForm;
