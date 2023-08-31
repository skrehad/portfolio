import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { toast } from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  // const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y1sj4li",
        "template_33vhkbp",
        form.current,
        "sCXYg8dkAfdoKSc0X"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset(); // Corrected form reset
          toast.success("Your information submitted successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(
            "Your information can not submitted.Something went wrong!"
          );
        }
      );
  };

  return (
    <section className="section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewPort={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-orange-200 font-medium mb-2 tracking-wide">
                Let's keep in touch!
              </h4>
              <h2 className="text-[45px] leading-none mb-12">
                Let,s work <br /> together!
              </h2>
            </div>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewPort={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-6 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
              name="name" // Added name attribute
              required
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your email"
              name="email" // Added name attribute
              required
            />

            <textarea
              className="bg-transparent border-b pt-6 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
              name="message" // Added name attribute
              required
            ></textarea>

            <button type="submit" className="btn btn-lg">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
