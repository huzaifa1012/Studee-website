import React from 'react'
import "./whystudy.css"
import { BiRightArrowAlt } from 'react-icons/bi'

const Whystudee = () => {
  return (
    <div>
      <div className='why_use_main_wrap'>
        <div className='why_use_head'>
          <h2 className='mtc'>Why use Studee?</h2>
          <p className='mtc'>We maximise your chance of being admitted with our free, <b> 48 hour fast-track </b> assessment (worth $185*)</p>
        </div>
        <div className='Why_Use_studee_wrap'>
          <div className='Why_Use_studee_body'>
            <div className='Why_Use_studee_box'>
              <img src='https://images.studee.com/illustrations/illustration__spot--program-matching.png?ixlib=js-2.3.2&auto=format&fit=crop&q=45&w=128' />
              <h2 className='mtc' >Find your ideal program </h2>
              <p className='ltc'>Filter <b> 10,000s of programs </b> down to a shortlist perfect for you, where you have a strong chance of getting admitted</p>
            </div>
            <div className='Why_Use_studee_box'>
              <img src='https://images.studee.com/illustrations/illustration__spot--save-details.png?ixlib=js-2.3.2&auto=format&fit=crop&q=45&w=128' />
              <h2 className='mtc' >Apply online via Studee </h2>
              <p className='ltc'>Complete our application form and enjoy <b> reduced application fees </b> & access to unique Studee scholarships for many universities</p>
            </div>
            <div className='Why_Use_studee_box'>
              <img src='https://images.studee.com/illustrations/illustration__spot--blended-learning.png?ixlib=js-2.3.2&auto=format&fit=crop&q=45&w=128' />
              <h2 className='mtc' >We assess within 48hrs </h2>
              <p className='ltc'>We complete an 85-point assessment within <b>2 business days,</b> help you with improvements then submit to your university</p>
            </div>
            <div className='Why_Use_studee_box'>
              <img src='https://images.studee.com/illustrations/illustration__spot--advice-center.png?ixlib=js-2.3.2&auto=format&fit=crop&q=45&w=128' />
              <h2 className='mtc' >University offer in 2-4 weeks </h2>
              <p className='ltc'>We chase the university for your admission decision and keep you updated. We all <b> celebrate your admission!</b></p>
            </div>
          </div>
        </div>
        <div className='why_use_bottom_wrap'>
          <div className='why_use_bottom'>
            <p className='why_bottom_p1'> <b> Carbon compensation </b> - We'll plant trees in your name to compensate for the carbon generated by all your flights to and from university.</p>
            <p className='why_bottom_p2'><b>  All our services are 100% free </b>  as we're funded by universities. You pay deposits & tuition fees directly to the university.</p>
            <p className='why_bottom_p3'>* Price based on similar application assessment services from other providers</p>

            <button className='why_use_bottom_btn'>Find your perfect programs <BiRightArrowAlt className="heroBtnIcon" size={25} /> </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Whystudee
