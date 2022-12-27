import React from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames'

export const Button = ({children, primary, secondary, success}) => {
  
  return (
    <button className={classNames(styles.base, {
      [styles.primary]: primary,
      [styles.secondary]: secondary,
      [styles.success]: success
    })} type='button'>{children}</button>
  )
}
