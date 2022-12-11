import React from "react";
import { BsFacebook, BsInstagram, BsGoogle, BsTwitter } from "react-icons/bs";
function Footer() {
  return (
    <div>
      <div class="footer">
        <div class="footer_top">
          <div class="top top1">
            <div className="icon">
              <a href="#">WEBSHOP</a>
            </div>
            <p>Thoughtful development for growing business.</p>
          </div>
          <div className="top top2">
            <p>For more insights do subscribe.</p>
            <form>
              <input
                className="email"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
              <input className="sub_button" type="submit" value="Subscribe" />
            </form>
          </div>
          <div className="top top3">
            <p>Follow us</p>
            <div className="icons">
              <a href="#">
                <BsFacebook color="white" size="20px" />
              </a>
              <a href="#">
                <BsInstagram color="white" size="20px" />
              </a>
              <a href="#">
                <BsGoogle color="white" size="20px" />
              </a>
              <a href="#">
                <BsTwitter color="white" size="20px" />
              </a>
            </div>
          </div>
          <div className="top top4">
            <p>
              call us
              <br />
              <br />
              91 854162537
            </p>
          </div>
        </div>
        <hr />
        <div className="footer_bottom">
          <div className="bottom1">
            2020 Creedo,Harvey Specter Agency Newyork,USA, All Rights reserved
          </div>

          <div clasName="bottom2">privacy policy terms and condition</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
