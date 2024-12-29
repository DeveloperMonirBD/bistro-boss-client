import Banner from "./Banner/Banner";
import Catagory from "./Catagory/Catagory";
import PopularMenu from "./PopularMenu.jsx/PopularMenu";
import Services from "./Services";


const Home = () => {
    return (
        <div>
            <Banner />
            <Catagory />
            <Services />
            <PopularMenu />
        </div>
    );
};

export default Home;