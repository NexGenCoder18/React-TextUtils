import React from "react";

const About = () => {
  return (
    <section className="container mx-auto p-6 text-left md:p-12">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-lg text-gray-700 mb-4">
        Welcome to <strong className="text-primary">TextUtils</strong> – your
        one-stop destination for all text-related utilities!
      </p>
      <div className="space-y-4">
        <p className="text-lg text-gray-700">
          Whether you need to convert text to uppercase, lowercase, count words,
          remove extra spaces, or analyze your text efficiently, we’ve got you
          covered.
        </p>
        <p className="text-lg text-gray-700">
          TextUtils is built with modern web technologies to provide a fast,
          seamless, and user-friendly experience.
        </p>
        <p className="text-lg text-gray-700">
          Our goal is to help users manage and manipulate their text
          efficiently, whether for personal, academic, or professional use.
        </p>
        <p className="text-lg text-gray-700">
          We continuously work on adding new features and improving the
          performance of our application to better serve your needs.
        </p>
        <p className="text-lg text-gray-700">
          Thank you for using TextUtils. We hope it makes your text editing
          tasks easier and more productive!
        </p>
        <p className="text-lg text-gray-700">
          Stay tuned for more updates and enhancements. Happy text editing!
        </p>
      </div>
    </section>
  );
};

export default About;
