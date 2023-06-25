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
import { Container, Input } from '../signUp/SignUp.styled';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SignUp from '../signUp/SignUp';

const initialValues = {
  displayName: '',
  password: '',
};

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [toggleModal, setToggleModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onHomePage = () => {
    navigate('/Home');
  };
  const hendleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        username: values.username,
        displayName: values.displayName,
        password: values.password,
      })
    );
    resetForm();
  };

  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  useEffect(() => {}, [toggleModal]);

  return !toggleModal ? (
    <Container id={'signIn'}>
      <nav>
        <LinkTo to="/home">
          <Logo>InCode</Logo> <br /> <LogoSpan>Finance</LogoSpan>
        </LinkTo>
      </nav>
      <h1>Sign In</h1>
      <Formik initialValues={initialValues} onSubmit={hendleSubmit}>
        <Form style={{ width: '100%' }}>
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
          <br />

          <button type="submit" onClick={onHomePage}>
            Sign in
          </button>
        </Form>
      </Formik>
      <div>
        Don`t have account yet.
        <button onClick={() => setToggleModal(true)}>Go to Sign Up</button>
      </div>
    </Container>
  ) : (
    <SignUp />
  );
};

export default SignIn;
