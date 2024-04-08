import React from 'react'
import { GiCalendar, GiClawSlashes, GiPhone } from "react-icons/gi";
import { MdLocationOn, MdOutlineMailOutline } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import resume from './resume.pdf';

function Aside() {
  return (
    <aside className='sidebar'>
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img
              src={"/images/anuj.jpg"}
              alt="Anuj Mourya"
              width="80"
            />
          </figure>

          <div className="info-content">
            <h1 className="name" title="Anuj">
              Anuj Mourya
            </h1>

            <p className="title">Web developer</p>
            <br/>
            <div className="socialmedia-list">
            <a href='https://www.linkedin.com/in/anuj-mourya-73b697291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className=" icon-box">
              <IoLogoLinkedin />
            </a>
            <a href='https://www.instagram.com/anujmourya18_?igsh=ZTUwdjhzcWNvdXdt' className=" icon-box">
              <FaInstagram />
            </a>
            <a href='https://github.com/anuj0224' className=" icon-box">
              <FaGithub />
            </a>
            </div>
          </div>

        </div>
        <div className='sidebar-info_more'>
          <hr className="separator2"/>
          <ul className='contacts-list'>

          <li className='contact-item'>
              <div className='icon-box'>
                <IoDocumentTextOutline />
              </div>
              <div className='contact-info'>
                <p className='contact-title'>Download CV</p>
                <a className='contact-link' href={resume} download >Resume</a>
              </div>
            </li>

            <li className='contact-item'>
              <div className='icon-box'>
                <MdOutlineMailOutline />
              </div>
              <div className='contact-info'>
                <p className='contact-title'>Email</p>
                <a className='contact-link' href='mailto:mouryaanuj62@gmail.com'>anujmourya@gmail.com</a>
              </div>
            </li>

            <li className='contact-item'>
              <div className='icon-box'>
                <GiPhone/>
              </div>
              <div className='contact-info'>
                <p className='contact-title'>Phone</p>
                <a className='contact-link' href='tel: +919958682778'>+91 9958682778</a>
              </div>
            </li>

            <li className='contact-item'>
              <div className='icon-box'>
                <GiCalendar />
              </div>
              <div className='contact-info'>
                <p className='contact-title'>BirthDay</p>
                <time className='contact-link' dateTime='2002-05-24'>May 24,2002</time>
              </div>
            </li>

            <li className='contact-item'>
              <div className='icon-box'>
              <MdLocationOn />
              </div>
              <div className='contact-info'>
                <p className='contact-title'>Location</p>
                <address href='mailto:anuj@gmail.com'>New Delhi, INDIA</address>
              </div>
            </li>
          </ul>
        </div>
    </aside>
  )
}

export default Aside;
