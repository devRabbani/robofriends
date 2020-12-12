import React from 'react'

const Scroll = (props) => {
  return (
    <div
      style={{ border: '2px solid black', overflowY: 'scroll', height: '80vh' }}
    >
      {props.children}
    </div>
  )
}

export default Scroll
