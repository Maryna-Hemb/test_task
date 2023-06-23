import { NavLink } from 'react-router-dom';
const Content = () => {
  return (
    <div>
      <p>Congratulations</p>
      <p>
        Now you are on the main page. Soon we will provide you with detailed
        feedback on the result of your work
      </p>
      <NavLink to="/">Log out</NavLink>
    </div>
  );
};
export default Content;
