import Button from '../components/button/Button';

const authPage = () => {
  const signUp = 'Sign Up';
  const signIN = 'Sign In';
  return (
    <>
      <Button text={signUp} />
      <Button text={signIN} />
    </>
  );
};

export default authPage;
