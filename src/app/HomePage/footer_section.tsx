"use client"
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                  className="w-full p-4 sm:p-5 border text-lg rounded-lg"
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
                  className="w-full p-4 sm:p-5 border text-lg rounded-lg"
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
                  className="w-full p-4 sm:p-5 border rounded-lg h-24"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
  
              <button
                type="submit"
                className="bg-blue-500 text-lg sm:text-xl md:text-2xl lg:text-2xl text-white h-12 sm:h-13 px-6 py-4 sm:py-6 rounded-lg w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
  
      {/* Contact Info Section */}
      <div className="flex flex-col justify-center space-y-4 text-gray-600">
        <div className="flex items-center space-x-3">
          <span className="text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 11l7-7 7 7M5 19l7-7 7 7"
              />
            </svg>
          </span>
          <span className="text-base sm:text-lg md:text-xl lg:text-2xl">
            DHA Phase II Extension, Karachi
          </span>
        </div>
  
        <div className="flex items-center space-x-3">
          <span className="text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7 4 7-4m-7 4v8m7-8v8"
              />
            </svg>
          </span>
          <span className="text-base sm:text-lg md:text-xl lg:text-2xl">021-358-681</span>
        </div>
  
        <div className="flex items-center space-x-3">
          <span className="text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12v1.5m0 6.5a4.5 4.5 0 11-9 0v-6.5m9 0V7.5A4.5 4.5 0 103 7.5v6.5"
              />
            </svg>
          </span>
          <span className="text-base sm:text-lg md:text-xl lg:text-2xl">abc@gmail.com</span>
        </div>
  
        {/* Social Icons */}
        <div className="flex space-x-4 mt-4">
          <a href="#" className="text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 8a6 6 0 10-12 0 6 6 0 0012 0z"
              />
            </svg>
          </a>
  
          <a href="#" className="text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2a10 10 0 100 20 10 10 0 000-20zm3 15.2a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </a>
  
          <a href="#" className="text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 8c0 3.866-2.582 7-7 7m7-7v3m-7-3H9m0 0h6m-6 0v4"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Footer;
