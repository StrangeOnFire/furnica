import React from 'react'
import google from '../images/google.png'
import facebook from '../images/facebook.png'

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SignupForm() {
  

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  

  return (
    <>
      <div className='signup-form-parent'>
        <div className='signup-form'>
          <p className='signup-form-des'>Sign up and get a chance to win the giveaway of the week.</p>
          <h6>Join 1 million amazing subscribers.</h6>
          <input type='email' name='emailForSignUp' placeholder='Enter your email' />
          <button onClick={handleClick}>SUBMIT</button>
          <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Participation Success
              </Alert>
            </Snackbar>
          </Stack>
          <p className='signup-form-or'>-or Login with-</p>
          <div className='signup-form-button'>
            <button><img src={google} alt='logo' /> Goggle</button>
            <button><img src={facebook} alt='logo' /> Facebook</button>
          </div>
        </div>
      </div>
    </>
  )
}
