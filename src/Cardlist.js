import React from 'react'
import Card from './Card'

const Cardlist = ({ robots }) => {
  const cardarray = robots.map((usr, id) => {
    return <Card key={id} id={usr.id} name={usr.name} email={usr.email} />
  })

  return <div className="mv3">{cardarray}</div>
}

export default Cardlist
