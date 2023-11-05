import React from 'react'

function Loader() {
  return (
    <div>
      <div className="loader">
      <span style={{ '--delay': 1 }} className="ball"></span>
      <span style={{ '--delay': 2 }} className="ball"></span>
      <span style={{ '--delay': 3 }} className="ball"></span>
      <span style={{ '--delay': 4 }} className="ball"></span>
      <span style={{ '--delay': 5 }} className="ball"></span>
      <span style={{ '--delay': 6 }} className="ball"></span>
      <span style={{ '--delay': 7 }} className="ball"></span>
      <span style={{ '--delay': 8 }} className="ball"></span>
      </div>

    </div>
  )
}

export default Loader
