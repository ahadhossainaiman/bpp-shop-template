import './OfferSection.css'
import limitedSale from '../../assets/limitted_time.png';
import hotSale from '../../assets/hot_sale.png'

const OfferSection = () => {
    return (
        <section className="offer_section">
            <div className="offer_container">
                <div className="offer_banner">
                    <img src={limitedSale} alt="" />
                    <a href="">Shop Now</a>
                </div>
                <div className="offer_banner">
                    <img src={hotSale} alt="" />
                    <a href="">Shop Now</a>
                </div>
            </div>
        </section>
    );
};

export default OfferSection;