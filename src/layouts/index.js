import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

// normalizing stylesheet
import './index.css'

class Header extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
  }
  componentDidMount = () => {
    window.addEventListener('resize', this.windowResized)
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.windowResized)
  }
  windowResized = () => {
    this.setState({
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    })
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: 'rebeccapurple',
          // @media (max-width: 600px) {...}
          marginBottom: this.state.viewport.width < 600 ? '.5rem' : '1.45rem',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem',
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Gatsby
            </Link>
          </h1>
        </div>
      </div>
    )
  }
}

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
