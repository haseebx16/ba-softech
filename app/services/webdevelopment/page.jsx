"use client"

import React from 'react'
import Header from '@/app/Components/Navbar'
import { font } from '@/app/Components/fonts/font'
import ParticlesCX from '@/app/Components/Particles'
import emailjs from "emailjs-com"
import { useState } from 'react'
import { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from '@/app/Components/Footer'
import WhyChooseUs from '@/app/Components/WhyChooseUs'
import Client from '@/app/Components/Client'
import Connect from '@/app/Components/Connect'
import ContactModal from '@/app/Components/ContactModal'

const page = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    
      const [isSubmitting, setIsSubmitting] = useState(false);
    
      useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        const { name, email, phone, message } = formData;
    
        if (!name || !email || !phone || !message) {
          alert("All fields are required!");
          setIsSubmitting(false);
          return;
        }
    
        emailjs
          .send(
            "service_zfdtt1k", // Replace with your EmailJS service ID
            "template_ssqyv8w", // Replace with your EmailJS template ID
            {
              name,
              email,
              phone,
              message,
            },
            "_09CMb0W-8XfBbNAC" // Replace with your EmailJS public key
          )
          .then(() => {
            alert("Your message was sent successfully!");
            setFormData({ name: "", email: "", phone: "", message: "" });
            setIsSubmitting(false);
          })
          .catch((error) => {
            console.error("EmailJS Error:", error);
            alert("Failed to send the message. Please try again later.");
            setIsSubmitting(false);
          });
      };
    
      const [ isModalOpen, setIsModalOpen ] = useState(false);

      const openModal = () => {
        setIsModalOpen(true);
      }

      const closeModal = () => {
        setIsModalOpen(false);
      }

  return (
    <div>
        <Header/>
       
    <section className={`${font.className} relative bg-black min-h-[18rem] p-12 overflow-hidden`}>
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <ParticlesCX className="absolute inset-0 w-full h-full" />
        </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="text-white max-w-2xl">
            <h2 className="font-oswald text-lg md:text-xl mb-4 text-cards uppercase font-medium tracking-wider">
              B.A Softech - Crafting Excellence, Providing Growth
            </h2>
            <h1 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wide">
              Web Development Services
            </h1>
          </div>
          <div className='flex justify-center items-center'>
            <img src='/web.png' className='w-auto h-60 md:h-96'/>
          </div>
        </div>
      </div>
    </section>
    <div
      className={`${font.className} md:p-16 bg-black overflow-hidden p-8 flex flex-col md:flex-row md:justify-center md:items-center`}
    >
      <section className="md:w-[50%] w-[100%] z-20 md:mr-12 flex flex-col justify-center items-center">
      <div>
          <p className="md:text-5xl text-2xl uppercase text-cards">Hire the best Website Developers</p>
          <p className="text-3xl text-white font-bold mt-6">
          Transform Your Business with Top-Notch Development Skills - Hire the Best Developers Today
          </p>
          
        </div>
      </section>
      <section className="md:w-[50%] md:pt-0 pt-12 z-20 w-full">
        <div>
          
          <p className="text-md text-white mt-6">
          Are you in need of a skilled Developer or team to bring your web application idea to life? Look no further than B.A Softech.
          </p>
          <p className="text-md text-white  mt-6">
          As a leading development agency, we have a network of experienced Web Developers that we can connect you with. No matter what your needs are, we can help you find the right fit for your project.
          </p>
          <p className="text-md text-white mt-6">
          With our dedicated model, you’ll have a dedicated Developer or team working on your project full-time, ensuring that your project stays on track and on schedule. And with our flexible hiring options, you can choose the level of support that best fits your needs and budget.
          </p>
          <button onClick={openModal} className="btn-primary bg-cards text-black hover:text-white hover:bg-card1 mt-6">
            Let's Connect
          </button>
          <ContactModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </section>
    </div>
    <WhyChooseUs/>
    <Client/>
    <Connect/>
        <Footer/>
    </div>
  )
}

export default page