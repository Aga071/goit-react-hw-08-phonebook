import { useAuth } from 'hook/useAuth';
import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { logout } from 'redux/reducers/auth/operations';
import { selectEmail } from 'redux/reducers/auth/selectors';

const AuthenticatedNav = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };
  const email = useSelector(selectEmail);
  return (
    <>
      <NavLink to="contacts">Contacts</NavLink>
      <div>
        <p>{email}</p>
        <button onClick={handleClick}>Logout</button>
      </div>
    </>
  );
};

const UnauthenticatedNav = () => (
  <>
    <NavLink to="/register">Register</NavLink>
    <NavLink to="/login">Login</NavLink>
  </>
);
export default function Navigation() {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>

        {isLoggedIn ? <AuthenticatedNav /> : <UnauthenticatedNav />}
      </nav>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
