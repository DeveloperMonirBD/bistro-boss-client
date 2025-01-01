import SectionTitle from '../../../Components/SectionTitle';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { useEffect, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/styles.css';
import quote from "../../../assets/icon/quote.png";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <section className="my-20">
            <SectionTitle subHeading="What our Client Say" heading="Testimonials" />

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {reviews.map(review => (
                    <SwiperSlide key={review._id}>
                        <div className=" flex flex-col items-center my-4 mx-24 space-y-8">
                            <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />

                            <img className="w-20 mx-auto pt-4" src={quote} alt="" />

                            <p>{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
