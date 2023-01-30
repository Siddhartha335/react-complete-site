import React from 'react'

const Footer = () => {
    const getDate = new Date().getFullYear();
  return (
    <>
        <footer className='w-100 bg-light text-center'>
            <p>Copyright © {getDate} Siddhartha Raut</p>
        </footer>
    </>
  )
}

export default Footer