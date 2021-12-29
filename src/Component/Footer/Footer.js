import React from 'react';
import './footer.css'
const Footer = () => {
    return (
        <>
            <footer className="text-white body-font bg">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <h1 className='footer-h1 text-4xl'>THERANAUTILIS</h1>
                    </div>
                    <div className="flex-grow flex justify-between flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-xl mb-3">Company</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-white text-sm hover:text-gray-800">About Us</a>
                                </li>
                                <li>
                                    <a className="text-white text-sm hover:text-gray-800">Contact Us</a>
                                </li>
                                <li>
                                    <a className="text-white text-sm hover:text-gray-800">FAQs</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-xl mb-3">Contact</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-white text-sm hover:text-gray-800">theranautilus@gmail.com</a>
                                </li>
                                <li>
                                    <a className="text-white text-sm hover:text-gray-800">030989989</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-80 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-xl mb-3">Address</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-white text-sm hover:text-gray-800">SF-03, Center for Nanoscience and Engineering,Indian Institute of Science, Bangalore – 560012
                                    </a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container mx-auto py-4 px-5 flex justify-between">
                        <div>
                            <p className="text-gray-500 text-sm sm:text-left lg:inline">Terms and conditions</p>
                            <span className='text-gray-500 lg:ml-3 sm:mx-auto text-sm sm:text-center  inline'>Privacy policy</span>
                        </div>
                        <p className='text-gray-500 text-sm sm:text-right'>Copyrights @ 2021</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;