import React, { useState } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import ReactModal from 'react-modal';
import { TextGenerateEffect } from '../shared/TextGenerateEffect';
import { useRouter } from 'next/router';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const validateForm = (values) => {
  const errors = {};
  const MAX_TEXT_LENGTH = 100;
  const Name = values.name;

  if (Name.length > MAX_TEXT_LENGTH) {
    errors.name = `Name must be ${MAX_TEXT_LENGTH} characters or less`;
    console.log(errors.name);
  }

  if (!values.name) {
    errors.name = 'Name is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.phone) {
    errors.phone = 'Phone is required';
  }

  return errors;
};

const ContactForm = () => {
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpenone, setModalIsOpenone] = useState(false);

  const handleSubmit = async (values) => {
    console.log(values);
    // Handle form submission logic her
    try {
      const response = await fetch('/api/SentMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
        }),
      });
      console.log(response.ok);
      if (response.ok) {
        setModalIsOpen(true);
      } else {
        setModalIsOpenone(true);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    router.push('/');
  };

  const closeModalone = () => {
    setModalIsOpenone(false);
  };

  return (
    <div className="w-full lg:w-[50%] flex flex-col md:flex-row items-center">
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <form
            className="flex flex-col px-0 lg:px-10 w-full"
            onSubmit={handleSubmit}
          >
            <TextGenerateEffect
              words={`Send a Message`}
              className="text-left text-[40px] md:text-4xl lg:text-5xl"
            />

            <div className="mb-4">
              <label htmlFor="name" className="block mb-1">
                Name:
                <span className="text-gray-500 text-sm ml-1">(required)</span>
              </label>
              <Field
                type="name"
                id="name"
                name="name"
                className="w-full p-2 text-black border border-4 border-gray-300 bg-white py-5 border rounded-xl"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">
                Email:
                <span className="text-gray-500 text-sm ml-1">(required)</span>
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-full p-2 text-black border border-4 border-gray-300 bg-white py-5 border rounded-xl"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block mb-1">
                Phone:
                <span className="text-gray-500 text-sm ml-1">(required)</span>
              </label>
              <Field
                type="text"
                id="phone"
                name="phone"
                className="w-full p-2 text-black border border-4 border-gray-300 bg-white py-5 border rounded-xl"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block mb-1">
                Message:
                <span className="text-gray-500 text-sm ml-1">(required)</span>
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                className="w-full p-2 text-black border border-4 border-gray-300 bg-white py-5 border rounded-xl"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500"
              />
            </div>

            <button
              type="submit"
              className="bg-primaryColor w-28 text-white paragraph-fonts py-2 px-4 mb-8 md:mb-0 md:py-4 md:px-8
                           shadow-black items-center rounded-md justify-center shadow-md hover:scale-105 duration-300"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        className="flex items-center justify-center w-full h-full"
      >
        {/* Add your modal content here */}
        <div className="flex flex-col items-center justify-center bg-primaryColor w-[350px] h-[200px] p-2 border rounded-sm ">
          <p className="text-md lg:text-xl mb-5 text-center text-white">
            Your Enquiry form Submitted Successfully.
          </p>
          <button
            onClick={closeModal}
            className="p-2 bg-primaryColor border text-white rounded-sm"
          >
            Close
          </button>
        </div>
      </ReactModal>

      <ReactModal
        isOpen={modalIsOpenone}
        onRequestClose={closeModalone}
        contentLabel="Modal Two"
        className="flex items-center justify-center w-full h-full"
      >
        {/* Add your modal content here */}
        <div className="flex flex-col items-center justify-center bg-[#F7F7F7] w-[350px] h-[200px] p-2 border rounded-sm ">
          <p className="text-md lg:text-xl mb-5 text-center">
            Your Enquiry form Submitted un Successfull. Please retry again.
          </p>
          <button
            onClick={closeModalone}
            className="p-2 bg-[#17c294] border text-white rounded-sm"
          >
            Close
          </button>
        </div>
      </ReactModal>
    </div>
  );
};

export default ContactForm;
