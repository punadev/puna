import { createElement, useRef } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
      'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="bg-violet-900 text-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14 place-items-center">
        <h2 className="title !text-white " data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle " data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a className="font-Poppins" href={content.link} target="_blank">
                  {content.text}
                </a>
              </div>
            ))}

            <a href="/cv_fernando_puna.pdf" title="Baixar meu CV" className="btn bg-violet-600">Download CV</a>
            <a href="/portfolio_fernando_puna.pdf" title="Baixar meu Portfólio" className="btn bg-violet-600">Download Portfólio</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
