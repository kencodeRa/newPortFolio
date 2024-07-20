import React from 'react'

export default function Contacts() {
    return(
        <section id='contact' className='relative'>
            <div className='container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap'>
                <div className='lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
                    <iFrame
                        width = "100%"
                        height = "100%"
                        title = "map"
                        className = "absolute inset-0"
                        frameBorder = {0}
                        marginHeigth = {0}
                        marginWidth = {0}
                        style = {{ filter: "opacity(0.7"}}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31632.617481382527!2d125.71601065531326!3d7.6748514599113005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fea4c5e74f84c7%3A0x7c09410482986312!2sKipalili%2C%20Davao%20del%20Norte!5e0!3m2!1sen!2sph!4v1721450134396!5m2!1sen!2sph"
                        />
                        <div className='bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md'>
                            <div className='lg:w-1/2 px-6'>
                                <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
                                    ADDRESS
                                </h2>
                                <p classname='mt-1'>
                                    Prk 3, Kipalili <br />
                                    San Isidro, Davao del Norte
                                </p>
                            </div>
                            <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
                                <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
                                    EMAIL
                                </h2>
                                <a className='text-indigo-400 leading-relaxed'>
                                    coderakenneth6@gmail.com
                                </a>
                                <h2 className='title-font font-semibold text-white tracking-widest text-xs mt-4'>
                                    PHONE
                                </h2>
                                <p className='leading-relaxed'>0956-415-1533</p>
                            </div>
                        </div>
                </div>
                <form
                    netlify
                    name='contact'
                    className='lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'>
                    <h2 className='text-white sm:text-4X1 text-3x1 mb-1 font-medium title-font'>
                        Hire Me
                    </h2>
                    <p className='leading-relaxed mb-5'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                        suscipit officia aspernatur veritatis. Asperiores, aliquid?
                    </p>
                    <div className='relative mb-4'>
                        <label htmlFor='name' className='leading-7 text-sm text-gray-400'>
                            Name
                        </label>
                    </div>

                </form>
            </div>
        </section>
    );
}