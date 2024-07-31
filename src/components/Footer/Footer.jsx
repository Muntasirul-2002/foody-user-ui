import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1>
            Foody <span className="logo-dot">.</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            temporibus ea fuga dolore cum, ad modi ab repellendus tempora iusto,
            vero numquam ducimus natus quibusdam. Enim debitis accusantium, quia
            labore optio fuga magni totam voluptates mollitia facilis maxime,
            consequatur reiciendis.
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>     
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>6294268784</li>
            <li>muntasirul.msd@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        CopyRight 2024 @ Foody.in - Developed by <a href="https://muntasirul.netlify.app" target="_blank" className="developer"> Muntasirul islam</a>
      </p>
    </div>
  );
};

export default Footer;
