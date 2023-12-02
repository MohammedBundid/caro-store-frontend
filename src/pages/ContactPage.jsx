import React from 'react';
import { useForm } from 'react-hook-form';
import bgImage3 from '../assets/bg-3.jpg';

const Contacts = () => {
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();
    const emailValue = watch('email');
    const textareaValue = watch('comment');

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:4000/api/contact/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log('Form submitted successfully');
            } else {
                console.error('Error submitting form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div
            className="bg-cyan-100 min-h-screen bg-center bg-cover"
            style={{ backgroundImage: `url(${bgImage3})` }}
        >
            <div className="container mx-auto p-4 min-h-full">
                <h1 className="text-4xl font-bold text-teal-700 mt-26 text-center">Reach us</h1>
                <h2 className='text-4xl font-bold text-teal-700 mt-26 text-center'>form submitted</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='bg-teal-700 mx-auto px-2 py-4 w-3/4 md:w-1/2 h-1/2 items-center flex justify-center flex-col rounded-md'>
                    <label htmlFor="email" className='text-2xl capitalize font-bold text-white'>
                        Email address
                    </label>
                    <input
                        type="email"
                        id="email"
                        className={`py-2 px-2 rounded-sm border-0 outline-none mb-4 ${errors.email ? 'border-red-500' : ''}`}
                        placeholder='Email address'
                        {...register('email', { required: 'Email is required' })}
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                    <label htmlFor="comment" className='text-2xl capitalize font-bold text-white'>
                        Comment
                    </label>
                    <textarea
                        id="comment"
                        className={`py-2 px-6 rounded-sm border-0 outline-none mb-4 ${errors.comment ? 'border-red-500' : ''}`}
                        placeholder='Enter your questions or comments'
                        {...register('comment', { required: 'Comment is required' })}
                    ></textarea>
                    {errors.comment && <p className="text-red-500">{errors.comment.message}</p>}

                    <input
                        type="submit"
                        value="Submit"
                        className='py-2 px-6 rounded-sm bg-slate-700 hover:cursor-pointer mt-4'
                    />
                </form>
            </div>
        </div>
    );
};

export default Contacts;
