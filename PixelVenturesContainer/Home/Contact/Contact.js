import './Contact.css'
import React, { useState } from 'react'
import axios from 'axios'
import { useInView } from 'react-intersection-observer'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Contact () {
  const { ref: myRef, inView: fadeInSection } = useInView()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [banner, setBanner] = useState('')

  const handleName = e => {
    setName(e.target.value)
  }

  const handleEmail = e => {
    setEmail(e.target.value)
  }

  const handleSubject = e => {
    setSubject(e.target.value)
  }

  const handleMessage = e => {
    setMessage(e.target.value)
  }

  const submitForm = async e => {
    e.preventDefault()
    try {
      const res = await axios.post(
        'https://pixelventure-server-karollains-projects.vercel.app/contact',
        {
          name: name,
          email: email,
          subject: subject,
          message: message
        }
      )
      if (
        name.length === 0 ||
        email.length === 0 ||
        subject.length === 0 ||
        message.length === 0
      ) {
        setBanner(res.data.msg)
        toast.error(res.data.msg)
      } else if (res.status === 200) {
        setBanner(res.data.msg)
        toast.success(res.data.msg)

        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response)
        setBanner('An error occurred: ' + error.response.data.message)
        toast.error('An error occurred: ' + error.response.data.message)
      } else {
        console.log('Error', error.message)
        setBanner('An error occurred: ' + error.message)
        toast.error('An error occurred: ' + error.message)
      }
    }
  }

  return (
    <section ref={myRef} className='contact' id='contactSection'>
      <h1
        className={`contactHeader ${
          fadeInSection ? 'show portfolioHeader' : ''
        }`}
      >
        get in touch
      </h1>
      <div className={`underlining ${fadeInSection ? 'show' : ''}`}>
        <span className='dot'></span>
      </div>
      <div className={`contactContent ${fadeInSection ? 'show' : ''}`}>
        <div className='contactContentForm'>
          <h2 className='h__second'>Message me</h2>
          <form onSubmit={submitForm} className='contactFormBox'>
            <p>{banner}</p>
            <div className='firstLineBox'>
              <input
                onChange={handleName}
                value={name}
                type='text'
                name='name'
                placeholder='Name'
              />
              <input
                onChange={handleEmail}
                value={email}
                type='email'
                name='email'
                placeholder='Email'
              />
            </div>
            <input
              onChange={handleSubject}
              value={subject}
              type='text'
              name='subject'
              placeholder='Subject'
            />
            <textarea
              onChange={handleMessage}
              value={message}
              name='message'
              cols='30'
              rows='10'
              placeholder='Message'
            ></textarea>

            <div className='wrapper contactBox'>
              <button className='button' type='submit'>
                Enquire
              </button>
            </div>

            <svg
              className='svgStyle'
              xmlns='http://www.w3.org/2000/svg'
              version='1.1'
            >
              <defs>
                <filter id='goo'>
                  <feGaussianBlur
                    in='SourceGraphic'
                    stdDeviation='10'
                    result='blur'
                  />
                  <feColorMatrix
                    in='blur'
                    mode='matrix'
                    values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
                    result='goo'
                  />
                  <feComposite in='SourceGraphic' in2='goo' operator='atop' />
                </filter>
              </defs>
            </svg>
          </form>
        </div>

        <div className='contactInfo'>
          <p className='contactInfoHeader h__second'>Contact info</p>
          <div className='contactInfoWrapper'>
            <div className='contactInfoWrapperBox'>
              <svg className='contactInfoSvg'>
                <use xlinkHref='/sprite.svg#icon-user'></use>
              </svg>
              <svg className='contactInfoSvg'>
                <use xlinkHref='/sprite.svg#icon-mail'></use>
              </svg>
            </div>

            <div className='contactInfoWrapperBox'>
              <div className='contactInfoName h__third'>Karolina</div>
              <div className='contactInfoEmail h__third'>
                <a href='mailto:pxlventure@gmail.com'>pxlventure@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
