import SectionTitle from "./SectionTitle";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="bg-[#00BF83]/20 py-10 md:py-20">
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
          viewport={{ once: true }}
        >
          <SectionTitle title={"Contact"} />
        </motion.div>

        <motion.p
          className="mt-6 mb-2 text-center font-semibold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
          viewport={{ once: true }}
        >
          Slide Into My Inbox – The Safe Way! 📥😄
        </motion.p>
        <p className="text-center text-sm opacity-50">
          Pick any of the options
        </p>
        <hr className="w-full my-4 opacity-50" />
        <motion.div
          className="w-full flex flex-col gap-2 md:flex-row md:gap-10 md:justify-center "
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
          viewport={{ once: true }}
        >
          <a
            href="mailto:96mdjanealam@gmail.com"
            className="hover:text-success flex items-center gap-2"
          >
            <FiMail /> Email: 96mdjanealam@gmail.com
          </a>
          <a
            href="tel:+8801558943516"
            className="hover:text-success flex items-center gap-2"
          >
            <FiPhone /> Phone: +880 1558 943516
          </a>
          <a
            href="https://wa.me/8801558943516"
            className="hover:text-success flex items-center gap-2"
          >
            <FaWhatsapp /> WhatsApp: +880 1558 943516
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
