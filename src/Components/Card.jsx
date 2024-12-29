
const Card = ({image, title, items}) => {
    return (
        <div className="card card-compact bg-base-100 rounded-none shadow-2xl">
            <figure>
                <img src={image} alt="" />
            </figure>
            <div className="flex flex-col items-center space-y-3 my-8">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <p>{items}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline border-0 border-b-4 mt-4 mb-2 text-orange-400 uppercase">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Card;