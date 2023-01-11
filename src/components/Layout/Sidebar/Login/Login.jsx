import React, { useContext, useState } from 'react';

import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { AuthContext } from '../../../../context/AuthContext';

import { Button } from '../../../Button';

export const Login = () => {
  const [isPassword, setIsPassword] = useState(true);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const toggle = () => setIsPassword((prev) => !prev);

  const { login } = useContext(AuthContext);

  const inputMap = {
    password: setPassword,
    username: setUsername,
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    inputMap[name](value);
  };

  const handleSubmit = () => {
    console.log(username, password);
    login(username, password)
  };

  return (
    <>
      <h2>Hello</h2>

      <div className='input-group mb-3'>
        <input
          name='username'
          value={username}
          onChange={handleChange}
          type='text'
          className='form-control'
          placeholder='Username'
        />
      </div>

      <div className='input-group mb-3'>
        <input
          name='password'
          value={password}
          onChange={handleChange}
          type={isPassword ? 'password' : 'text'}
          className='form-control'
          placeholder='Password ...'
        />
        <Button className='btn-outline-secondary' onClick={toggle}>
          {isPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
        </Button>
      </div>

      <Button onClick={handleSubmit}>Log In</Button>
    </>
  );
};
