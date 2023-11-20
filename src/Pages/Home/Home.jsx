
import BestSellingSection from '../../Components/BestSellingSection/BestSellingSection';
import BrandsSection from '../../Components/BrandsSection/BrandsSection';
import CategorySection from '../../Components/CategorySection/CategorySection';
import CustomerService from '../../Components/CustomerService/CustomerService';
import DiscountSection from '../../Components/DiscountSection/DiscountSection';
import FacilitiesSection from '../../Components/FacilitiesSection/FacilitiesSection';
import Footer from '../../Components/Footer/Footer';
import HeroSection from '../../Components/HeroSection/HeroSection';
import HotSaleSection from '../../Components/HotSaleSection/HotSaleSection';
import NewArrivalSection from '../../Components/NewArrivalSection/NewArrivalSection';
import OfferSection from '../../Components/OfferSection/OfferSection';
import PopularSection from '../../Components/PopularSection/PopularSection';
import PosterSection from '../../Components/PosterSection/PosterSEction';
import ProductsSection from '../../Components/ProductsSection/ProductsSection';
import PosterImg from '../../assets/banner.png';
import PosterImg2 from '../../assets/brands2.png'
import BrandsImg from '../../assets/tecno.png';
import StoreImg from '../../assets/walton.png';

const Home = () => {
    return (
        <>
            <HeroSection/>
            {/* <HotSaleSection/> */}
            {/* <CategorySection/>
            <DiscountSection/>
            <PopularSection/>
            <NewArrivalSection/>
            <OfferSection/>
            <BestSellingSection/>
            <PosterSection img={PosterImg}/>
            <BrandsSection title='Brands' img={BrandsImg} brandsName='Techno Mobile' />
            <PosterSection img={PosterImg2}/>
            <BrandsSection title='Store' img={StoreImg} brandsName='Amader Electronics' />
            <ProductsSection/>
            <CustomerService/>
            <FacilitiesSection/>
            <Footer/> */}
        </>

    );
};

export default Home;