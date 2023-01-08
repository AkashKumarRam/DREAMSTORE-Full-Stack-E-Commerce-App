import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    Don't get fooled. Look out for smuggled & refurbished headphones while shopping online. DREAM STORE is a professionally run business & deals only in 100% genuine headphones
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Station Rd, Stationpara, Bachurdoba, Jhargram,
                            West Bengal, 721507
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 8617572616</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: heyakashkumarram@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        DREAM STORE 2023 CREATED BY AKASH KUMAR RAM. PREMIUM E-COMMERCE
                        SOLUTIONS.
                    </span>
                    <img src={Payment} alt='paymentGatewayIcons'/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
