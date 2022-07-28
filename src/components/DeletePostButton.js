import React, { useState } from 'react'

const DeletePostButton = ({ onConfirm }) => {
  const [clicked, SetClicked] = useState(false)

  return (
    <React.Fragment>
      {clicked ? (
        <div className='delete-post-btn'>
          <button className='delete-btn-yes' onClick={onConfirm}>
            Yes
          </button>
          <button className='delete-btn-no' onClick={() => SetClicked(false)}>
            No
          </button>
        </div>
      ) : (
        <div className='delete-post-btn'>
          <button className='delete-btn' onClick={() => SetClicked(true)}>
            Delete?
          </button>
        </div>
      )}
    </React.Fragment>
  )
}

export default DeletePostButton
