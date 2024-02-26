'use client'
import { sendEmail } from '@/utils/emailSender';
import React from "react";
import { useForm } from 'react-hook-form';

export type FormData = {
    name: string;
    email: string;
    message: string;
}

const Contacts: React.FC = (): JSX.Element => {
    const {register, handleSubmit} = useForm<FormData>();

    function onSubmit(data: FormData) {
        sendEmail(data);
    }

    return (
        <section className="w-full  my-14">
            <h1 className="text-color-dark dark:text-color-light font-francois-one text-7xl ">Contact</h1>
            <h2 className='text-color-dark dark:text-color-light font-fira-code text-md mt-7'>You can use the form below, or just shoot me an email directly to <span className='font-bold'>luisribeirotech@gmail.com</span></h2>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-14'>
                <div className='mb-7'>
                    <input type="text" placeholder='Full Name' className='w-full rounded-md border border-gray-300 dark:bg-color-light bg-color-dark py-3 px-6 text-gray-700 outline-none focus:border-purple-500 focus:shadow-md font-fira-code font-medium text-base' {...register('name', {required: true})} />
                </div>
                <div className='mb-7'>
                    <input type="email" placeholder='example@domain.com' className='w-full rounded-md border border-gray-300 dark:bg-color-light bg-color-dark py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md font-fira-code' {...register('email', {required: true})} />
                </div>
                <div className='mb-7'>
                    <textarea rows={4} placeholder='Type your message' className='w-full resize-none rounded-md border border-gray-300 bg-color-dark dark:bg-color-light py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md font-fira-code' {...register('message', {required: true})}></textarea>
                </div>
                <div>
                    <button className='hover:shadow-form rounded-md bg-color-dark dark:bg-color-light text-color-light dark:text-color-dark py-3 px-8 text-base font-semibold outline-none'>
                        Send Message
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Contacts