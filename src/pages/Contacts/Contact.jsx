import React from 'react'

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e33b3ef5-56f4-49f8-825b-8de2c559fc91");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (
    <section className='contact-form'>
        <header>
            <h3 className='h3 form-title'>Contact Form</h3>
        </header>
         <form onSubmit={onSubmit} className='form'>
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
