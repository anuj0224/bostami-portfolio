import React, { useEffect, useState } from 'react'
import Service from './Service';
import Testimonial from './Testimonial';


const servicesData = 
[
    {
      "title": "Frontend Development",
      "icon": "/images/icon-dev.svg",
      "description": "The most modern and high-quality webpages made at a professional level."
    },
    {
      "title": "Backend Development",
      "icon": "/images/icon-dev.svg",
      "description": "The high-quality Rest API made at a professional level."
    },
    {
      "title": "Web development",
      "icon": "/images/icon-dev.svg",
      "description": "High-quality development of sites at the professional level."
    },
  ];


function About() {

  const [testimonial, setTestimonials] = useState([]);
  useEffect(()=>{
    fetch('/testimonials.json').then(res => res.json()).then(data=>{
      setTestimonials(data);
    })
  });

  return (
    <div className='about'>
      <header>
        <h2 className='h2 article-title'>About Me</h2>
      </header>
      <section className='about-text'>
        <p>
        I am a passionate and dedicated individual who is deeply enthusiastic about technology, 
        particularly in the realm of web development. Currently pursuing a Bachelor's degree in Computer Science,
         I have already begun my journey into the world as a MERN stack developer.
          <br/><br/>
          My ambition is to leverage my academic knowledge 
         and practical skills to build innovative and user-friendly web applications that make a positive impact.
        </p>
      </section>

      <section className='services'>
        <h2 className=' h3 service-title'>
          What I'm Doing
        </h2>
        <ul className='service-list'>
          {
            servicesData.map((service,index)=>(
              <Service key={index} title={service.title} icon = {service.icon} description={service.description} />
            ))
          }
        </ul>
      </section>


      <section className='testimonials'>
          <h3 className='h3 testimonials-title'>Testimonials</h3>
          <ul className='testimonials-list has-scrollbar'>
            {
              testimonial.map((testimonial , index) =>(
                <Testimonial 
                key={index} 
                name={testimonial.name} 
                avatar = {testimonial.avatar} 
                testimonial ={testimonial.testimonial} />
              ))
            }
          </ul>
      </section>


      <section className='clients'>
        <h3 className='h3 clients-title'>Clients</h3>
            <ul className=' clients-list has-scrollbar'>
              {/* <li className='clients-item'>
                <a href='#'>
                  <img src='/images/logo-1-color.png' alt='nnnn'/>
                </a>
              </li>
              <li className='clients-item'>
                <a href='#'>
                  <img src='/images/logo-4-color.png' alt='nnnn'/>
                </a>
              </li>
              <li className='clients-item'>
                <a href='#'>
                  <img src='/images/logo-3-color.png' alt='nnnn'/>
                </a>
              </li>
              <li className='clients-item'>
                <a href='#'>
                  <img src='/images/logo-2-color.png' alt='nnnn'/>
                </a>
              </li>
              <li className='clients-item'>
                <a href='#'>
                  <img src='/images/logo-5-color.png' alt='nnnn'/>
                </a>
              </li>
              <li className='clients-item'>
                <a href='#'>
                  <img src='/images/logo-6-color.png' alt='nnnn'/>
                </a>
              </li> */}
                <p className='about-text'>No Clients</p>
            </ul>
      </section>
       
    </div>
  )
}

export default About;