import React from 'react'

const Loading = () => {
  return (
    <div className='d-flex flex-grow-1 justify-content-center align-items-center' style={{paddingTop: "80px"}}>
      <div className="spinner-border p-2" role="status" style={{width: "4rem", height: "4rem",}}>
      </div>
    </div>
  )
}

export default Loading