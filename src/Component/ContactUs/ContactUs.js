import React from 'react';
import './contactUs.css'
const ContactUs = () => {
    return (
        <>
            <section className="text-white body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className='lg:ml-28'>
                        <h1 className='text-2xl text-indigo-400 mb-4'>Contact</h1>
                        <div className='mb-2'>
                            <span className='text-sm text-indigo-400'>Phone Number</span><br />
                            <p className='text-md text-gray-300'>030989989</p>
                        </div>
                        <div className='mb-2'>
                            <span className='text-sm text-indigo-400'>Email</span><br />
                            <p className='text-md text-gray-300'>theranautilus@gmail.com</p>
                        </div>
                        <div className='mb-2'>
                            <span className='text-sm text-indigo-400'>Address</span><br />
                            <p className='text-md mb-6 text-gray-300'>SF-03, Center for Nanoscience and <br /> Engineering,Indian Institute of Science,<br /> Bangalore – 560012</p>
                        </div>
                        <iframe width="380px" height="251px" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" ></iframe>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2  flex flex-col md:ml-auto w-full md:py-8 mt-8 lg:mr-16 md:mt-0">
                        <h2 className="text-indigo-400 text-2xl mb-4 font-medium title-font">Enquire</h2>
                        <div className="relative mb-4">
                            <input type="text" placeholder='Name' id="name" name="name" className="w-full bg-transparent border-b border-gray-300 text-base outline-none text-white py-3" />
                        </div>
                        <div className="relative mb-4">
                            <input type="email" placeholder='Mobile Number' id="email" name="email" className="w-full bg-transparent border-b border-gray-300 text-base outline-none text-white py-3" />
                        </div>
                        <div className="relative mb-4">
                            <input type="email" id="email" placeholder='Email Id' name="email" className="w-full bg-transparent border-b border-gray-300 text-base outline-none text-white py-3" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-400">Query</label>
                            <textarea id="message" name="message" className="w-full bg-transparent border border-gray-300 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button className="text-white bg-btn border-0 py-2 px-6 focus:outline-none rounded text-lg">Submit</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;