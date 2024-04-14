import logo from "../assets/VJLogo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GITHUB_PROFILE, LINKEDIN_PROFILE } from "../constants";

const Navbar = () => {
    return (
        <nav className="mb-10 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-20" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href={LINKEDIN_PROFILE} target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                <a href={GITHUB_PROFILE} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
        </nav >
    )
}

export default Navbar