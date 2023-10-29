import logo from "../../assets/logo2.png";
import googlePlay from '../../assets/google_play.png';
import ios from '../../assets/ios.png';
import './Footer.css';

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer_header">
          <img src={logo} alt="" />
          <p>Best Product Best Price</p>
        <div className="footer_header_container">
          <div className="footer_subscription">
          <h6>Subscribe to our new channel to get latest updates.</h6>
          <form action="" className="subscription_form">
            <input type="email" placeholder="Enter your email" />
            <input type="submit" value="Subscribe" />
          </form>
          </div>
          <div className="social_link_section">
          <p>Join Us on...</p>
            <div className="social_links">
            <div className="facebook_link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <path
                d="M16.7196 2.26172H13.9696C12.754 2.26172 11.5882 2.7446 10.7287 3.60415C9.86912 4.46369 9.38623 5.62948 9.38623 6.84505V9.59505H6.63623V13.2617H9.38623V20.5951H13.0529V13.2617H15.8029L16.7196 9.59505H13.0529V6.84505C13.0529 6.60194 13.1495 6.36878 13.3214 6.19687C13.4933 6.02496 13.7264 5.92839 13.9696 5.92839H16.7196V2.26172Z"
                stroke="#FF8800"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="youtube_link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <g clip-path="url(#clip0_102_2486)">
                <path
                  d="M20.6615 5.88533C20.5527 5.45028 20.3309 5.05168 20.0186 4.72978C19.7064 4.40788 19.3147 4.17408 18.8832 4.05199C17.3065 3.66699 10.9999 3.66699 10.9999 3.66699C10.9999 3.66699 4.69321 3.66699 3.11654 4.08866C2.68502 4.21074 2.29335 4.44455 1.98111 4.76645C1.66886 5.08835 1.4471 5.48695 1.33821 5.92199C1.04965 7.52208 0.908506 9.14528 0.91654 10.7712C0.906254 12.4093 1.04741 14.0449 1.33821 15.657C1.45825 16.0785 1.68499 16.462 1.9965 16.7703C2.30802 17.0786 2.69379 17.3013 3.11654 17.417C4.69321 17.8387 10.9999 17.8387 10.9999 17.8387C10.9999 17.8387 17.3065 17.8387 18.8832 17.417C19.3147 17.2949 19.7064 17.0611 20.0186 16.7392C20.3309 16.4173 20.5527 16.0187 20.6615 15.5837C20.9479 13.9956 21.089 12.3848 21.0832 10.7712C21.0935 9.13303 20.9523 7.49747 20.6615 5.88533Z"
                  stroke="#FF8800"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.9375 13.7684L14.2083 10.7709L8.9375 7.77344V13.7684Z"
                  stroke="#FF8800"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_102_2486">
                  <rect width="22" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="instagram_link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <g clip-path="url(#clip0_102_2491)">
                <path
                  d="M15.5835 1.83301H6.41683C3.88552 1.83301 1.8335 3.88504 1.8335 6.41634V15.583C1.8335 18.1143 3.88552 20.1663 6.41683 20.1663H15.5835C18.1148 20.1663 20.1668 18.1143 20.1668 15.583V6.41634C20.1668 3.88504 18.1148 1.83301 15.5835 1.83301Z"
                  stroke="#FF8800"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.6667 10.4228C14.7799 11.1857 14.6495 11.9648 14.2943 12.6494C13.9391 13.3339 13.3771 13.8891 12.6882 14.2358C11.9993 14.5825 11.2186 14.7032 10.4572 14.5807C9.69576 14.4582 8.99234 14.0987 8.44699 13.5533C7.90165 13.008 7.54214 12.3046 7.41962 11.5431C7.29709 10.7817 7.41778 10.001 7.76452 9.31212C8.11126 8.62323 8.66639 8.06121 9.35096 7.706C10.0355 7.35079 10.8147 7.22048 11.5776 7.33361C12.3557 7.449 13.0762 7.81162 13.6324 8.36789C14.1887 8.92416 14.5513 9.6446 14.6667 10.4228Z"
                  stroke="#FF8800"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.0415 5.95801H16.0515"
                  stroke="#FF8800"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_102_2491">
                  <rect width="22" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="twitter_link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <g clip-path="url(#clip0_102_2497)">
                <path
                  d="M21.0832 2.75043C20.2054 3.36962 19.2334 3.8432 18.2048 4.15293C17.6528 3.51815 16.9191 3.06823 16.103 2.86403C15.2868 2.65983 14.4277 2.71119 13.6417 3.01118C12.8558 3.31116 12.1809 3.8453 11.7084 4.54134C11.2359 5.23737 10.9886 6.06174 10.9998 6.90293V7.81959C9.38892 7.86137 7.79267 7.50409 6.35326 6.77959C4.91385 6.05508 3.67596 4.98584 2.74984 3.6671C2.74984 3.6671 -0.91683 11.9171 7.33317 15.5838C5.44532 16.8652 3.1964 17.5078 0.916504 17.4171C9.1665 22.0004 19.2498 17.4171 19.2498 6.87543C19.249 6.62009 19.2244 6.36539 19.1765 6.1146C20.1121 5.19196 20.7723 4.02708 21.0832 2.75043Z"
                  stroke="#FF8800"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_102_2497">
                  <rect width="22" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
            </div>
        </div>
        <div className="mobile_app">
            <p>Download Our Mobile App</p>
            <div className="mobile_app_poster">
            <div className="google_play_store">
                <img src={googlePlay} alt="" />
            </div>
            <div className="ios_store">
                <img src={ios} alt="" />
            </div>
            </div>
        </div>
        </div>
        
        
      </div>
      <hr className="divider" />
      <div className="footer_links">
        <div className="footer_useful_links">
            <h6>Useful Links</h6>
            <a href="">About BPP Shop</a><br />
            <a href="">Terms & Conditions</a><br />
            <a href="">Privacy Policy</a><br />
            <a href="">Return & Refund Policy </a><br />
            <a href="">FAQ</a>
        </div>
        <div className="footer_contacts_links">
        <h6>Useful Links</h6>
            <h5>Address</h5>
            <p>House 56, Road 1, Block A, Jahurul Islam City, Aftabnagar, Dhaka, Bangladesh</p>
            <h5>Phone</h5>
            <p>015********</p>
            <h5>Email</h5>
            <p>bppshop@gmail.com</p>

        </div>
        <div className="special_links">
        <h6>Special Links</h6>
            <a href="">New Arrival Products</a><br />
            <a href="">Best Selling Products</a><br />
            <a href="">Top Rated Products</a><br />
            <a href="">Discount Products</a><br />
            <a href="">Flash Sale Products</a><br />
        </div>
        
        <div className="account_shipping">
            <h6>Account & Shipping Info</h6>
            <a href="">Profile Info</a><br />
            <a href="">Order Info</a><br />
            <a href="">Track Oder</a>
        </div>

      </div>
    </footer>
    <footer className="copy_footer">
        <p>
           © All Right Reserved BPPSHOP
       </p>
    </footer>
    </>
  );
};

export default Footer;
