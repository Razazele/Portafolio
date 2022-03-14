import React,{useState} from 'react'

import {images} from '../../constants'
import {AppWrap,MotionWrap} from '../../wrapper'
import {client} from '../../client'

import './Footer.scss';


const Footer = () => {

  const [formData, setFormData] = useState({name:'',email:'',message:''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {name,email,message} = formData;

  const handleChangeInput = (e) => {
    const {name,value} = e.target;
    setFormData({...formData,[name]:value})
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type:'contact',
      name:name,
      email:email,
      message:message,
    }

    client.create(contact)
      .then(()=>{
        setLoading(false);
        setIsFormSubmitted(true);
      }).catch((err) => console.log(err));
  }

  return (
    <>
    
    <h2 className="head-text">Puedes contactarme aqui</h2>
    
    <div className='app__footer-cards' >

      <div className='app__footer-card'>
        

      <img src={images.email} alt="email" />
      <a href="mailto:pablo_verdugoj@hotmail.com" className='p-text'>pablo_verdugoj@hotmail.com</a>
      </div>  

      <div className='app__footer-card'>
        

        <img src={images.mobile} alt="mobile" />
        <a href="tel: +56 991229700" className='p-text'>+56 991229700</a>
        </div>  
    
    </div>

    {!isFormSubmitted ? (
    <div className='app__footer-form app__flex'>
    
    <div className='app__flex'>
    
    <input className='p-text' type="text" placeholder='Tu Nombre' name='name' value={name} onChange={handleChangeInput} />
    
    </div>

    <div className='app__flex'>
    
    <input className='p-text' type="email" placeholder='Tu Correo Electronico' name='email' value={email} onChange={handleChangeInput} />
    
    </div>
    <div>
      <textarea className='p-text' placeholder='Tu mensaje' value={message} name="message" onChange={handleChangeInput}/>
    </div>
    <button type='button' className='p-text' onClick={handleSubmit}>{loading ?'Enviando':'Enviar Mensaje'}</button>
    
    
    </div>)
    :  <div>
      <h3 className='head-text'> Gracias por ponerte en contacto</h3>
    </div>
    
    
    
    }

    </>
  )
}

export default AppWrap(MotionWrap(Footer,"app__footer"),'contacto','app__whitebg')