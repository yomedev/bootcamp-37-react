import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const subPages = [
  { href: '/exercises/timer', title: 'Timer' },
  { href: '/exercises/cancel-request', title: 'Cancel Request' },
  { href: '/exercises/counter', title: 'Counter' },
  { href: '/exercises/users', title: 'Users' },
  { href: '/exercises/re-render', title: 'Re-render' },
];

export const ExercisesPage = () => {
  return (
    <>
      <ul className='nav nav-tabs mb-5'>
        {subPages.map((item) => (
          <li key={item.href} className='nav-item'>
            <NavLink className='nav-link' to={item.href}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
