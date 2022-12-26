import React from 'react'

export const Link = ({href, title, children}) => {
  return <a href={href} title={title}>{children}</a>
}
