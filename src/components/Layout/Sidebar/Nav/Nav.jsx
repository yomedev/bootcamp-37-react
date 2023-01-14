import classNames from 'classnames';

import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../../context/AuthContext';
import { Button } from '../../../Button';

export const Nav = () => {
  const { logout } = useAuth();

  return (
    <div className='d-flex flex-column justify-content-between h-100'>
      <div className='d-flex flex-column justify-content-between'>
        <h2 className='h3 mb-4'>Welcome back!</h2>

        <NavLink
          to='/'
          style={{ textAlign: 'left', marginLeft: '-10px' }}
          className={({ isActive }) => (isActive ? 'btn btn-primary' : 'btn btn-light')}
        >
          Home page
        </NavLink>
        <NavLink
          to='/posts'
          style={{ textAlign: 'left', marginLeft: '-10px' }}
          className={({ isActive }) => (isActive ? 'btn btn-primary' : 'btn btn-light')}
        >
          Posts list
        </NavLink>
        <NavLink
          to='/new-post'
          style={{ textAlign: 'left', marginLeft: '-10px' }}
          className={({ isActive }) => (isActive ? 'btn btn-primary' : 'btn btn-light')}
        >
          Create new post
        </NavLink>
        <NavLink
          to='/exercises'
          style={{ textAlign: 'left', marginLeft: '-10px' }}
          className={({ isActive }) =>
            classNames('btn', { 'btn-primary': isActive, 'btn-light': !isActive })
          }
        >
          React exercises
        </NavLink>
      </div>

      <Button onClick={logout} className='btn-danger mt-auhref'>
        Log Out
      </Button>
    </div>
  );
};
