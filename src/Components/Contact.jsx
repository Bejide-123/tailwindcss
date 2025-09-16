import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end", // slides in from the top right corner
      showConfirmButton: false,
      timer: 3000, // disappears after 3s
      timerProgressBar: true,
      showClass: {
        popup: "animate__animated animate__fadeInRight", // slide in
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutRight", // slide out
      },
    });

    emailjs
      .sendForm(
        "service_v24yr0g", // replace
        "template_onxtsoq", // replace
        form.current,
        "xA97zb7hcFK7LmvR4" // replace
      )
      .then(() => {
        Toast.fire({
          icon: "success",
          title: "Message sent successfully! 🎉",
          background: "#7C3AED",
          color: "#fff",
        });
        form.current.reset();
      })
      .catch((error) => {
        Toast.fire({
          icon: "error",
          title: "Something went wrong 😢",
          text: error.text,
          background: "#DC2626",
          color: "#fff",
        });
      });
  };

  return (
    <div
      className="container mx-auto py-6 sm:py-8 md:py-12 px-6 sm:px-8 md:px-12 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl font-bold text-center sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 sm:mb-4">
        Contact
        <span className="font-light underline underline-offset-4 decoration-1 decoration-purple-500 decoration-dashed">
          {" "}
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 sm:mb-10 md:mb-12 max-w-xs sm:max-w-md md:max-w-lg mx-auto text-sm sm:text-base">
        We'd love to hear from you! Whether you have questions about our
        services or want to discuss a project, feel free to reach out.
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-sm sm:max-w-md md:max-w-lg mx-auto"
      >
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-gray-300 text-sm sm:text-base"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-gray-300 text-sm sm:text-base"
              placeholder="Email Address"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-gray-300 text-sm sm:text-base"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-500 text-white font-semibold py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-md hover:bg-purple-600 transition-colors duration-300"
          >
            Send Message ✨
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
