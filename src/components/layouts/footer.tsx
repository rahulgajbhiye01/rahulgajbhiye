import Link from "next/link";

import {
  FiGithub,
  FiYoutube,
  FiLinkedin,
  FiDownload,
  FiInstagram,
} from "react-icons/fi";
import { FaXTwitter, FaThreads } from "react-icons/fa6";
import { RiPinterestLine } from "react-icons/ri";

const links = [
  {
    href: "https://github.com/rahulgajbhiye01",
    icon: <FiGithub className="size-6" />,
  },
  {
    href: "https://www.linkedin.com/in/rahulgajbhiye01",
    icon: <FiLinkedin className="size-6" />,
  },
  {
    href: "https://twitter.com/rahulgajbhiye01",
    icon: <FaXTwitter className="size-6" />,
  },
  {
    href: "https://www.threads.net/@rahulgajbhiye01",
    icon: <FaThreads className="size-6" />,
  },
  {
    href: "https://www.youtube.com/@rahulgajbhiye01",
    icon: <FiYoutube className="size-6" />,
  },
  {
    href: "https://in.pinterest.com/rahulgajbhiye01",
    icon: <RiPinterestLine className="size-6" />,
  },
  {
    href: "https://www.instagram.com/rahulgajbhiye01/",
    icon: <FiInstagram className="size-6" />,
  },
  {
    href: "https://drive.google.com/drive/folders/1T-q9VJ1BGdrIAGL_RvyIlxnKKfI0JzDb?usp=drive_link",
    icon: <FiDownload className="size-6" />,
  },
];

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="flex justify-center bg-background text-foreground shadow drop-shadow">
      <div className="flex w-11/12 flex-col items-center justify-between gap-16 py-4 sm:w-2/3">
        <div className="flex flex-col items-center justify-between gap-8">
          <div className="flex flex-col items-center gap-2">
            <span>life | inspire | fitness | tech | code</span>
            <span>solo leveling!</span>
          </div>

          <span>Connect with me on:</span>

          <div className="flex w-min flex-row gap-8">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="text-sm font-normal">
          <span>©{date} Rahul Gajbhiye</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
