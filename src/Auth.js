import React, { useEffect, useState } from 'react';
import Loading from './pages/Loading';
import SignIn from './pages/SignIn';
import App from './pages/App';
import ErrorPage from './pages/ErrorPage';
import { getStorageToken } from './services/AuthService';

export default function Auth() {
  const [component, setComponent] = useState('Loading');
  const [error, setError] = useState('');

  useEffect(() => {
    getStorageToken().then(
      (token) => {
        if (token !== null) {
          setComponent('App');
        } else {
          console.log(token);
          setComponent('SignIn');
        }
      },
    ).catch((err) => {
      console.log(err);
      setComponent('ErrorPage');
      setError('getStorageToken');
    });
  }, []);

  if (component === 'Loading') {
    return <Loading />;
  }
  if (component === 'SignIn') {
    return <SignIn error={error} />;
  }
  if (component === 'App') {
    return <App />;
  }
  if (component === 'ErrorPage') {
    return <ErrorPage error={error} />;
  }
}
