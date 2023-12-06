import React, { useEffect } from 'react';

import ContactForm from './contactForm/ContactForm';
import FilterName from './FilterName/FilterName';
import ContactList from './ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { fetchContacts } from 'redux/reducers/contacts/operations';
import Navigation from './Navigation/Navigation';
import Register from './Register/Register';
import Loging from './Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ProtectedRoute from './PrivateRoute/ProtectedRoute';
import { me } from 'redux/reducers/auth/operations';

const App = () => {
  const filter = useSelector(state => state.filter);

  const { contacts, isLoading, error } = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  const getFilterName = () => {
    return contacts.filter(cont =>
      cont.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  useEffect(
    () => {
      dispatch(me());
      dispatch(fetchContacts());
    }, // eslint-disable-next-line
    []
  );
  if (error) return <p>{error}</p>;
  if (isLoading) return <p>Loading...</p>;
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route
          path="/register"
          element={
            <ProtectedRoute element={<Register />} redirect="/contacts" />
          }
        />
        <Route
          path="/login"
          element={<ProtectedRoute element={<Loging />} redirect="/contacts" />}
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute
              element={
                <div>
                  <h1>Phonebook</h1>
                  <div>
                    <ContactForm />
                    <h2>Contacts</h2>
                    <FilterName />
                    <ContactList getFilterName={getFilterName} />
                  </div>
                </div>
              }
              redirect="/login"
            />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
