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
import ContactModal from '@/app/Components/ContactModal'
import Client from '@/app/Components/Client'
import Connect from '@/app/Components/Connect'

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
      
      const [ isModalOpen, setIsModalOpen ] = useState(false)

      const openModal = () => {
        setIsModalOpen(true)
      }

      const closeModal = () => {
        setIsModalOpen(false)
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
              Payment Merchant Services We Offer
            </h1>
          </div>
          <div>
            <img src='/payment.png' className='w-[60rem] ml-12 h-96'/>
          </div>
        </div>
      </div>
    </section>
    <div
      className={`${font.className} md:p-16 bg-black overflow-hidden p-8 flex flex-col md:flex-row md:justify-center md:items-center`}
    >
      <section className="md:w-[50%] w-[100%] z-20 md:mr-12 flex flex-col justify-center items-center">
      <div>
          <p className="md:text-5xl text-2xl uppercase text-cards">Simplify Payments with Our Merchant Solutions</p>
          <p className="text-3xl text-white font-bold mt-6">
          Transform Your Business with Our Payment Merchants Services
          </p>
          
        </div>
      </section>
      <section className="md:w-[50%] md:pt-0 pt-12 z-20 w-full">
        <div>
          
          <p className="text-md text-white mt-6">
          Unlock seamless payment experiences with our advanced merchant service. Whether you're running a small business or managing enterprise-level transactions, our solution ensures fast, secure, and hassle-free payment processing to meet your business needs.
          </p>
          <p className="text-md text-white mt-6">
          Our payment merchant service is built for businesses of all sizes. Enjoy end-to-end encryption, multi-currency support, and real-time analytics, empowering you to focus on growth while we handle the complexities of payment processing.
          </p>
          <button onClick={openModal} className="btn-primary bg-cards text-black hover:text-white hover:bg-card1 mt-6">
            Let's Connect.
          </button>
          <ContactModal isOpen={isModalOpen} onClose={closeModal}/>
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