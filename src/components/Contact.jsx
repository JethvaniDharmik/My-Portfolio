import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BiLogoGmail } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { IoLogoLinkedin } from 'react-icons/io5';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import emailjs from 'emailjs-com';

const socialLinks = [
  { icon: BiLogoGmail, url: "https://mail.google.com/mail/?view=cm&fs=1&to=dharmikjethwani777@gmail.com" },
  { icon: IoLogoLinkedin, url: "https://www.linkedin.com/in/dharmik-jethwani-073109313" },
  { icon: BsGithub, url: "https://github.com/JethvaniDharmik" },
];

export default function Contact() {
  const ref = useRef(null);
  const form = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Send email function
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_5wjj7ri',   // Replace with your EmailJS Service ID
      'template_wn7y22v',  // Replace with your EmailJS Template ID
      form.current,
      'HZKrJpL8mBUJIYQpw'  // Replace with your EmailJS Public Key
    ).then(
      () => {
        alert("✅ Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("❌ Failed to send message. Try again later.");
        console.log(error.text);
      }
    );
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className='lg:my-16 lg:px-28 my-8 px-5'
      id='contact'
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className='text-2xl lg:text-4xl text-center'
      >
        Contact <span className='font-extrabold'>Me</span>
      </motion.h2>

      <div className='flex justify-between items-center mt-8 lg:mt-16 flex-col lg:flex-row'>
        {/* Form Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-[40%]'
        >
          <form ref={form} onSubmit={sendEmail} className='w-full space-y-3 lg:space-y-5'>
            <input
              name="name"
              className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full'
              type="text"
              placeholder='Your name'
              required
            />
            <input
              name="email"
              className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full'
              type="email"
              placeholder='Email'
              required
            />
            <input
              name="website"
              className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full'
              type="text"
              placeholder='Your website (If exists)'
            />
            <textarea
              name="message"
              className='resize-none border-2 px-5 py-3 h-32 border-black placeholder:text-[#71717A] rounded text-sm w-full'
              placeholder='How can I help?*'
              required
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              type='submit'
              className='bg-black justify-center w-fit lg:w-auto lg:flex-1 hover:shadow-lg text-white px-3 py-2 rounded flex items-center gap-x-3 font-medium'
            >
              Get In Touch
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-1/2'
        >
          <div className='font-extrabold text-2xl lg:text-5xl mt-5 lg:mt-0 space-y-1 lg:space-y-3'>
            <h2>Let's <span className='text-white' style={{ WebkitTextStroke: '1px black' }}>talk</span> for</h2>
            <h2>Something special</h2>
          </div>

          <p className='text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-6'>
            I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
          </p>

          <div className='font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-2 lg:gap-4'>
            <motion.a
              whileHover={{ x: 5 }}
              className='flex items-center gap-2 group'
              href="mailto:dharmikjethwani777@gmail.com"
            >
              <span className='border-2 transition-all border-transparent group-hover:border-black rounded-full p-1'>
                <IoMdMail className="w-4 h-4 lg:w-5 lg:h-5" />
              </span>
              dharmikjethwani777@gmail.com
            </motion.a>

            <motion.a
              whileHover={{ x: 5 }}
              className='flex items-center gap-2 group'
              href="tel:8128550710"
            >
              <span className='border-2 transition-all border-transparent group-hover:border-black rounded-full p-[5px]'>
                <FaPhone className="w-3 h-3 lg:w-4 lg:h-4" />
              </span>
              8128550710
            </motion.a>

            {/* Social Links */}
            <div className='flex items-center gap-x-2 lg:gap-x-5 mt-4'>
              {socialLinks.map(({ icon: Icon, url }, index) => (
                <motion.a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                  whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
