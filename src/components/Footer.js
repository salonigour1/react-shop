import React from 'react';
import { BsFacebook, BsInstagram, BsGoogle, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer>
      <div className='footer_top'>
        <div>
          <div>
            <Link to='/' className='logo'>
              WEB
              <span className='x'>X</span>
            </Link>
          </div>
          <div>For more insights do subscribe.</div>
        </div>

        <div>
          <div>For more insights</div>
          <br />
          <form>
            <input
              className='email'
              type='email'
              id='email'
              name='email'
              placeholder='Enter your email'
            />

            <div className='login_button'>LOG IN</div>
          </form>
        </div>

        <div>
          <p>Follow us</p>
          <div className='icons'>
            <a href='#'>
              <BsFacebook color='#fb6e3f' size='30px' />
            </a>
            <a href='#'>
              <BsInstagram color='#fb6e3f' size='30px' />
            </a>
            <a href='#'>
              <BsGoogle color='#fb6e3f' size='30px' />
            </a>
            <a href='#'>
              <BsTwitter color='#fb6e3f' size='30px' />
            </a>
          </div>
        </div>
        <div className=''>
          <div style={{ color: '#fb6e3f' }}>call us </div>
          91 854162537
        </div>
      </div>
      <hr />
      <div className='footer_bottom'>
        <div className=''>
          2020 Creedo,Harvey Specter Agency Newyork,USA, All Rights reserved
        </div>

        <div className=''>privacy policy terms and condition</div>
      </div>
    </footer>
  );
}

export default Footer;
