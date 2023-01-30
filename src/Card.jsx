import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
 return (
    <>
        <div className='col-md-4 col-10 mx-auto'>
                <div class="card">
                <img src={props.imgsrc} class="card-img-top" alt="card-photo" />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.text}</p>
                    <Link to={props.link} class="btn btn-primary">See my work</Link>
                </div>
                </div>
        </div>
</>
  )
}

export default Card;
