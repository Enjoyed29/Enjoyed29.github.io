import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './retro-bowl.css'

const RetroBowl = (props) => {
  return (
    <div className="retro-bowl-container">
      <Helmet>
        <title>Retro-Bowl - Mobillio Online Store</title>
        <meta
          property="og:title"
          content="Retro-Bowl - Mobillio Online Store"
        />
      </Helmet>
      <Link to="/" className="retro-bowl-home button">
        <span>
          <br></br>
          <br></br>
          <br></br>
        </span>
      </Link>
    </div>
  )
}

export default RetroBowl
