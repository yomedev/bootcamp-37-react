import React from 'react'
import classNames from 'classnames';
import PropTypes from 'prop-types'

export const Button = ({ type = 'button', className = 'btn-primary', isLoading, disabled, children, ...props }) => {
  return (
    <button type={type} className={classNames('btn', className)} {...props} disabled={isLoading || disabled}>
      {isLoading ? (
        <>
          <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
          <span className="visually-hidden">Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node
}