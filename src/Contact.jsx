import React, { useState } from 'react'

const Contact = () => {
  const [details, setDetails] = useState({
    fullname:"",
    phone:"",
    email:"",
    message:""
  })

  const inputEvent = (event)=> {

    const {name,value} = event.target;
    setDetails((prevVal)=> {
        return (
          {
            ...prevVal,
            [name]:value
          }
        )
    })

  }

  const refreshPage =(event)=> {
    event.preventDefault();
    alert(`My full name is ${details.fullname} and phone number is ${details.phone} and my email is ${details.email} and my message was ${details.message}`);
  }

  return (
    <>
      <div className='mt-2'>
        <h1 className='text-center'>Contact us</h1>
      </div>
      <div className='container contact_div '>
        <div className='row'>
            <div className='col-md-6 col-10 mx-auto'>
              <form className='dfg' onSubmit={refreshPage} autoComplete='off'>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Fullname</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" required  onChange={inputEvent} value={details.fullname} name="fullname" />
              </div>
              
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Phone </label>
                <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="mobile number" required onChange={inputEvent} value={details.phone} name="phone" />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required onChange={inputEvent} value={details.email} name="email" />
              </div>

              <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required onChange={inputEvent} value={details.message} name="message"></textarea>
            </div>
            <div className='dffg'>
            <button type="button" class="btn btn-outline-primary " onClick={refreshPage}>Submit</button>
            </div>
              </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact;