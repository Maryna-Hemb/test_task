import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import { Text } from './Button.styled';
import SignUp from 'components/signUp/SignUp';
import SignIn from 'components/signIn/SignIn';

const style = {
  position: 'absolute',
  height: '100vh',
  left: '50%',
  transform: 'translate(-50%)',
  maxWidth: 424,
  bgcolor: '#1d283a',
};

export default function BasicModal({ text }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="h6"
        style={{ background: '#539713', marginRight: 15 }}
      >
        <Text>{text}</Text>
      </Button>
      <Backdrop
        sx={{ bgcolor: '#F1F2F1', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <Box sx={style}>{text === 'Sign Up' ? <SignUp /> : <SignIn />}</Box>
      </Backdrop>
    </div>
  );
}
