import React from 'react'
import PropTypes from 'prop-types'
import styles from './Link.module.scss'
console.log(styles);

export const Link = ({href = '/home', title, children, isOnline}) => {
  return (
  <a className={styles.link}  href={href} title={title}>
    {/* <span>{isOnline && 'Online'}</span> */}
    <span>{isOnline ? 'Online' : 'Offline'}</span>
    {children}
    </a>
  )
}

Link.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  isOnline: PropTypes.bool
}

