import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="w-full p-3 flex flex-col gap-2 items-center justify-center text-white bg-gray-800">
      {/*//! Social media */}
      <div className="flex flex-row gap-2">
        <a
          href="https://www.linkedin.com/in/agustin-frontend-react/"
          target="_blank"
          className="hover:text-slate-500 "
        >
          <FaLinkedin size={25} />
        </a>
        <a
          href="https://github.com/kbcruz6"
          target="_blank"
          className="hover:text-slate-500 "
        >
          <FaGithub size={25} />
        </a>
        <a
          href="mailto:agustin.tcw@gmail.com"
          target="_blank"
          className="hover:text-slate-500 "
        >
          <HiOutlineMail size={25} />
        </a>
      </div>

      {/*//! COPY */}
      <div className="">
        © 2023 | Created by{" "}
        <a
          href="https://portfolio-agustincruz.vercel.app/"
          target="_blank"
          className="hover:text-slate-500 font-bold text-slate-400"
        >
          Agustin Cruz
        </a>
      </div>
      <p className="">All rights reserved</p>
    </div>
  );
};

export default Footer;
