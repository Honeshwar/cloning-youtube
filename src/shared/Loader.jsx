import React from 'react'

function Loader() {
  return (
    <div className='load-bar'>
        {/* three disk with bar */}
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
    </div>
  )
}

export default Loader