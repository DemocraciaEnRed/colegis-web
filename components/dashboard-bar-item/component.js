import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledItem = styled.div`
  width:35rem;
  height:8rem;  
  padding:1rem 3rem;
  display: flex;
  align-items:center;
  box-sizing:border-box;
  border-left: ${(props) => props.grayborder ? '1px solid #e9e9e9' : 'none'};
  border-right: ${(props) => props.grayborder ? '1px solid #e9e9e9' : 'none'};

`

StyledItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default StyledItem
