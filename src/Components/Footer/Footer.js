import React from "react";
import logo from "../../Images/logo.svg";

export default function Footer() {
  return (
      <div className="footer">
        <div className="width-default">
          <div className="footer__top">
              <div className="row">
                <div className="row-one col-sm-3 col-12">
                  <ul className="footer__top-list">
                    <li><a href="/"> Udemy Business</a></li>
                    <li><a href="/">Teaching on Udemy</a></li>
                    <li><a href="/">App Download</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Contact</a></li>
                  </ul>
                </div>
                <div className="row-two col-sm-3 col-12">
                  <ul className="footer__top-list">
                    <li><a href="/">Jobs</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Help and Support</a></li>
                    <li><a href="/">Affiliate</a></li>
                  </ul>
                </div>
                <div className="row-three col-sm-3 col-12">
                  <ul className="footer__top-list">
                    <li><a href="/">Terms of Use</a></li>
                    <li><a href="/">Privacy Policy</a></li>
                    <li><a href="/">Site Map</a></li>
                  </ul>
                </div>
                <div className="row-four col-sm-3 col-12">
                      <a className="btn-language" href="/">
                        <i className="fal fa-globe mr-2"></i>
                         Language
                         </a>
                </div>
              </div>
          </div>
          <div className="footer__bot">
              <div className="row">
                <div className="col-6 content__left">
                    <img src={logo} alt="#" />
                </div>
                <div className="col-6 content__right">
                  <p className="text-right ml-5">Copyright © 2022 Udemy, Inc.</p>
                </div>
              </div>
          </div>
        </div>
      </div>       
  );
}
