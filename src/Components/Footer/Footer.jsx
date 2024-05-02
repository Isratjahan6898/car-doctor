
import logo from '../../assets/logo.svg'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className='mt-[100px] '>
            <footer className="footer p-10 bg-neutral text-neutral-content">
  <aside className='ml-[40px]'>
    <img src={logo} alt="" />
    <p>Edwin Diaz is a software and web <br></br> technologies engineer, a life coach<br></br> trainer who is also a serial .</p>
    <div className='flex gap-[20px]'>
    <FaFacebook />
    <FaInstagramSquare />
    <FaGithub />
    <FaLinkedin />
    </div>
  </aside> 
  <nav className='mt-[40px]'>
    <h6 className="footer-title">About</h6> 
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Service</a>
    <a className="link link-hover">Contact</a>
    
  </nav> 
  <nav className='mt-[40px]'>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">Web car decor</a>
    <a className="link link-hover">Contact</a>
    
  </nav> 
  <nav className='mt-[40px]'>
    <h6 className="footer-title">Support</h6> 
    <a className="link link-hover">Support center</a>
    <a className="link link-hover">Feedback</a>
    <a className="link link-hover">Accesbility</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;