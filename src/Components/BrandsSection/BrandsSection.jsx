
import './BrandsSection.css';

const BrandsSection = ({title,img,brandsName}) => {
    return (
        <section className='brands_section'>
            <div className="brands_header">
                <p>{title}</p>
                <a href="">View more</a>
            </div>
            <div className="brands_category">
                <div className="brands_category_cart">
                    <img src={img} alt="" />
                    <p className='brands_category_title'>{brandsName}</p>
                </div>
                <div className="brands_category_cart">
                    <img src={img} alt="" />
                    <p className='brands_category_title'>{brandsName}</p>
                </div>
                <div className="brands_category_cart">
                    <img src={img} alt="" />
                    <p className='brands_category_title'>{brandsName}</p>
                </div>
                <div className="brands_category_cart">
                    <img src={img} alt="" />
                    <p className='brands_category_title'>{brandsName}</p>
                </div>
                <div className="brands_category_cart">
                    <img src={img} alt="" />
                    <p className='brands_category_title'>{brandsName}</p>
                </div>
                <div className="brands_category_cart">
                    <img src={img} alt="" />
                    <p className='brands_category_title'>{brandsName}</p>
                </div>
                <div className="brands_category_cart">
                    <img src={img} alt="" />
                    <p className='brands_category_title'>{brandsName}</p>
                </div>
                <div className="brands_category_cart">
                    <img src={img} alt="" />
                    <p className='brands_category_title'>{brandsName}</p>
                </div>
                <div className="brands_category_cart">
                    <img src={img} alt="" />
                    <p className='brands_category_title'>{brandsName}</p>
                </div>
                <div className="brands_category_cart">
                    <img src={img} alt="" />
                    <p className='brands_category_title'>{brandsName}</p>
                </div>
                <div className="brands_category_cart">
                    <img src={img} alt="" />
                    <p className='brands_category_title'>{brandsName}</p>
                </div>
                <div className="brands_category_cart">
                    <img src={img} alt="" />
                    <p className='brands_category_title'>{brandsName}</p>
                </div>
                <div className="brands_category_cart">
                    <img src={img} alt="" />
                    <p className='brands_category_title'>{brandsName}</p>
                </div>
                <div className="brands_category_cart">
                    <img src={img} alt="" />
                    <p className='brands_category_title'>{brandsName}</p>
                </div>
                <div className="brands_category_cart">
                    <img src={img} alt="" />
                    <p className='brands_category_title'>{brandsName}</p>
                </div>
                <div className="brands_category_cart">
                    <img src={img} alt="" />
                    <p className='brands_category_title'>{brandsName}</p>
                </div>
            </div>
        </section>
    );
};

export default BrandsSection;