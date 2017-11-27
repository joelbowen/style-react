import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.css';

const headerStyles = {
  headerContainer: {
    backgroundColor: 'rebeccapurple',
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
    'text-decoration': 'none',
    '&:hover': {
      color: 'rgba(255, 255, 255, 0.8)',
    },
  },
};

/**
 * Typically we would `export default injectSheet(headerStyles)(Header)`,
 *   but since Gatsby put all of components together in this file, we can
 *   use the following syntax to achieve the same HOC injection of classes.
 */
const Header = injectSheet(headerStyles)(({ classes }) => (
  <div className={classes.headerContainer}>
    <div className={classes.header}>
      <h1 className={classes.h1}>
        <Link to="/" className={classes.link}>
          Gatsby
        </Link>
      </h1>
    </div>
  </div>
));

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
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
