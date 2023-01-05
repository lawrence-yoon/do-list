import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Link({ children, className, href }) {
  return (
    <a
      className={`${className ? className : ""}`}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );
}

export function LinkGithub({ ...rest }) {
  return (
    <Link href="https://github.com/lawrence-yoon" className="block">
      <FaGithub />
    </Link>
  );
}

export function LinkLinkedin({ ...rest }) {
  return (
    <Link
      href="https://www.linkedin.com/in/lawrence-yoon-3b8363253/"
      className="block"
    >
      <FaLinkedin />
    </Link>
  );
}
