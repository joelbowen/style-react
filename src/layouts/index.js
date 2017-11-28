import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import './index.css'

const HeaderContainer = styled.div`
  background-color: rebeccapurple;
  margin-bottom: 1.45rem;
`
const HeaderComponent = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`
const H1 = styled.h1`
  margin: 0;
`
const SiteName = styled(Link)`
  color: white;
  text-decoration: none;
`
const Header = () => (
  <HeaderContainer>
    <HeaderComponent>
      <H1>
        <SiteName to="/">Gatsby</SiteName>
      </H1>
    </HeaderComponent>
  </HeaderContainer>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
