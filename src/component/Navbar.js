import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [isVisible, setisVisible] = useState(false)
  const isVisibleHandler = () => {
    setisVisible(!isVisible)
  }

  return (
    <>
   <div className=' d-flex align-items-center justify-content-center'>
    <div  className='w-75  mt-3 d-flex align-items-center justify-content-between shadow p-2 '>
          <div className=' d-flex align-items-center justify-content-center p-2 '>
          <div className='nav-element1'>          
              <Link className='text-decoration-none' to={"/Home"}>
                <h4 className='text-success' >Portfolio .</h4>
              </Link>
          </div>
          </div>
          <div className=' nav-right'>
          <div className='nav-element1'>
              <Link className='text-decoration-none fw-medium  fs-6 text-secondary' to={"/Home"}>Home</Link>
          </div>
          <div className='nav-element1'>
              <Link className='text-decoration-none fw-medium  fs-6 text-secondary ' to={"/About"}>About</Link>
          </div>
          <div className='nav-element1'>
              <Link className='text-decoration-none fw-medium  fs-6 text-secondary ' to={"/Carrier"}>Career</Link>
          </div>
          <div className='nav-element1'>
             <Link className='text-decoration-none fw-medium  fs-6 text-secondary ' to={"/Projects"}>Projects</Link>
          </div>
          </div>
          <button onClick={isVisibleHandler} className=' menubtn'>
          <i className="bi bi-list"></i>
          </button>
    </div>
   </div>
    {isVisible === true ? (
         <div className=' d-flex align-items-center justify-content-center'>
          <div  className='w-75 mt-3  d-flex align-items-center justify-content-center shadow p-2 '>
                <div className=' nav-right-menu'>
                  <div className='nav-element1 d-flex align-items-center justify-content-center'>
                      <Link className='text-decoration-none fw-medium mt-3  fs-6 text-secondary' to={"/Home"}>Home</Link>
                  </div>
                  <div className='nav-element1 d-flex align-items-center justify-content-center'>
                      <Link className='text-decoration-none fw-medium mt-3 fs-6 text-secondary ' to={"/About"}>About</Link>
                  </div>
                  <div className='nav-element1 d-flex align-items-center justify-content-center'>
                      <Link className='text-decoration-none fw-medium mt-3 fs-6 text-secondary ' to={"/Carrier"}>Career</Link>
                  </div>
                  <div className='nav-element1 d-flex align-items-center justify-content-center'>
                    <Link className='text-decoration-none fw-medium mt-3 fs-6 text-secondary ' to={"/Projects"}>Projects</Link>
                  </div>
                  <div className='nav-element1 mt-3 d-flex align-items-center justify-content-center'>
                    <Link onClick={isVisibleHandler} className='text-decoration-none fw-medium  fs-6 text-secondary' ><i class="bi bi-x-square-fill"></i></Link>
                  </div>
                </div>
                
          </div>
        </div>
    ): ('')}
   </>

  )
}

export default Navbar