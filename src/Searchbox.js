import React from 'react'

const Searchbox = ({ props }) => {
  return (
    <div>
      <input
        className="pa3 ba b--green bg-lightest-blue"
        placeholder="search here"
        type="search"
        onChange={props}
      />
    </div>
  )
}

export default Searchbox
