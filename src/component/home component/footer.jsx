import React from 'react'
import IEOLogo from "../../assets/IEO.png"
import "./footerStyle.css"
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from 'react-icons/bs'
import partner1 from "../../assets/University logos/logo1.png"
import partner2 from "../../assets/University logos/logo2.png"
import partner3 from "../../assets/University logos/logo3.png"
import partner4 from "../../assets/University logos/logo4.png"
export default function Footer() {
    return (

        <footer style={{ color: 'var(--secondary-accent)', fontFamily: '"Inter", "sans-serif"', borderTop: '1px solid #e2e3e9', backgroundColor: '#f7f8f9' }} className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 light:text-neutral-200 lg:text-left">

            {/* Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '90%', margin: '50px 0px 00px 0px' }}>
                    <img style={{ width: '130px' }} src={IEOLogo} className='w-40' />
                </div>
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', }}>

                <div style={{ width: '90%' }} className="mx-6 py-10 text-center md:text-left">
                    <div style={{ textAlign: 'left' }} className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {/* Tailwind Elements section */}
                        <div >
                            <h6 style={{ color: '#5a5a72', }} className="mb-4 flex items-center  font-semibold  md:justify-start">
                                About
                            </h6>

                            <p className="mb-4">
                                <a href="#!" className="text-neutral-600 light:text-neutral-200">
                                    About IEO
                                </a>
                            </p>
                            <p className="mb-4">
                                <a href="#!" className="text-neutral-600 light:text-neutral-200">
                                    Careers
                                </a>
                            </p>
                            <p className="mb-4">
                                <a href="#!" className="text-neutral-600 light:text-neutral-200">
                                    Press & Media
                                </a>
                            </p>
                            <p className="mb-4">
                                <a href="#!" className="text-neutral-600 light:text-neutral-200">
                                    Discovers
                                </a>
                            </p>

                        </div>
                        {/* Products section */}
                        <div className="">
                            <h6 style={{ color: '#5a5a72' }} className="mb-4 flex  font-semibold   md:justify-start">
                                Services & support
                            </h6>
                            <p className="mb-4">
                                <a href="#!" className="text-neutral-600 light:text-neutral-200">
                                    Become a university partner
                                </a>
                            </p>
                            <p className="mb-4">
                                <a href="#!" className="text-neutral-600 light:text-neutral-200">

                                    University partner support
                                </a>
                            </p>
                            <p className="mb-4">
                                <a href="#!" className="text-neutral-600 light:text-neutral-200">

                                    Contact us
                                </a>
                            </p>
                        </div>
                        {/* Useful links section */}
                        <div className="">
                            <h6 style={{ color: '#5a5a72' }} className="mb-4 flex  font-semibold   md:justify-start">
                                Our planet
                            </h6>
                            <p className="mb-4">
                                <a href="#!" className="text-neutral-600 light:text-neutral-200">
                                    B-Corp
                                </a>
                            </p>
                            <p className="mb-4">
                                <a href="#!" className="text-neutral-600 light:text-neutral-200">
                                    Our scholarship project
                                </a>
                            </p>
                            <p className="mb-4">
                                <a href="#!" className="text-neutral-600 light:text-neutral-200">
                                    Our tree project
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-neutral-600 light:text-neutral-200">
                                    Environment & sustainability

                                </a>
                            </p>
                        </div>
                        {/* Contact section */}
                        <div style={{ width: '100%' }} >
                            <h6 style={{ color: '#5a5a72' }} className="mb-4 flex font-semibold   md:justify-start">
                                Our partnerships
                            </h6>
                            <div className='className="mb-4 flex items-center justify-center md:justify-start"' style={{ maxWidth: '70%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap' }}>
                                <img style={{ width: '35%', marginRight: '5%' }} src={partner1} />
                                <img style={{ width: '35%', marginLeft: '5%' }} src={partner2} />
                                <img style={{ width: '35%', marginRight: '5%' }} src={partner3} />
                                <img style={{ width: '35%', marginLeft: '5%' }} src={partner4} />

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/*Copyright section*/}
            <div className="footer_bottom_bar_wrap bg-neutral-200 p-6" style={{ background: 'var(--primary-color)' }}>
                <div className='footer_bottom_bar_main'>
                    <div className='footer_bottom_bar_left'>
                        <p>
                            © IEO Ltd 2023. A UK Registered Company. Design & Developed By Cloud Lab Pvt Ltd .</p>

                    </div>
                    <div className='footer_bottom_bar_right'>
                        <span style={{ margin: '0px 10px' }}><BsFacebook size={25} className='footer_bottombar_icons' /></span>
                        <span style={{ margin: '0px 10px' }}><BsInstagram size={25} className='footer_bottombar_icons' /></span>
                        <span style={{ margin: '0px 10px' }}><BsYoutube size={25} className='footer_bottombar_icons' /></span>
                        <span style={{ margin: '0px 10px' }}><BsTwitter size={25} className='footer_bottombar_icons' /></span>
                    </div>
                </div>
            </div>
        </footer>

    )
}
