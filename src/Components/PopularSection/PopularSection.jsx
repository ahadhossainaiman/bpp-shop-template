import categoryOne from '../../assets/category-4.png';

const PopularSection = () => {
    return (
        <section className='category_section'>
        <h1>Popular on BPP Shop</h1>
        <div className="category_container">
            <div className="category_item">
                <img src={categoryOne} alt="" />
                <small className='category_name'>Beef</small>
            </div>
            <div className="category_item">
                <img src={categoryOne} alt="" />
                <small className='category_name'>Beef</small>
            </div>
            <div className="category_item">
                <img src={categoryOne} alt="" />
                <small className='category_name'>Beef</small>
            </div>
            <div className="category_item">
                <img src={categoryOne} alt="" />
                <small className='category_name'>Beef</small>
            </div>
            <div className="category_item">
                <img src={categoryOne} alt="" />
                <small className='category_name'>Beef</small>
            </div>
            <div className="category_item">
                <img src={categoryOne} alt="" />
                <small className='category_name'>Beef</small>
            </div>
            <div className="category_item">
                <img src={categoryOne} alt="" />
                <small>Beef</small>
            </div>
            <div className="category_item">
                <img src={categoryOne} alt="" />
                <small className='category_name'>Beef</small>
            </div>
          
        </div>
    </section>
    );
};

export default PopularSection;