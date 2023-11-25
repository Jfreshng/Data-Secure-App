import React from 'react'
import './ContactStyles.css'

const Contact = () => {
  return (
    <div className="contact">
        <div className="container">
            <div className="form-container">
                <form action="">
                    <h1><span>Contact</span> Us</h1>
                    <div className="">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter your name'/>
                    </div>

                    <div className="">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Enter your email'/>
                    </div>

                    <div className="">
                        <label htmlFor=""></label>
                        <textarea rows="10" type="text" placeholder='Enter your message'></textarea>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact