import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/user';

function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => {
        dispatch(login({ name: "Florence", age: 20, email: "test@gmail.com" }));
      }}>
        Login
      </button>
    </div>
  );
}

export default Login;