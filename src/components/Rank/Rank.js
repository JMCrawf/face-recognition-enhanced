import React from 'react'

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white f4 pt2">
        {`${
          name[0].toUpperCase() + name.substring(1)
        }, your current entry count is... `}
      </div>
      <div className="gold f2">{entries}</div>
    </div>
  )
}

export default Rank
