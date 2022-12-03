
import React from 'react'
import '../styles/common.css'

export const Sidebutton = () => {

    const navigateTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className='side-button' onClick={navigateTop}>
            <img src='./images/top-page-icons/up.png' alt='' className='side-button__image' />
        </div>
    )
}
