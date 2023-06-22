import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/sharedLayot/SharedLayout';

const Auth = lazy(() => import('./pages/authPage'));
const Home = lazy(() => import('./pages/homePage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Auth />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<Auth />} />
      </Route>
    </Routes>
  );
};
