"use client"
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  // Form validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  // Form submission handler
  const handleSubmit = (values: any, { setSubmitting, resetForm }: any) => {
    console.log("Form values", values);
    setTimeout(() => {
      // Simulate form submission
      alert("Form Submitted Successfully!");
      setSubmitting(false);
      resetForm();
    }, 1000);
  };

  return (
    <div className="h-full w-full bg-blue-100 p-6 md:p-12 rounded-lg shadow-lg">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
      {/* Contact Form Section */}
      <div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-800 mb-6">
          Get In Touch
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-gray-600 mb-8">
          We are here for you! How can we help?
        </p>
  
        <Formik
  initialValues={{ name: "", email: "", message: "" }}
  validationSchema={validationSchema}
  onSubmit={handleSubmit}
>
  {({ isSubmitting }) => (
    <Form className="space-y-4">
      <div>
        <Field
          name="name"
          type="text"
          placeholder="Enter your name"
          className="w-full p-4 sm:p-5 border border-gray-500 text-lg rounded-lg focus:border-blue-500 hover:border-gray-400"
        />
        <ErrorMessage
          name="name"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div>
        <Field
          name="email"
          type="email"
          placeholder="Enter your email address"
          className="w-full p-4 sm:p-5 border border-gray-500 text-lg rounded-lg focus:border-blue-500 hover:border-gray-400"
        />
        <ErrorMessage
          name="email"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div>
        <Field
          name="message"
          as="textarea"
          placeholder="Go ahead, we are listening..."
          className="w-full p-4 sm:p-5 border border-gray-500 text-lg rounded-lg h-24 focus:border-blue-500 hover:border-gray-400"
        />
        <ErrorMessage
          name="message"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-lg sm:text-xl md:text-2xl lg:text-2xl text-white sm:h-13 px-4 py-4 sm:py-6 rounded-lg w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </Form>
  )}
</Formik>
      </div>

      {/* Contact Info Section */}
      <div className="flex flex-col justify-center space-y-4 text-gray-600 p-4 sm:p-6 lg:p-8">
  <div className="flex items-center space-x-4">
    <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif">
      Quantechbit, we believe that our success is measured by the success of our clients. We take pride in seeing our clients' businesses grow and thrive, and we are honored to have played a role in their success. If you're interested in working with Quantechbit, we'd love to hear from you. Contact us today to discuss your project requirements and let's create something great together.
    </span>
  </div>

  <div className="flex items-start space-x-3">
    <span className="text-blue-600">
      <FontAwesomeIcon icon={faLocationDot} className="text-lg sm:text-xl md:text-2xl lg:text-3xl" />
    </span>
    <span className="text-base sm:text-lg md:text-xl lg:text-2xl">
      102, Gupta Garden,<br />Near Madhumillan Square,<br />Indore, 452001
    </span>
  </div>

  <div className="flex items-center space-x-3">
    <span className="text-blue-600">
      <FontAwesomeIcon icon={faPhone} className="text-lg sm:text-xl md:text-2xl lg:text-3xl" />
    </span>
    <span className="text-base sm:text-lg md:text-xl lg:text-2xl">+91-9111182311, +91-7805044223</span>
  </div>

  <div className="flex items-center space-x-3">
    <span className="text-blue-600">
      <FontAwesomeIcon icon={faEnvelope} className="text-lg sm:text-xl md:text-2xl lg:text-3xl" />
    </span>
    <span className="text-base sm:text-lg md:text-xl lg:text-2xl">support@quantechbit.com</span>
  </div>

  {/* Social Icons */}
  <div className="flex space-x-4 mt-4">
    <a href="#" className="text-blue-600">
      <FontAwesomeIcon icon={faFacebook} className="text-lg sm:text-xl md:text-2xl lg:text-3xl" />
    </a>

    <a href="#" className="text-blue-600">
      <FontAwesomeIcon icon={faInstagram} className="text-lg sm:text-xl md:text-2xl lg:text-3xl" />
    </a>

    <a href="#" className="text-blue-600">
      <FontAwesomeIcon icon={faTwitter} className="text-lg sm:text-xl md:text-2xl lg:text-3xl" />
    </a>
  </div>
</div>
    </div>
  </div>
  
  );
};

export default Footer;
