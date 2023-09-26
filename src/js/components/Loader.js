import React from 'react';
import '../../css/components/Loader.css'

export const Loader = () => {
  return(
    <svg className="Loader" xmlns="http://www.w3.org/2000/svg" width="160" height="80">
      <text x="0" y="40" textLength="80" fill="#3ac300">Loading</text>
      <rect x="90" y="26" width="60" height="16" rx="5" ry="5" fill="#3ac300"/>
    </svg>
  )
}
