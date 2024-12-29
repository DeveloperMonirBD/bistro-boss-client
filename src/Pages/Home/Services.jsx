import service1 from "../../assets/home/chef-service.jpg"

const Services = () => {
    return (
        <div
            className="hero h-[400px]"
            style={{
                backgroundImage: `url(${service1})`
            }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-neutral text-center">
                <div className="max-w-5xl h-[200px] mx-auto bg-white p-10">
                    <h3 className="text-2xl font-bold pb-4">BISTRO BOSS</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio alias deleniti voluptatem incidunt, officia repellendus? Esse quibusdam quas repellat? Quasi!</p>                  
                </div>
            </div>
        </div>
    );
};

export default Services;
