import Banner from './Banner/Banner';
import Catagory from './Catagory/Catagory';
import Contact from './Contact';
import Featured from './Featured/Featured';
import PopularMenu from './PopularMenu.jsx/PopularMenu';
import Recommends from './Recommends/Recommends';
import Services from './Services';
import Testimonials from './Testimonial/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <Catagory />
            <Services />
            <PopularMenu />
            <Contact />
            <Recommends />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;
