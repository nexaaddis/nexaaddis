import React, { useState } from 'react';
import ContactLeft from './ContactLeft';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Please give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages have been sent Successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <section id="contact">
      <Box
        sx={{
          py: 10,
          borderBottom: '1px solid #000',
        }}
      >
        <Box textAlign="center">
          <Typography variant='h2' textAlign="center" mb={2}>
            CONTACT
          </Typography>
          <Typography variant='body2' textAlign="center" mb={2}>
            Contact With Me
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box
            display="flex"
            flexDirection={{ xs: 'column', lg: 'row' }}
            justifyContent="space-between"
            width="100%"
            mt={4}
          >
            <ContactLeft />
            <Paper
              sx={{
                width: '100%',
                lg: '60%',
                mt: { xs: 4, lg: 0 },
                p: 3,
                background: 'linear-gradient(45deg, #1e2024, #23272b)',
                boxShadow: 'inset 0 0 10px #000',
                color: '#fff',
              }}
            >
              <form onSubmit={handleSend}>
                {errMsg && (
                  <Typography color="error" textAlign="center" mb={2}>
                    {errMsg}
                  </Typography>
                )}
                {successMsg && (
                  <Typography color="success.main" textAlign="center" mb={2}>
                    {successMsg}
                  </Typography>
                )}
                <Box display="flex" flexDirection={{ xs: 'column', lg: 'row' }} gap={2}>
                  <TextField
                    label="Your Name"
                    variant="outlined"
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    error={errMsg === "Username is required!"}
                  />
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    error={errMsg === "Phone number is required!"}
                  />
                </Box>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={errMsg === "Please give your Email!"}
                  sx={{ mt: 2 }}
                />
                <TextField
                  label="Subject"
                  variant="outlined"
                  fullWidth
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  error={errMsg === "Please give your Subject!"}
                  sx={{ mt: 2 }}
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  error={errMsg === "Message is required!"}
                  sx={{ mt: 2 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 3,
                    background: '#141518',
                    color: 'gray',
                    '&:hover': {
                      color: '#fff',
                      borderColor: 'designColor',
                    },
                  }}
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Contact;
