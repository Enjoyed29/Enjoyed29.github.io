import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Mobillio Online Store</title>
        <meta property="og:title" content="Page - Mobillio Online Store" />
      </Helmet>
      <Link to="/" className="page-home button">
        <span>
          <br></br>
          <br></br>
          <br></br>
        </span>
      </Link>
      <iframe src="https://www.2048.org/" className="page-iframe"></iframe>
    </div>
  )
}

export default Page
