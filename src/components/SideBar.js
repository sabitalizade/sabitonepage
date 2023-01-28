import React from "react";
import { BsInstagram, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
export const socials = [
  {
    name: "github",
    link: "https://github.com/sabitalizade/",
    icon: BsGithub,
    color: "#4078c0",
  },
  {
    name: "linkedin",
    link: "https://linkedin.com/in/sabitalizade/",
    icon: BsLinkedin,
    color: "#0077b5",
  },
  {
    name: "instagram",
    link: "https://instagram.com/sabitalizade/",
    icon: BsInstagram,
    color: "#c13584",
  },
  {
    name: "twitter",
    link: "https://twitter.com/sabitalizada",
    icon: BsTwitter,
    color: "#1da1f2",
  },
  {
    name: "email",
    link: "mailto:sabit@engineer.com",
    icon: MdEmail,
    color: "#1da1f2",
  },
];

const SideBar = () => {
  return (
    <div className="w-full bg-primarydark h-[6vh] lg:h-full">
      <ul className="flex py-3 lg:py-0  lg:flex-col gap-5 justify-center items-center h-full text-white">
        {socials.map((social) => (
          <li key={social.link}>
            <a href={social.link}>
              {<social.icon className={`text-2xl hover:text-[#47a81a]`} />}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
