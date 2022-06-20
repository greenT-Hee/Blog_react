import React from 'react'
import './ViewBanner.css'

function ViewBanner() {
  return (
    <div className='viewBanner'>
        <div className='max-width'>
            <div className='viewBanner-contents'>
                <p className='today'>
                    May <em>25</em> Wednesday 
                </p>
            </div>
        </div>
    </div>
  )
}

export default ViewBanner