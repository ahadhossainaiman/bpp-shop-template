import './PosterSection.css';

const PosterSection = ({img}) => {
    return (
        <section className="poster_section">
            <img src={img} alt="" />
        </section>
    );
};

export default PosterSection;