import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'next/link'

const OpenContainer = styled.div`
  display: inline-block;
  font-size: 11px;
  color: white;
  background-color: #0bb546;
  padding: 4px 15px;
  // margin-bottom: 10px;
  text-transform: uppercase;
  font-family: var(--medium);
  border-radius: 2px;
`
const ClosedContainer = styled.div`
  display: inline-block;
  font-size: 11px;
  color: white;
  background-color: #ef885d;
  padding: 4px 15px;
  // margin-bottom: 10px;
  text-transform: uppercase;
  font-family: var(--medium);
  border-radius: 2px;
`

const ProjectStatus = ({ closed }) => {
  if (!closed) {
    return (
      <OpenContainer>
        Se aceptan aportes
      </OpenContainer>
    )
  }
  return (
    <ClosedContainer>
      Finalizó el periodo de aportes
    </ClosedContainer>
  )
}

ProjectStatus.propTypes = {
  closed: PropTypes.bool
}

export default ProjectStatus
