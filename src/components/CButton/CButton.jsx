import React from 'react';
import './CButton.css'

export const CButton = ({ content = "default value", onclick, clase }) => {
  return (
    <button className={clase} onClick={onclick}>
        { content }
    </button>
  )
}

// default value is applied when no value is given in App.jsx