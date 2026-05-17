import React from 'react'

function Contact() {

  const handleFormSubmit=(formData)=>{
    const  formInputData = Object.fromEntries(formData.entries())
  }

  return (
    <section className='section-contact'>
      <h2 className='container-title'>Contact Us</h2>

<div className="contact-wrapper container">
 <form action={handleFormSubmit}>

        <input 
        type="text" 
        className='form-control'
        required 
        placeholder='Enter Your Name' 
        name="username" 
        />

        <input 
        type="email" 
        className='form-control'
        required 
        placeholder='Enter Your Email' 
        name="email" 
        />

        <textarea 
        type="text" 
        required 
        placeholder='Enter the description' 
        name="description" 
        ></textarea>

        <button type="submit">Send</button>

      </form>
</div>
     

    </section>
  )
}

export default Contact