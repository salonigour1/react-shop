import React from "react";
import { BsFacebook, BsInstagram, BsGoogle, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div class="footer_top">
        <div>
          <div>
            <Link to="/" className="logo">
              WEB
              <span style={{ color: "white" }} className="x">
                X
              </span>
            </Link>
          </div>
          <div>For more insights do subscribe.</div>
        </div>

        <div>
          <div>For more insights</div>
          <br />
          <form>
            <input
              className="email"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />

            <div className="login_button">LOG IN</div>
          </form>
        </div>

        <div className="">
          <p>Follow us</p>
          <div className="icons">
            <a href="#">
              <BsFacebook color="white" size="30px" />
            </a>
            <a href="#">
              <BsInstagram color="white" size="30px" />
            </a>
            <a href="#">
              <BsGoogle color="white" size="30px" />
            </a>
            <a href="#">
              <BsTwitter color="white" size="30px" />
            </a>
          </div>
        </div>
        <div className="">
          <p>
            call us
            <br />
            91 854162537
          </p>
        </div>
      </div>
      <hr />
      <div className="footer_bottom">
        <div className="">
          2020 Creedo,Harvey Specter Agency Newyork,USA, All Rights reserved
        </div>

        <div clasName="">privacy policy terms and condition</div>
      </div>
    </footer>
  );
}

export default Footer;
