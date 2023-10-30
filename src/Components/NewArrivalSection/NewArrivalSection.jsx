
import products1 from "../../assets/products1.png";
import ReactStars from "react-rating-stars-component";
import { Swiper, SwiperSlide } from "swiper/react";
// import discountBanner from '../../assets/discount_banner.png';
import './NewArrivalSection.css';
import newArrival  from "../../assets/newArrival.png";
import Slider from "react-slick";

// // Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// // import required modules
import { FreeMode } from "swiper/modules";
const firstExample = {
    size: 20,
    value: 2.5,
    edit: false,
  };
const NewArrivalSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return (
        <section>
            <div className="discount_products_container">
                <div className="discount_products_banner">
                    <img src={newArrival} alt="" />
                </div>
                <div className="discount_products_content">
                    <div className="discount_products_header">
                        <h1>New Arrival</h1>
                        <a href="">view more</a>
                    </div>
                    
                    <Slider {...settings} className="mySwiper_hot_deals">
            <div className="hot_deals_products_section">
              <div className="hot_deals_products">
                <div className="hot_deals_products_content">
                  <div className="hot_deals_products_header">
                    <img src={products1} alt="" />
                    <p>Premium Half Sleeve Cotton Shirt</p>
                    <h3 className="product_quantity">1 : Pair</h3>
                    <h2 className="product_price">
                      60 ৳ <span className="product_price_offer">63 ৳</span>
                    </h2>
                    <div className="product_rating">
                      <ReactStars {...firstExample} /> <small>(0)</small>
                    </div>
                  </div>
                  <div className="add_to_cart">
                    <button className="add_to_cart_btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_188_1778)">
                          <path
                            d="M7.49984 18.3334C7.96007 18.3334 8.33317 17.9603 8.33317 17.5001C8.33317 17.0398 7.96007 16.6667 7.49984 16.6667C7.0396 16.6667 6.6665 17.0398 6.6665 17.5001C6.6665 17.9603 7.0396 18.3334 7.49984 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.6668 18.3334C17.1271 18.3334 17.5002 17.9603 17.5002 17.5001C17.5002 17.0398 17.1271 16.6667 16.6668 16.6667C16.2066 16.6667 15.8335 17.0398 15.8335 17.5001C15.8335 17.9603 16.2066 18.3334 16.6668 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M0.833496 0.833252H4.16683L6.40016 11.9916C6.47637 12.3752 6.68509 12.7199 6.98978 12.9652C7.29448 13.2104 7.67575 13.3407 8.06683 13.3333H16.1668C16.5579 13.3407 16.9392 13.2104 17.2439 12.9652C17.5486 12.7199 17.7573 12.3752 17.8335 11.9916L19.1668 4.99992H5.00016"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_188_1778">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="add_to_cart_text">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="hot_deals_products_section">
              <div className="hot_deals_products">
                <div className="hot_deals_products_content">
                  <div className="hot_deals_products_header">
                    <img src={products1} alt="" />
                    <p>Premium Half Sleeve Cotton Shirt</p>
                    <h3 className="product_quantity">1 : Pair</h3>
                    <h2 className="product_price">
                      60 ৳ <span className="product_price_offer">63 ৳</span>
                    </h2>
                    <div className="product_rating">
                      <ReactStars {...firstExample} /> <small>(0)</small>
                    </div>
                  </div>
                  <div className="add_to_cart">
                    <button className="add_to_cart_btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_188_1778)">
                          <path
                            d="M7.49984 18.3334C7.96007 18.3334 8.33317 17.9603 8.33317 17.5001C8.33317 17.0398 7.96007 16.6667 7.49984 16.6667C7.0396 16.6667 6.6665 17.0398 6.6665 17.5001C6.6665 17.9603 7.0396 18.3334 7.49984 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.6668 18.3334C17.1271 18.3334 17.5002 17.9603 17.5002 17.5001C17.5002 17.0398 17.1271 16.6667 16.6668 16.6667C16.2066 16.6667 15.8335 17.0398 15.8335 17.5001C15.8335 17.9603 16.2066 18.3334 16.6668 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M0.833496 0.833252H4.16683L6.40016 11.9916C6.47637 12.3752 6.68509 12.7199 6.98978 12.9652C7.29448 13.2104 7.67575 13.3407 8.06683 13.3333H16.1668C16.5579 13.3407 16.9392 13.2104 17.2439 12.9652C17.5486 12.7199 17.7573 12.3752 17.8335 11.9916L19.1668 4.99992H5.00016"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_188_1778">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="add_to_cart_text">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="hot_deals_products_section">
              <div className="hot_deals_products">
                <div className="hot_deals_products_content">
                  <div className="hot_deals_products_header">
                    <img src={products1} alt="" />
                    <p>Premium Half Sleeve Cotton Shirt</p>
                    <h3 className="product_quantity">1 : Pair</h3>
                    <h2 className="product_price">
                      60 ৳ <span className="product_price_offer">63 ৳</span>
                    </h2>
                    <div className="product_rating">
                      <ReactStars {...firstExample} /> <small>(0)</small>
                    </div>
                  </div>
                  <div className="add_to_cart">
                    <button className="add_to_cart_btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_188_1778)">
                          <path
                            d="M7.49984 18.3334C7.96007 18.3334 8.33317 17.9603 8.33317 17.5001C8.33317 17.0398 7.96007 16.6667 7.49984 16.6667C7.0396 16.6667 6.6665 17.0398 6.6665 17.5001C6.6665 17.9603 7.0396 18.3334 7.49984 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.6668 18.3334C17.1271 18.3334 17.5002 17.9603 17.5002 17.5001C17.5002 17.0398 17.1271 16.6667 16.6668 16.6667C16.2066 16.6667 15.8335 17.0398 15.8335 17.5001C15.8335 17.9603 16.2066 18.3334 16.6668 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M0.833496 0.833252H4.16683L6.40016 11.9916C6.47637 12.3752 6.68509 12.7199 6.98978 12.9652C7.29448 13.2104 7.67575 13.3407 8.06683 13.3333H16.1668C16.5579 13.3407 16.9392 13.2104 17.2439 12.9652C17.5486 12.7199 17.7573 12.3752 17.8335 11.9916L19.1668 4.99992H5.00016"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_188_1778">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="add_to_cart_text">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="hot_deals_products_section">
              <div className="hot_deals_products">
                <div className="hot_deals_products_content">
                  <div className="hot_deals_products_header">
                    <img src={products1} alt="" />
                    <p>Premium Half Sleeve Cotton Shirt</p>
                    <h3 className="product_quantity">1 : Pair</h3>
                    <h2 className="product_price">
                      60 ৳ <span className="product_price_offer">63 ৳</span>
                    </h2>
                    <div className="product_rating">
                      <ReactStars {...firstExample} /> <small>(0)</small>
                    </div>
                  </div>
                  <div className="add_to_cart">
                    <button className="add_to_cart_btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_188_1778)">
                          <path
                            d="M7.49984 18.3334C7.96007 18.3334 8.33317 17.9603 8.33317 17.5001C8.33317 17.0398 7.96007 16.6667 7.49984 16.6667C7.0396 16.6667 6.6665 17.0398 6.6665 17.5001C6.6665 17.9603 7.0396 18.3334 7.49984 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.6668 18.3334C17.1271 18.3334 17.5002 17.9603 17.5002 17.5001C17.5002 17.0398 17.1271 16.6667 16.6668 16.6667C16.2066 16.6667 15.8335 17.0398 15.8335 17.5001C15.8335 17.9603 16.2066 18.3334 16.6668 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M0.833496 0.833252H4.16683L6.40016 11.9916C6.47637 12.3752 6.68509 12.7199 6.98978 12.9652C7.29448 13.2104 7.67575 13.3407 8.06683 13.3333H16.1668C16.5579 13.3407 16.9392 13.2104 17.2439 12.9652C17.5486 12.7199 17.7573 12.3752 17.8335 11.9916L19.1668 4.99992H5.00016"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_188_1778">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="add_to_cart_text">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="hot_deals_products_section">
              <div className="hot_deals_products">
                <div className="hot_deals_products_content">
                  <div className="hot_deals_products_header">
                    <img src={products1} alt="" />
                    <p>Premium Half Sleeve Cotton Shirt</p>
                    <h3 className="product_quantity">1 : Pair</h3>
                    <h2 className="product_price">
                      60 ৳ <span className="product_price_offer">63 ৳</span>
                    </h2>
                    <div className="product_rating">
                      <ReactStars {...firstExample} /> <small>(0)</small>
                    </div>
                  </div>
                  <div className="add_to_cart">
                    <button className="add_to_cart_btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_188_1778)">
                          <path
                            d="M7.49984 18.3334C7.96007 18.3334 8.33317 17.9603 8.33317 17.5001C8.33317 17.0398 7.96007 16.6667 7.49984 16.6667C7.0396 16.6667 6.6665 17.0398 6.6665 17.5001C6.6665 17.9603 7.0396 18.3334 7.49984 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.6668 18.3334C17.1271 18.3334 17.5002 17.9603 17.5002 17.5001C17.5002 17.0398 17.1271 16.6667 16.6668 16.6667C16.2066 16.6667 15.8335 17.0398 15.8335 17.5001C15.8335 17.9603 16.2066 18.3334 16.6668 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M0.833496 0.833252H4.16683L6.40016 11.9916C6.47637 12.3752 6.68509 12.7199 6.98978 12.9652C7.29448 13.2104 7.67575 13.3407 8.06683 13.3333H16.1668C16.5579 13.3407 16.9392 13.2104 17.2439 12.9652C17.5486 12.7199 17.7573 12.3752 17.8335 11.9916L19.1668 4.99992H5.00016"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_188_1778">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="add_to_cart_text">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="hot_deals_products_section">
              <div className="hot_deals_products">
                <div className="hot_deals_products_content">
                  <div className="hot_deals_products_header">
                    <img src={products1} alt="" />
                    <p>Premium Half Sleeve Cotton Shirt</p>
                    <h3 className="product_quantity">1 : Pair</h3>
                    <h2 className="product_price">
                      60 ৳ <span className="product_price_offer">63 ৳</span>
                    </h2>
                    <div className="product_rating">
                      <ReactStars {...firstExample} /> <small>(0)</small>
                    </div>
                  </div>
                  <div className="add_to_cart">
                    <button className="add_to_cart_btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_188_1778)">
                          <path
                            d="M7.49984 18.3334C7.96007 18.3334 8.33317 17.9603 8.33317 17.5001C8.33317 17.0398 7.96007 16.6667 7.49984 16.6667C7.0396 16.6667 6.6665 17.0398 6.6665 17.5001C6.6665 17.9603 7.0396 18.3334 7.49984 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.6668 18.3334C17.1271 18.3334 17.5002 17.9603 17.5002 17.5001C17.5002 17.0398 17.1271 16.6667 16.6668 16.6667C16.2066 16.6667 15.8335 17.0398 15.8335 17.5001C15.8335 17.9603 16.2066 18.3334 16.6668 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M0.833496 0.833252H4.16683L6.40016 11.9916C6.47637 12.3752 6.68509 12.7199 6.98978 12.9652C7.29448 13.2104 7.67575 13.3407 8.06683 13.3333H16.1668C16.5579 13.3407 16.9392 13.2104 17.2439 12.9652C17.5486 12.7199 17.7573 12.3752 17.8335 11.9916L19.1668 4.99992H5.00016"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_188_1778">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="add_to_cart_text">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="hot_deals_products_section">
              <div className="hot_deals_products">
                <div className="hot_deals_products_content">
                  <div className="hot_deals_products_header">
                    <img src={products1} alt="" />
                    <p>Premium Half Sleeve Cotton Shirt</p>
                    <h3 className="product_quantity">1 : Pair</h3>
                    <h2 className="product_price">
                      60 ৳ <span className="product_price_offer">63 ৳</span>
                    </h2>
                    <div className="product_rating">
                      <ReactStars {...firstExample} /> <small>(0)</small>
                    </div>
                  </div>
                  <div className="add_to_cart">
                    <button className="add_to_cart_btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_188_1778)">
                          <path
                            d="M7.49984 18.3334C7.96007 18.3334 8.33317 17.9603 8.33317 17.5001C8.33317 17.0398 7.96007 16.6667 7.49984 16.6667C7.0396 16.6667 6.6665 17.0398 6.6665 17.5001C6.6665 17.9603 7.0396 18.3334 7.49984 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.6668 18.3334C17.1271 18.3334 17.5002 17.9603 17.5002 17.5001C17.5002 17.0398 17.1271 16.6667 16.6668 16.6667C16.2066 16.6667 15.8335 17.0398 15.8335 17.5001C15.8335 17.9603 16.2066 18.3334 16.6668 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M0.833496 0.833252H4.16683L6.40016 11.9916C6.47637 12.3752 6.68509 12.7199 6.98978 12.9652C7.29448 13.2104 7.67575 13.3407 8.06683 13.3333H16.1668C16.5579 13.3407 16.9392 13.2104 17.2439 12.9652C17.5486 12.7199 17.7573 12.3752 17.8335 11.9916L19.1668 4.99992H5.00016"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_188_1778">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="add_to_cart_text">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="hot_deals_products_section">
              <div className="hot_deals_products">
                <div className="hot_deals_products_content">
                  <div className="hot_deals_products_header">
                    <img src={products1} alt="" />
                    <p>Premium Half Sleeve Cotton Shirt</p>
                    <h3 className="product_quantity">1 : Pair</h3>
                    <h2 className="product_price">
                      60 ৳ <span className="product_price_offer">63 ৳</span>
                    </h2>
                    <div className="product_rating">
                      <ReactStars {...firstExample} /> <small>(0)</small>
                    </div>
                  </div>
                  <div className="add_to_cart">
                    <button className="add_to_cart_btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_188_1778)">
                          <path
                            d="M7.49984 18.3334C7.96007 18.3334 8.33317 17.9603 8.33317 17.5001C8.33317 17.0398 7.96007 16.6667 7.49984 16.6667C7.0396 16.6667 6.6665 17.0398 6.6665 17.5001C6.6665 17.9603 7.0396 18.3334 7.49984 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.6668 18.3334C17.1271 18.3334 17.5002 17.9603 17.5002 17.5001C17.5002 17.0398 17.1271 16.6667 16.6668 16.6667C16.2066 16.6667 15.8335 17.0398 15.8335 17.5001C15.8335 17.9603 16.2066 18.3334 16.6668 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M0.833496 0.833252H4.16683L6.40016 11.9916C6.47637 12.3752 6.68509 12.7199 6.98978 12.9652C7.29448 13.2104 7.67575 13.3407 8.06683 13.3333H16.1668C16.5579 13.3407 16.9392 13.2104 17.2439 12.9652C17.5486 12.7199 17.7573 12.3752 17.8335 11.9916L19.1668 4.99992H5.00016"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_188_1778">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="add_to_cart_text">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="hot_deals_products_section">
              <div className="hot_deals_products">
                <div className="hot_deals_products_content">
                  <div className="hot_deals_products_header">
                    <img src={products1} alt="" />
                    <p>Premium Half Sleeve Cotton Shirt</p>
                    <h3 className="product_quantity">1 : Pair</h3>
                    <h2 className="product_price">
                      60 ৳ <span className="product_price_offer">63 ৳</span>
                    </h2>
                    <div className="product_rating">
                      <ReactStars {...firstExample} /> <small>(0)</small>
                    </div>
                  </div>
                  <div className="add_to_cart">
                    <button className="add_to_cart_btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_188_1778)">
                          <path
                            d="M7.49984 18.3334C7.96007 18.3334 8.33317 17.9603 8.33317 17.5001C8.33317 17.0398 7.96007 16.6667 7.49984 16.6667C7.0396 16.6667 6.6665 17.0398 6.6665 17.5001C6.6665 17.9603 7.0396 18.3334 7.49984 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.6668 18.3334C17.1271 18.3334 17.5002 17.9603 17.5002 17.5001C17.5002 17.0398 17.1271 16.6667 16.6668 16.6667C16.2066 16.6667 15.8335 17.0398 15.8335 17.5001C15.8335 17.9603 16.2066 18.3334 16.6668 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M0.833496 0.833252H4.16683L6.40016 11.9916C6.47637 12.3752 6.68509 12.7199 6.98978 12.9652C7.29448 13.2104 7.67575 13.3407 8.06683 13.3333H16.1668C16.5579 13.3407 16.9392 13.2104 17.2439 12.9652C17.5486 12.7199 17.7573 12.3752 17.8335 11.9916L19.1668 4.99992H5.00016"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_188_1778">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="add_to_cart_text">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
                    </Slider>

                    <Slider {...settings} className="mySwiper_hot_deals_sm">
            <div className="hot_deals_products_section">
              <div className="hot_deals_products">
                <div className="hot_deals_products_content">
                  <div className="hot_deals_products_header">
                    <img src={products1} alt="" />
                    <p>Premium Half Sleeve Cotton Shirt</p>
                    <h3 className="product_quantity">1 : Pair</h3>
                    <h2 className="product_price">
                      60 ৳ <span className="product_price_offer">63 ৳</span>
                    </h2>
                    <div className="product_rating">
                      <ReactStars {...firstExample} /> <small>(0)</small>
                    </div>
                  </div>
                  <div className="add_to_cart">
                    <button className="add_to_cart_btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_188_1778)">
                          <path
                            d="M7.49984 18.3334C7.96007 18.3334 8.33317 17.9603 8.33317 17.5001C8.33317 17.0398 7.96007 16.6667 7.49984 16.6667C7.0396 16.6667 6.6665 17.0398 6.6665 17.5001C6.6665 17.9603 7.0396 18.3334 7.49984 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.6668 18.3334C17.1271 18.3334 17.5002 17.9603 17.5002 17.5001C17.5002 17.0398 17.1271 16.6667 16.6668 16.6667C16.2066 16.6667 15.8335 17.0398 15.8335 17.5001C15.8335 17.9603 16.2066 18.3334 16.6668 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M0.833496 0.833252H4.16683L6.40016 11.9916C6.47637 12.3752 6.68509 12.7199 6.98978 12.9652C7.29448 13.2104 7.67575 13.3407 8.06683 13.3333H16.1668C16.5579 13.3407 16.9392 13.2104 17.2439 12.9652C17.5486 12.7199 17.7573 12.3752 17.8335 11.9916L19.1668 4.99992H5.00016"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_188_1778">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="add_to_cart_text">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="hot_deals_products_section">
              <div className="hot_deals_products">
                <div className="hot_deals_products_content">
                  <div className="hot_deals_products_header">
                    <img src={products1} alt="" />
                    <p>Premium Half Sleeve Cotton Shirt</p>
                    <h3 className="product_quantity">1 : Pair</h3>
                    <h2 className="product_price">
                      60 ৳ <span className="product_price_offer">63 ৳</span>
                    </h2>
                    <div className="product_rating">
                      <ReactStars {...firstExample} /> <small>(0)</small>
                    </div>
                  </div>
                  <div className="add_to_cart">
                    <button className="add_to_cart_btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_188_1778)">
                          <path
                            d="M7.49984 18.3334C7.96007 18.3334 8.33317 17.9603 8.33317 17.5001C8.33317 17.0398 7.96007 16.6667 7.49984 16.6667C7.0396 16.6667 6.6665 17.0398 6.6665 17.5001C6.6665 17.9603 7.0396 18.3334 7.49984 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.6668 18.3334C17.1271 18.3334 17.5002 17.9603 17.5002 17.5001C17.5002 17.0398 17.1271 16.6667 16.6668 16.6667C16.2066 16.6667 15.8335 17.0398 15.8335 17.5001C15.8335 17.9603 16.2066 18.3334 16.6668 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M0.833496 0.833252H4.16683L6.40016 11.9916C6.47637 12.3752 6.68509 12.7199 6.98978 12.9652C7.29448 13.2104 7.67575 13.3407 8.06683 13.3333H16.1668C16.5579 13.3407 16.9392 13.2104 17.2439 12.9652C17.5486 12.7199 17.7573 12.3752 17.8335 11.9916L19.1668 4.99992H5.00016"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_188_1778">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="add_to_cart_text">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="hot_deals_products_section">
              <div className="hot_deals_products">
                <div className="hot_deals_products_content">
                  <div className="hot_deals_products_header">
                    <img src={products1} alt="" />
                    <p>Premium Half Sleeve Cotton Shirt</p>
                    <h3 className="product_quantity">1 : Pair</h3>
                    <h2 className="product_price">
                      60 ৳ <span className="product_price_offer">63 ৳</span>
                    </h2>
                    <div className="product_rating">
                      <ReactStars {...firstExample} /> <small>(0)</small>
                    </div>
                  </div>
                  <div className="add_to_cart">
                    <button className="add_to_cart_btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_188_1778)">
                          <path
                            d="M7.49984 18.3334C7.96007 18.3334 8.33317 17.9603 8.33317 17.5001C8.33317 17.0398 7.96007 16.6667 7.49984 16.6667C7.0396 16.6667 6.6665 17.0398 6.6665 17.5001C6.6665 17.9603 7.0396 18.3334 7.49984 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.6668 18.3334C17.1271 18.3334 17.5002 17.9603 17.5002 17.5001C17.5002 17.0398 17.1271 16.6667 16.6668 16.6667C16.2066 16.6667 15.8335 17.0398 15.8335 17.5001C15.8335 17.9603 16.2066 18.3334 16.6668 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M0.833496 0.833252H4.16683L6.40016 11.9916C6.47637 12.3752 6.68509 12.7199 6.98978 12.9652C7.29448 13.2104 7.67575 13.3407 8.06683 13.3333H16.1668C16.5579 13.3407 16.9392 13.2104 17.2439 12.9652C17.5486 12.7199 17.7573 12.3752 17.8335 11.9916L19.1668 4.99992H5.00016"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_188_1778">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="add_to_cart_text">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="hot_deals_products_section">
              <div className="hot_deals_products">
                <div className="hot_deals_products_content">
                  <div className="hot_deals_products_header">
                    <img src={products1} alt="" />
                    <p>Premium Half Sleeve Cotton Shirt</p>
                    <h3 className="product_quantity">1 : Pair</h3>
                    <h2 className="product_price">
                      60 ৳ <span className="product_price_offer">63 ৳</span>
                    </h2>
                    <div className="product_rating">
                      <ReactStars {...firstExample} /> <small>(0)</small>
                    </div>
                  </div>
                  <div className="add_to_cart">
                    <button className="add_to_cart_btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_188_1778)">
                          <path
                            d="M7.49984 18.3334C7.96007 18.3334 8.33317 17.9603 8.33317 17.5001C8.33317 17.0398 7.96007 16.6667 7.49984 16.6667C7.0396 16.6667 6.6665 17.0398 6.6665 17.5001C6.6665 17.9603 7.0396 18.3334 7.49984 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.6668 18.3334C17.1271 18.3334 17.5002 17.9603 17.5002 17.5001C17.5002 17.0398 17.1271 16.6667 16.6668 16.6667C16.2066 16.6667 15.8335 17.0398 15.8335 17.5001C15.8335 17.9603 16.2066 18.3334 16.6668 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M0.833496 0.833252H4.16683L6.40016 11.9916C6.47637 12.3752 6.68509 12.7199 6.98978 12.9652C7.29448 13.2104 7.67575 13.3407 8.06683 13.3333H16.1668C16.5579 13.3407 16.9392 13.2104 17.2439 12.9652C17.5486 12.7199 17.7573 12.3752 17.8335 11.9916L19.1668 4.99992H5.00016"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_188_1778">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="add_to_cart_text">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="hot_deals_products_section">
              <div className="hot_deals_products">
                <div className="hot_deals_products_content">
                  <div className="hot_deals_products_header">
                    <img src={products1} alt="" />
                    <p>Premium Half Sleeve Cotton Shirt</p>
                    <h3 className="product_quantity">1 : Pair</h3>
                    <h2 className="product_price">
                      60 ৳ <span className="product_price_offer">63 ৳</span>
                    </h2>
                    <div className="product_rating">
                      <ReactStars {...firstExample} /> <small>(0)</small>
                    </div>
                  </div>
                  <div className="add_to_cart">
                    <button className="add_to_cart_btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_188_1778)">
                          <path
                            d="M7.49984 18.3334C7.96007 18.3334 8.33317 17.9603 8.33317 17.5001C8.33317 17.0398 7.96007 16.6667 7.49984 16.6667C7.0396 16.6667 6.6665 17.0398 6.6665 17.5001C6.6665 17.9603 7.0396 18.3334 7.49984 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.6668 18.3334C17.1271 18.3334 17.5002 17.9603 17.5002 17.5001C17.5002 17.0398 17.1271 16.6667 16.6668 16.6667C16.2066 16.6667 15.8335 17.0398 15.8335 17.5001C15.8335 17.9603 16.2066 18.3334 16.6668 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M0.833496 0.833252H4.16683L6.40016 11.9916C6.47637 12.3752 6.68509 12.7199 6.98978 12.9652C7.29448 13.2104 7.67575 13.3407 8.06683 13.3333H16.1668C16.5579 13.3407 16.9392 13.2104 17.2439 12.9652C17.5486 12.7199 17.7573 12.3752 17.8335 11.9916L19.1668 4.99992H5.00016"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_188_1778">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="add_to_cart_text">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="hot_deals_products_section">
              <div className="hot_deals_products">
                <div className="hot_deals_products_content">
                  <div className="hot_deals_products_header">
                    <img src={products1} alt="" />
                    <p>Premium Half Sleeve Cotton Shirt</p>
                    <h3 className="product_quantity">1 : Pair</h3>
                    <h2 className="product_price">
                      60 ৳ <span className="product_price_offer">63 ৳</span>
                    </h2>
                    <div className="product_rating">
                      <ReactStars {...firstExample} /> <small>(0)</small>
                    </div>
                  </div>
                  <div className="add_to_cart">
                    <button className="add_to_cart_btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_188_1778)">
                          <path
                            d="M7.49984 18.3334C7.96007 18.3334 8.33317 17.9603 8.33317 17.5001C8.33317 17.0398 7.96007 16.6667 7.49984 16.6667C7.0396 16.6667 6.6665 17.0398 6.6665 17.5001C6.6665 17.9603 7.0396 18.3334 7.49984 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.6668 18.3334C17.1271 18.3334 17.5002 17.9603 17.5002 17.5001C17.5002 17.0398 17.1271 16.6667 16.6668 16.6667C16.2066 16.6667 15.8335 17.0398 15.8335 17.5001C15.8335 17.9603 16.2066 18.3334 16.6668 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M0.833496 0.833252H4.16683L6.40016 11.9916C6.47637 12.3752 6.68509 12.7199 6.98978 12.9652C7.29448 13.2104 7.67575 13.3407 8.06683 13.3333H16.1668C16.5579 13.3407 16.9392 13.2104 17.2439 12.9652C17.5486 12.7199 17.7573 12.3752 17.8335 11.9916L19.1668 4.99992H5.00016"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_188_1778">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="add_to_cart_text">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="hot_deals_products_section">
              <div className="hot_deals_products">
                <div className="hot_deals_products_content">
                  <div className="hot_deals_products_header">
                    <img src={products1} alt="" />
                    <p>Premium Half Sleeve Cotton Shirt</p>
                    <h3 className="product_quantity">1 : Pair</h3>
                    <h2 className="product_price">
                      60 ৳ <span className="product_price_offer">63 ৳</span>
                    </h2>
                    <div className="product_rating">
                      <ReactStars {...firstExample} /> <small>(0)</small>
                    </div>
                  </div>
                  <div className="add_to_cart">
                    <button className="add_to_cart_btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_188_1778)">
                          <path
                            d="M7.49984 18.3334C7.96007 18.3334 8.33317 17.9603 8.33317 17.5001C8.33317 17.0398 7.96007 16.6667 7.49984 16.6667C7.0396 16.6667 6.6665 17.0398 6.6665 17.5001C6.6665 17.9603 7.0396 18.3334 7.49984 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.6668 18.3334C17.1271 18.3334 17.5002 17.9603 17.5002 17.5001C17.5002 17.0398 17.1271 16.6667 16.6668 16.6667C16.2066 16.6667 15.8335 17.0398 15.8335 17.5001C15.8335 17.9603 16.2066 18.3334 16.6668 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M0.833496 0.833252H4.16683L6.40016 11.9916C6.47637 12.3752 6.68509 12.7199 6.98978 12.9652C7.29448 13.2104 7.67575 13.3407 8.06683 13.3333H16.1668C16.5579 13.3407 16.9392 13.2104 17.2439 12.9652C17.5486 12.7199 17.7573 12.3752 17.8335 11.9916L19.1668 4.99992H5.00016"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_188_1778">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="add_to_cart_text">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="hot_deals_products_section">
              <div className="hot_deals_products">
                <div className="hot_deals_products_content">
                  <div className="hot_deals_products_header">
                    <img src={products1} alt="" />
                    <p>Premium Half Sleeve Cotton Shirt</p>
                    <h3 className="product_quantity">1 : Pair</h3>
                    <h2 className="product_price">
                      60 ৳ <span className="product_price_offer">63 ৳</span>
                    </h2>
                    <div className="product_rating">
                      <ReactStars {...firstExample} /> <small>(0)</small>
                    </div>
                  </div>
                  <div className="add_to_cart">
                    <button className="add_to_cart_btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_188_1778)">
                          <path
                            d="M7.49984 18.3334C7.96007 18.3334 8.33317 17.9603 8.33317 17.5001C8.33317 17.0398 7.96007 16.6667 7.49984 16.6667C7.0396 16.6667 6.6665 17.0398 6.6665 17.5001C6.6665 17.9603 7.0396 18.3334 7.49984 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.6668 18.3334C17.1271 18.3334 17.5002 17.9603 17.5002 17.5001C17.5002 17.0398 17.1271 16.6667 16.6668 16.6667C16.2066 16.6667 15.8335 17.0398 15.8335 17.5001C15.8335 17.9603 16.2066 18.3334 16.6668 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M0.833496 0.833252H4.16683L6.40016 11.9916C6.47637 12.3752 6.68509 12.7199 6.98978 12.9652C7.29448 13.2104 7.67575 13.3407 8.06683 13.3333H16.1668C16.5579 13.3407 16.9392 13.2104 17.2439 12.9652C17.5486 12.7199 17.7573 12.3752 17.8335 11.9916L19.1668 4.99992H5.00016"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_188_1778">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="add_to_cart_text">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="hot_deals_products_section">
              <div className="hot_deals_products">
                <div className="hot_deals_products_content">
                  <div className="hot_deals_products_header">
                    <img src={products1} alt="" />
                    <p>Premium Half Sleeve Cotton Shirt</p>
                    <h3 className="product_quantity">1 : Pair</h3>
                    <h2 className="product_price">
                      60 ৳ <span className="product_price_offer">63 ৳</span>
                    </h2>
                    <div className="product_rating">
                      <ReactStars {...firstExample} /> <small>(0)</small>
                    </div>
                  </div>
                  <div className="add_to_cart">
                    <button className="add_to_cart_btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_188_1778)">
                          <path
                            d="M7.49984 18.3334C7.96007 18.3334 8.33317 17.9603 8.33317 17.5001C8.33317 17.0398 7.96007 16.6667 7.49984 16.6667C7.0396 16.6667 6.6665 17.0398 6.6665 17.5001C6.6665 17.9603 7.0396 18.3334 7.49984 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.6668 18.3334C17.1271 18.3334 17.5002 17.9603 17.5002 17.5001C17.5002 17.0398 17.1271 16.6667 16.6668 16.6667C16.2066 16.6667 15.8335 17.0398 15.8335 17.5001C15.8335 17.9603 16.2066 18.3334 16.6668 18.3334Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M0.833496 0.833252H4.16683L6.40016 11.9916C6.47637 12.3752 6.68509 12.7199 6.98978 12.9652C7.29448 13.2104 7.67575 13.3407 8.06683 13.3333H16.1668C16.5579 13.3407 16.9392 13.2104 17.2439 12.9652C17.5486 12.7199 17.7573 12.3752 17.8335 11.9916L19.1668 4.99992H5.00016"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_188_1778">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="add_to_cart_text">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
                    </Slider>

          

                </div>
            </div>
       </section>
    );
};

export default NewArrivalSection;