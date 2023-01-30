import React from 'react'
import web from "../src/images/image-1.jpg";
import { Link } from 'react-router-dom';

const Common = (props) => {
  return (
    <section id='header' className='flex'>
      <div className='container-fluid nav_bg'>
        <div className='row'>
          <div className='col-10 mx-auto'>
          <div className='row'>
            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                <h1 className='mb-4'>{props.name} <br /> <strong>Siddhartha Raut</strong></h1>
                <h2 className='my-3 lh-2'>
                  I am young passionate developer making websites, make sure to check my other works.
                </h2>
                <div className='mt-5'>
                  <Link to={props.visit} className='btn-get-started' >{props.btnname}</Link>
                </div>
            </div>  
            <div className='col-lg-6 order-1 order-lg-2 animation'>
              <img src={web} className="img-fluid" alt="About-photo" />
            </div>
            </div>  
          </div> 
        </div>
      </div>
    </section>
  )
}

export default Common;