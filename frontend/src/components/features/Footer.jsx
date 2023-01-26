import { LinkGithub, LinkLinkedin } from "../ui/Link";

function Footer() {
  return (
    <div className="flex flex-col items-center text-center">
      <p>
        <i>
          Made from scratch. (Frontend dependencies: React-Router, React-Icons,
          and Vite. Backend dependencies: JWT, Bcrypt, and Mongoose.) Hosted on
          cyclic.sh.
        </i>
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
