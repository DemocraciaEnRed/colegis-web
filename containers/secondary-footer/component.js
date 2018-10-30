import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'next/link'
import FooterBar from '../../components/footer-bar/component'
import SocialBar from '../../components/social-bar/component'
import SocialIcon from '../../elements/social-icon/component'

const FooterWrapper = styled.footer`
  width: 100%;
  height: 14rem;
  background-color: var(--white);
  display:flex;
  flex-direction:column;
  justify-content: flex-end;
  margin-top:10rem;
`

const Footer = () => (
  <FooterWrapper>
    <FooterBar>
      <Link href='/'><a>Proyectos</a></Link>
      <Link href='/'><a>La Propuesta</a></Link>
      <Link href='/'><a>Preguntas Frecuentes</a></Link>
      <Link href='/'><a>Términos y condiciones</a></Link>
    </FooterBar>
    <SocialBar>
      <SocialIcon
        img={'/static/assets/facebook-icon.svg'}
        link={'/'} />
      <SocialIcon img={'/static/assets/twitter-icon.svg'}
        link={'/'} />
    </SocialBar>
  </FooterWrapper>
)

export default Footer
