import './contact.css'
// AiOutlineMail
// BsMessenger
// BsWhatsapp
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useState } from 'react';
const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmission = () => {
    if (name && email && message) {
      e.preventDefault();
      e.target.reset();
    }
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__blocks">
          
          <article className='contact__block'>
            <div className="contact__icon">
              <AiOutlineMail/>
            </div>
            <h5 className='contact__way'>Email</h5>
            <small className='contact__details text-light'>support@mail.com</small>
            <a href="" target='_blank'>Send an email</a>
          </article>


          <article className='contact__block'>
            <div className="contact__icon">
              <BsMessenger/>
            </div>
            <h5 className='contact__way'>Messenger</h5>
            <small className='contact__details text-light'>myAccount</small>
            <a href="https://m.me/" target='_blank'>Send a message</a>
          </article>


          <article className='contact__block'>
            <div className="contact__icon">
              <BsWhatsapp/>
            </div>
            <h5 className='contact__way'>Whatsapp</h5>
            <small className='contact__details text-light'>123-4567-890</small>
            <a href="https://api.whatsapp.com/send?phone=" target='_blank'>Send a message</a>
          </article>

        </div>

        <form className="contact__form">
          <input type="text" name='name' placeholder='Your Full Name' value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="email" name='email' placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <textarea name="message" placeholder='Your Message' cols="30" rows="5" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          <button  className='btn btn-primary' onSubmit={handleSubmission}>Send message</button>
        </form>
      </div>
    </section>
  )
}
export default Contact