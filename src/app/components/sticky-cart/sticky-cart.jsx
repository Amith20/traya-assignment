import React from 'react'

function StickyCart() {
  return (
    <div className=''>
        <div>
            <button className='btn w-100 d-flex justify-content-between align-items-center' style={{backgroundColor:"#B7D340"}}>
                <span>
                    <span>
                        <del>4000</del>
                        <span>2890</span>
                    </span>
                    <small>Inclusive of all taxes</small>
                </span>
                <span>
                    BUY NOW
                </span>
            </button>
        </div>
    </div>
  )
}

export default StickyCart