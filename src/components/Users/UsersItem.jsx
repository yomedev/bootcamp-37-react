import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { BsFillAlarmFill } from "react-icons/bs";

const Item = styled.li`
  padding: 10px 20px;
  margin: 10px;
  background-color: ${(props) => props.online ? 'green' : '#eee'};
`

const Text = styled.p`
  color: blue;
`

const Email = styled(Text)`
  text-decoration: underline;
`

const Icon = styled(BsFillAlarmFill)`
  color: pink;
`

export const UsersItem = ({name, email, phone, isOnline}) => {
  // const isOnline = false
  return (
    <Item online={isOnline} >
      <Icon />
      <Text>{name}</Text>
      <Email>{email}</Email>
      <Text>{phone}</Text>
    </Item>
  )
}

UsersItem.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
}
