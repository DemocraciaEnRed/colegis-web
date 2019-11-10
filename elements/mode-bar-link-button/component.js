import React from 'react'
import styled from 'styled-components'
// import { ArticlesContext } from '../../containers/user-project-container/component'
import Link from 'next/link'

const StyledLinkButton = styled.button`
  border: none;
  padding: 14px;
  margin-right: 20px;
  height: 45px;
  text-transform: uppercase;
  font-size: 1.4rem;
  color: #4a5d68;
  border-bottom: solid 1px #dae1e7;
  background-color: ${(props) => props.active ? '#f2f5f8' : 'white'};
  font-family: ${(props) => props.active ? 'var(--bold)' : 'var(--regular)'};
  &:hover{
    cursor: pointer;
    background-color: #f2f5f8;
  }
`

const ModeBarLinkButton = (props) => (
  <Link href={props.href}>
    <StyledLinkButton {...props}>
      {props.children}
    </StyledLinkButton>
  </Link>

)

export default ModeBarLinkButton
