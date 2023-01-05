import { LinkGithub, LinkLinkedin } from "../ui/Link";

function Footer() {
  return (
    <div className="flex flex-col items-center">
      <p>
        <i>Made from scratch. React-Router, React-Icons, Vite</i>
      </p>
      <p>© Lawrence Yoon 2023</p>

      <div className="flex flex-row gap-3">
        <LinkGithub />
        <LinkLinkedin />
      </div>
    </div>
  );
}

export default Footer;
