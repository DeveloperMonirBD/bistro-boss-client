
const Card = ({ item }) => {
    
    const {name, image, price, recipe} = item
    return (
        <div className="card card-compact bg-base-100 rounded-none shadow-2xl">
            <figure>
                <img src={image} alt="" />
            </figure>
            <p className="absolute right-8 mt-4 px-4 py-2 bg-slate-900 text-orange-400">${price}</p>
            <div className="flex flex-col items-center space-y-3 p-8">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline border-0 border-b-4 mt-4 text-orange-400 hover:text-orange-400 hover:border-orange-400 uppercase">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Card;