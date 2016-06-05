import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'

import { rhythm } from 'utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    const navStyle ={ 
      color: 'black',
      float: 'right',
      textDecoration: 'none',
      padding: '0.25em'
    }
    return (
      <div>
        <Headroom
          wrapperStyle={{
            marginBottom: rhythm(1),
          }}
          style={{
            background: '#E3E7F1',
          }}
        >
          <Container
            style={{
              maxWidth: 960,
              paddingTop: 0,
              padding: `${rhythm(1)} ${rhythm(1/2)}`,
            }}
          >
            <Link
              to={prefixLink('/')}
              style={{
                color: 'black',
                textDecoration: 'none',
                padding:'0.25em'
              }}
            >
              Home
            </Link>
            <Link to={prefixLink('/contact/')} style={navStyle}>Contact</Link>
            <Link to={prefixLink('/portfolio/')} style={navStyle}>Portfolio</Link>
            <Link to={prefixLink('/resume/')} style={navStyle}>Resume</Link>
            <Link to={prefixLink('/about/')} style={navStyle}>About</Link>
            <Link to={prefixLink('/blog/')} style={navStyle}>Blog</Link>
                                                
          </Container>
        </Headroom>
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(1/2)}`,
            paddingTop: 0,
            background: '#F5F1E9'
          }}
        >
          {this.props.children}
        </Container>
      </div>
    )
  },
})
