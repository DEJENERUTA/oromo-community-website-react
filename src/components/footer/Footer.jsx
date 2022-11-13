import React from "react";
import "./Footer.css";
import { AiTwotoneEnvironment } from "react-icons/ai";
import { BiEnvelope } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="main-footer">
        <div className="footer-info">
          <h4 className="footer-title">Contact</h4>
          <p>
            If you have questions or would like to book an event,
            <br />
            you can get in touch with us in the following ways.
          </p>
          <div className="adress-container">
            <div className="footer-info-container">
              <div className="footer-icons">
                <AiTwotoneEnvironment />
              </div>
              <div>
                <h4>Address</h4>
                <p>Adresse, Adressevej 123, 1234 Adresseby</p>
              </div>
            </div>
          </div>
          <div className="adress-container">
            <div className="footer-info-container">
              <div className="footer-icons">
                <BsFillTelephoneFill />
              </div>
              <div>
                <h4>call to us on</h4>
                <p>+45 12345678</p>
              </div>
            </div>
          </div>
          <div className="adress-container">
            <div className="footer-info-container">
              <div className="footer-icons">
                <BiEnvelope />
              </div>
              <div>
                <h4>write to us on</h4>
                <p>email@oromocumunity.dk</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-form">
          <div>
            <form action="thankyou.html" id="subscribeForm">
              <h4 className="send-message">Send us a message</h4>
              <input
                type="text"
                name="name"
                placeholder="write your name here..."
              />
              <input
                type="text"
                name="email"
                placeholder="write your email here... "
              />
              <textarea
                name="message"
                placeholder="write your message here..."
              ></textarea>
              <button type="submit" id="submit">
                Send a message
              </button>
              <p id="message">&nbsp;</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
