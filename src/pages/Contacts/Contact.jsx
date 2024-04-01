import React from 'react'

function Contact() {
  return (
    <section className='contact-form'>
        <header>
            <h3 className='h3 form-title'>Contact Form</h3>
        </header>
         <form className='form'>
            <div className='input-wrapper' >
                <input type='text' name='fullname' id='fullname' className='form-input' placeholder='Full Name' />
                <input type='email' name='email' id='email' placeholder='Email Address' className='form-input'/>
            </div>
            <textarea name='message' className='form-input' placeholder='Your Messages'></textarea>
            <button type='submit' className='form-btn'>
                <span>Send Message</span></button>
         </form>    
    </section>
  )
}

export default Contact