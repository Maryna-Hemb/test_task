import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import { Text } from './Button.styled';
import SignUp from 'components/signUp/SignUp';
import SignIn from 'components/signIn/SignIn';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  height: '100vh',
  left: '50%',
  transform: 'translate(-50%)',
  width: 424,
  bgcolor: '#1d283a',
};

export default function BasicModal({ text, onClick }) {
  const [open, setOpen] = React.useState(onClick);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div id="model">
      <Button
        onClick={handleOpen}
        variant="h6"
        style={{ background: '#539713', marginRight: 15 }}
      >
        <Text>{text}</Text>
      </Button>
      <Backdrop
        sx={{ background: '#F1F2F1', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={open}
        // onClick={handleClose}
      >
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {text === 'Sign Up' || text === 'Go to Sign up' ? (
              <SignUp />
            ) : (
              <SignIn />
            )}
          </Box>
        </Modal>
      </Backdrop>
    </div>
  );
}
