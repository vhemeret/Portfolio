import React from 'react'
import ShimmerButton from './ui/ShimmerButton'

function Contact() {
    return (
        <section id='contact' className='z-10 flex pt-40 flex-col justify-center items-center md:w-4/5 lg:w-3/5 xl:w-2/5'>
            <div className='text-white md:text-3xl lg:text-4xl sm:text-xl font-bold'>
                <h1>Contactez-moi <span className='text-purple'>!</span></h1>
            </div>

            <div className='mt-20 flex gap-4 flex-col w-full justify-center p-2'>
                <div className='gap-2 flex'>
                    <input className='rounded-2xl bg-black-200 border-slate-900 border-2 focus:outline-none text-white p-1 px-2 w-1/2' placeholder='nom *'></input>
                    <input className='rounded-2xl bg-black-200 border-slate-900 border-2 focus:outline-none text-white p-1 px-2 w-1/2' placeholder='tel'></input>
                </div>
                <input className='rounded-2xl bg-black-200 border-slate-900 border-2 focus:outline-none text-white p-1 px-2 w-full' placeholder='e-mail *'></input>
                <textarea className='rounded-2xl bg-black-200 border-slate-900 border-2 focus:outline-none text-white p-1 px-2 w-full min-h-32' placeholder='message *'></textarea>
            </div>
                <ShimmerButton title='Envoyer' />
        </section>
    )
}

export default Contact