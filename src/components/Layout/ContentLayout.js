import React from 'react'

import './ContentLayout.scss'

const ContentLayout = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="content-layout">{children}</div>
    </div>
  )
}

export default ContentLayout
