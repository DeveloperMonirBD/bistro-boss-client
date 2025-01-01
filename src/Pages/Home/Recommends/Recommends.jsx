import Card from '../../../Components/Card';
import SectionTitle from '../../../Components/SectionTitle';
import salad from '../../../assets/menu/salad-bg.jpg'

const Recommends = () => {
    return (
        <section className="my-20">
            <SectionTitle heading="Chef Recommends" subHeading="Should Try" />

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* <Card image={salad} title="Caeser Salad" items="Lettuce, Eggs, Pamesan Cheese, Chicken, Breast Fillets." /> */}
            </div>
        </section>
    );
};

export default Recommends;
