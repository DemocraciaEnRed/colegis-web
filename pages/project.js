import React, { Fragment } from 'react'
import styled from 'styled-components'
// import dynamic from 'next/dynamic'
import NavBar from '../containers/navbar/component'
import SecondaryNavbar from '../containers/secondary-navbar/component'
import ProjectText from '../components/project-text/component'
import Footer from '../containers/footer/component'
import example from './example.json'

const Container = styled.div`
  width: 700px;
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 15px;
`

const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.42;
  letter-spacing: normal;
  color: #5c97bc;
`

const log = (value) => console.log(value.toJSON())

export default () => (
  <Fragment>
    <NavBar />
    <SecondaryNavbar />
    <Container>
      <Title>Artículos de la Propuesta</Title>
      <ProjectText
        // SUPER IMPORTANT
        // On server-side, always render the editor as readOnly=true
        editEnabled={typeof window !== 'undefined'}
        onChange={log}
        initialValue={example} />
    </Container>
    <Footer />
  </Fragment>
)
