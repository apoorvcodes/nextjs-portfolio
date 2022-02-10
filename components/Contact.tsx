import { FC, useRef } from "react";
import Image from "next/image";
import email from "../assets/email.svg";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact: FC = () => {
  const form = useRef<any>(null);
  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_totu",
        "template_ebl644l",
        form.current,
        "user_3POmBlypOgWDh2J98kuoc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    console.log(form.current.email);
    alert("Message Sent");
  };
  return (
    <div className="container mx-auto pt-24 pb-12 font-sora">
      <div className="p-6 flex-col text-cream font-semibold ">
        <h1 className="text-5xl md:text-6xl pb-1">CONTACT.</h1>
        <div className="flex justify-center bg-prime font-semibold w-64 md:w-80 h-2 "></div>
      </div>
      <div className="flex flex-row-reverse justify-center my-6 pt-6">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div className="w-full h-auto hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
            <Image src={email} width={700} alt="contact" />
          </div>

          <div className="w-full lg:w-1/2 p-5 rounded-lg lg:rounded-l-none">
            <div className="px-8 mb-4 text-center">
              <h3 className="pt-4 mb-2 text-2xl text-prime font-bold">
                Wanna get in touch?
              </h3>
              <p className="mb-4 text-sm text-gray-300">
                We get it, you want some talks. Just enter your email address
                and message below and I will talk to you!
              </p>
            </div>
            <form
              onSubmit={sendEmail}
              ref={form}
              className="px-8 pt-6 pb-8 mb-4 rounded"
              id="contactform"
            >
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bol text-gray-300">
                  Email
                </label>
                <input
                  id="email"
                  className="
				w-full
				px-3
				py-2
				ring  ring-prime
				text-sm
				leading-tight
			       text-secondry
				border
				rounded
				shadow
				appearance-none
				focus:outline-none focus:shadow-outline
			      "
                  type="email"
                  placeholder="Enter Email Address..."
                  name="email"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-sm font-bol text-gray-300">
                  Message
                </label>
                <input
                  id="message"
                  className="
				w-full
				px-3
				py-2
				ring  ring-prime
				text-sm
				leading-tight
			       text-secondry
				border
				rounded
				shadow
				appearance-none
				focus:outline-none focus:shadow-outline
			      "
                  type="text"
                  placeholder="Enter message here...."
                  name="message"
                />
              </div>

              <div className="mb-6 text-center">
                <button
                  className="
				w-full
				px-4
				py-2
				font-bold
				text-cream
				bg-prime
				rounded-full
				hover:bg-secondry
				focus:outline-none focus:shadow-outline
			      "
                  type="button"
                  onClick={sendEmail}
                >
                  Submit!
                </button>
              </div>
              <hr className="mb-6 border-t" />
              <div className="flex text-white justify-center space-x-8">
                <AiFillGithub className="text-5xl hover:text-prime" />
                <AiFillTwitterCircle className="text-5xl hover:text-prime" />
                <AiFillLinkedin className="text-5xl hover:text-prime" />
                <FaDiscord className="text-5xl hover:text-prime" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
