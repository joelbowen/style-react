import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

// normalizing stylesheet
import './index.css'

const headerStyles = {
  headerContainer: {
    'background-color': 'rebeccapurple',
    marginBottom: '1.45rem',
  },
  header: {
    margin: '0 auto',
    maxWidth: 960,
    padding: '1.45rem 1.0875rem',
  },
  h1: { margin: 0 },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
}

const Header = () => (
  <div style={headerStyles.headerContainer}>
    <div style={headerStyles.header}>
      <h1 style={headerStyles.h1}>
        <Link to="/" style={headerStyles.link}>
          Gatsby
        </Link>
      </h1>
    </div>
  </div>
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
