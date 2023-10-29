import './CustomerServices.css';

const CustomerService = () => {
    return (
        <section>
            <div className="customer_service_container">
                <div className="daily_deals">
                    <div className="text">
                    <h1>Amazing Daily Deals</h1>
                    <p>Stock up on your favorite groceries for less with our unbeatable daily deals! Don't mis</p>
                    </div>
                </div>
                <div className="customer_supports">
                <div className="text">
                    <h1>24/7 Customer Support</h1>
                    <p>Stock up on your favorite groceries for less with our unbeatable daily deals! Don't miss</p>
                    </div>
                </div>
                <iframe className='online_video'  width="708" height=" 280" src="https://www.youtube.com/embed/m3gy7ExC69E" title="Online Shopping Store In Bangladesh। BPPSHOP" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                
            </div>
        </section>
    );
};

export default CustomerService;