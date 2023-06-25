import * as React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/auth/authOperations';
import {
  LinkTo,
  Logo,
  LogoSpan,
} from 'components/sharedLayot/SharedLayout.styled';
import { Container, Input } from './SignUp.styled';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SignIn from '../signIn/SignIn';

const initialValues = {
  username: '',
  displayName: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [toggleModal, setToggleModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {}, [toggleModal]);

  const onHomePage = () => {
    navigate('/Home');
  };

  const hendleSubmit = (values, { resetForm }) => {
    if (values.password === values.confirmPassword) {
      dispatch(
        register({
          username: values.username,
          displayName: values.displayName,
          password: values.password,
        })
      );
      resetForm();
    } else {
      return alert('Confirm Password is wrong');
    }
  };

  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return !toggleModal ? (
    <Container>
      <nav>
        <LinkTo to={'/home'}>
          <Logo>InCode</Logo> <br /> <LogoSpan>Finance</LogoSpan>
        </LinkTo>
      </nav>
      <h1>Sign Up</h1>
      <Formik initialValues={initialValues} onSubmit={hendleSubmit}>
        <Form style={{ width: '100%' }}>
          <label>
            <p>Full Name</p>
            <Input
              type="text"
              name="username"
              placeholder="Example Name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            <p>User Name</p>
            <Input
              type="text"
              name="displayName"
              placeholder="Example123"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <label>
            <p>Password</p>
            <div style={{ position: 'relative' }}>
              <Input
                type={showPassword ? 'password' : 'text'}
                name="password"
                placeholder="at least 8 symbols"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                sx={{
                  position: 'absolute',
                  top: '-50%',
                  right: '5%',
                }}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </div>
          </label>
          <label>
            <p>Confirm Password</p>
            <div style={{ position: 'relative' }}>
              <Input
                type={showPassword ? 'password' : 'text'}
                name="confirmPassword"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                sx={{
                  position: 'absolute',
                  top: '-50%',
                  right: '5%',
                }}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </div>
          </label>
          <br />

          <button type="submit" onClick={onHomePage}>
            Sign up
          </button>
        </Form>
      </Formik>
      <div>
        I have an account.{' '}
        <button onClick={() => setToggleModal(true)}>Go to Sign In</button>
      </div>
    </Container>
  ) : (
    <SignIn />
  );
};

export default SignUp;
