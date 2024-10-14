"use client"
import React, { useState } from "react";
import Modal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

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
  const handleSubmit = async (values: any, { setSubmitting, resetForm }: any) => {
    console.log("Form values", values);

    try {
      // Make API call here
      const response = await fetch("/api/route", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.status === "Success") {
        setIsSuccess(true);
        setModalMessage("Form Submitted Successfully!");
      } else {
        setIsSuccess(false);
        setModalMessage("There was a problem submitting the form.");
      }
    } catch (error) {
      setIsSuccess(false);
      setModalMessage("Submission failed! Please try again.");
    } finally {
      setModalIsOpen(true);
      setSubmitting(false);
      resetForm();
    }
  };


  return (
    <div className="h-full w-full bg-blue-100 p-6 md:p-12 sm:p-2 lg:p-14 lg:m-14 align-middle rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {/* Contact Form Section */}
        <div>
          <h2 className="text-3xl sm:text-xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-base md:text-xl lg:text-3xl text-gray-600 mb-4">
            We are here for you! How can we help?
          </p>

          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-3">
                <div>
                  <Field
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-2 lg:p-2 sm:p-2 border border-gray-500 rounded-md focus:border-blue-500 hover:border-gray-400"
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
                    className="w-full p-2 lg:p-2 sm:p-2 border border-gray-500 text-lg rounded-lg focus:border-blue-500 hover:border-gray-400"
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
                    className="w-full p-2 lg:p-2 sm:p-2 border border-gray-500 text-lg rounded-lg focus:border-blue-500 hover:border-gray-400"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-lg sm:text-xl md:text-xl lg:text-xl text-white sm:h-11 px-1 py-3 sm:py-1 rounded-lg w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Contact Info Section */}
        <div className="flex flex-col justify-center space-y-1 text-gray-600 p-3 sm:p-2 lg:p-4">
          <div className="flex items-start space-x-2">
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl fill-black font-serif">
              Quantechbit, we believe that our success is measured by the success of our clients. We take pride in seeing our clients' businesses grow and thrive, and we are honored to have played a role in their success. If you're interested in working with Quantechbit, we'd love to hear from you. Contact us today to discuss your project requirements and let's create something great together.
            </span>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-blue-600">
              <FontAwesomeIcon icon={faLocationDot} className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl pt-2" />
            </span>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl">
              102, Gupta Garden,<br />Near Madhumillan Square,<br />Indore, 452001
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-blue-600">
              <FontAwesomeIcon icon={faPhone} className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl pt-2" />
            </span>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl">+91-9111182311, +91-7805044223</span>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-blue-600">
              <FontAwesomeIcon icon={faEnvelope} className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl pt-2" />
            </span>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl">support@quantechbit.com</span>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-5 lg:mt-12 sm:mt-3 lg:pt-3 justify-start">
            <a href="#" className="text-blue-600 border-2 border-black rounded-lg p-3 hover:bg-blue-500 hover:border-yellow-500 transition-colors duration-300" style={{ width: '3rem', height: '3rem' }}>
              <FontAwesomeIcon icon={faFacebook} className="w-full h-full" />
            </a>

            <a href="#" className="text-blue-600 border-2 border-black rounded-lg p-3 hover:bg-blue-500 hover:border-yellow-500 transition-colors duration-300" style={{ width: '3rem', height: '3rem' }}>
              <FontAwesomeIcon icon={faInstagram} className="w-full h-full" />
            </a>

            <a href="#" className="text-blue-600 border-2 border-black rounded-lg p-3 hover:bg-blue-500 hover:border-yellow-500 transition-colors duration-300" style={{ width: '3rem', height: '3rem' }}>
              <FontAwesomeIcon icon={faTwitter} className="w-full h-full" />
            </a>
          </div>

        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: isSuccess ? '#d4edda' : '#f8d7da',
            color: isSuccess ? '#155724' : '#721c24',
            padding: '20px',
            borderRadius: '10px',
            border: isSuccess ? '2px solid #c3e6cb' : '2px solid #f5c6cb',
          },
        }}
      >
        <h2>{isSuccess ? "Success!" : "Error"}</h2>
        <p>{modalMessage}</p>
        <button onClick={() => setModalIsOpen(false)} style={{ marginTop: "10px" }}>
          Close
        </button>
      </Modal>
    </div>

  );
};

export default Footer;
