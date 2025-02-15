"use client"
import {useState} from 'react';
import React from 'react'
import Image from 'next/image';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email:"",
    subject:"",
    message:""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(!formData.name || !formData.email || !formData.message){
      alert("please fill in all fields!");
      return;
    }

    setFormData({name: '', email: '', subject:'', message:''});
    setIsSubmitted(true);
  };
  return (
    <div>
        <div className='flex flex-col md:flex-row lg:flex-row'>
        <div>
            <h1 className='text-2xl text-secondary text-start px-14 font-bold mt-8'>Contact Us</h1>
            <p className='text-sm md:text-md lg:text-md text-start font-normal px-14 text-slate-400 mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices<br/>
             mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae
             <br/> eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
        </div>
        <div>
            <h1 className='text-2xl text-secondary text-start px-14 font-bold mt-8'>Contact Way</h1>
            <Image src="/Image/contactus.svg" alt="contact image" width={400} height={400} className='px-12 mt-3'/>
        </div>
        </div>
      <h1 className='text-3xl text-start font-bold px-14 mt-8 text-secondary'>Get In Touch</h1>
      <p className='text-sm md:text-md lg:text-md text-start font-normal px-14 text-slate-400 mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices 
        <br/> tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
        <div className='flex flex-col md:flex-row lg:flex-row'>
      <form onSubmit={handleSubmit} className='w-full max-w-xl mt-3'>
              <div className='flex flex-col gap-1 p-1 ml-0.5'>
              <label htmlFor='name'>Your Name</label>
              <input 
              type='text'
              className='h-[50px] w-[350px] bg-gray-400 border border-black rounded-md p-1' 
              id='name' 
              value={formData.name}
              onChange={handleChange}
              required
              />
            </div>
            <div className='flex flex-col gap-1 p-1 ml-0.5'>
            <label htmlFor='email'>Your Email</label>
              <input 
              type='email'
              className='h-[50px] w-[350px] bg-gray-400 border border-black rounded-md p-1' 
              id='email' 
              value={formData.email}
              onChange={handleChange}
              required
              />
            </div>
           
            <div className='flex flex-col gap-1 p-1 ml-0.5'>
            <label htmlFor='msg'>Type Your Message</label>
            <textarea
            className='h-[150px] w-[350px] bg-gray-400 border border-black rounded-md p-1' 
            id='message'
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            ></textarea>
            </div>
            <button 
            type="submit" 
            className='bg-green-800 hover:bg-green-500 text-black hover:text-white text-xl ml-14 p-2 mt-2 mb-6 border rounded-md cursor-pointer'
            >
            Submit
            </button>
            </form>

            {isSubmitted && (
              <div className='mt-4 pl-12 text-orange-600 font-serif'>
                Thankyou for contacting us!<br /> We will get back to you soon.
                </div>
            )}
 
      <div>
        <Image src="/Image/contact.svg" alt="contact image" width={400} height={400} className="px-2"/>
      </div>
      </div>
    </div>
  )
}

export default ContactPage;
