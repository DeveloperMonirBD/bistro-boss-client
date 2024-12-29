import SectionTitle from '../../../Components/SectionTitle';
import featuredImage from '../../../assets/home/featured.jpg';
import './Featured.css'

const Featured = () => {
    return (
        <div className=" featured-item bg-fixed text-white mb-20">
            <div className="bg-black bg-opacity-60 pt-6">
                <SectionTitle subHeading="Check it Out" heading="Featured Item" />

                <div className="md:flex gap-8 justify-center items-center pb-20 px-36">
                    <div>
                        <img src={featuredImage} alt="" />
                    </div>

                    <div>
                        <p>Aug 20, 2029</p>
                        <p className="uppercase">Where can i get some ?</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis amet fugit nesciunt esse, sint distinctio id consequatur velit, saepe dicta cumque consectetur? Corrupti
                            atque, consectetur eveniet nesciunt itaque sapiente, suscipit dolorum praesentium porro voluptates cum illo vero quisquam distinctio laboriosam nobis modi dicta placeat
                            facilis rem, animi perspiciatis? Inventore, ut!
                        </p>
                        <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
